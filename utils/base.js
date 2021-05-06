import { getElement } from "../Context/getElement";
import { action } from "./actionStore";

const evaluate = (a,props={})=> {
    const ret = {};
    for (let key of Object.keys(a)){
        if ( key === "data-__getel__"){
            ret[key] = a[key].map(v=>{
                // look if props are already mapped
                if (v.props){
                    return v;
                }
                else{
                    return {act:v.act,props}
                }
            })
            continue;
        }
        ret[key] = _=>a[key](props);
    }
    return ret;
}

const handler = (props) => ({
    get: (t, p, __) => {
        if (p==="evaluate"){
            return evaluate(t,props);
        }
        if (p === "add") {
            return add(evaluate(t,props))
        }
        if (p === "remove") {
            return remove(evaluate(t,props))
        }
        const a = Reflect.get(t, p, __);
        if (p === "data-__getel__") {
            if (a && a.length>0){
                return getElement(action(...a.map(v=>({...{props},...v}))))
            }
            return undefined;
           
        }
        return a(props);
    }
})

const add = (o) => (...x) => {

    let classes = o.class ? [o.class()] : [];
    let actions = o["data-__getel__"]||[];
    let obj = o;
    for (let t of x) {

        if (!t) {
            continue;
        }

        if (typeof t === "string") {
            classes.push(t);
            continue;
        }
        let ev = t.evaluate;

        if (ev){
            if (ev["data-__getel__"]){
                actions = actions.concat(ev["data-__getel__"]);
            }
            if (ev.class){
                classes = classes.concat(ev.class());
            }
            obj = {...o,...ev};
            continue;
        }
        console.log(t, typeof t, " is not allowed");
    }
    return new Proxy({ ...obj, class: _=>classes.join(' '),"data-__getel__":actions}, handler())
}

const remove = (o) => (...classes) => {
    o.class = _=>o.class().split(' ')
        .filter(v => !classes.includes(v));
    return new Proxy(o, handler());
}

const custom = (t) => (defaultProps,
    ...more) => {
    let z = more;
    const der = (props) => {
        const p = { ...defaultProps, ...props };
        return add(t(p).evaluate)(
            ...z.map(v => typeof v === 'function' ?
                v(p).evaluate : v)
        )
    }
    return new Proxy(der, functionHandler)
}

const functionHandler = {
    get: (t, p) => {
        if (p === 'remove') {
            return removeStore(t);
        }
        return custom(t);
    }
}

export const removeStore = (t)=> (...classes) => {
    return (props) => {
        return t(props).remove(...classes)
    }
}
/*
export const base = (o) => {

    const w = (props) => new Proxy(o(props), handler);

    return new Proxy(w, functionHandler);
}

export const baseClass = (classGeneratingFunction) => base((props = {}) => ({ class: classGeneratingFunction(props) }));
*/
export const base = (o, ...actions) => {
    let x = o;
    if (actions.length > 0) {
        // actions are collected as an object, so that individual props can be added per action
        x["data-__getel__"] = actions.map(v=>({act:v}));
    }
    const w = (props={}) => new Proxy(x, handler(props));

    return new Proxy(w, functionHandler);
}

export const baseClass = (classGeneratingFunction) => base({ class: classGeneratingFunction });