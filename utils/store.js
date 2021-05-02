import {writable,derived} from 'svelte/store';


const handler = {
    get:(t,p) => {
        if (p === "add"){
            return add(t)
        }
        if(p === "remove"){
            return remove(t)
        }
        return Reflect.get(t,p);
    }
}

const add = (o) => (...x) => {
    
    let classes = o.class?[o.class]:[];
    let obj = o;
    for (let t of x){
        
        if (!t){
            continue;
        }
        
        if (t.subscribe!==undefined){
            //???
            console.log(t,"missing $?");
            continue;
        }
        
        if (typeof t === "string"){
            classes.push(t);
            continue;
        }
        
        if( typeof t === "object"){
            if (t.class){
                classes.push(t.class);
            }
            obj = {...obj,t};
            continue;
        }
        console.log(t,typeof t, " is not allowed");
    }
    return new Proxy({...obj, class:classes.join(' ')}, handler)
}

const remove = (o) => (...classes) => {
    o.class = o.class.split(' ')
        .filter(v=>!classes.includes(v));
    return new Proxy(o,handler);
}

const styleAdds = (o) => ({
    add: ,
    remove
})


const custom = (t) => (defaultProps,
    ...more) => {
        let z = more;
        const stores =[
            t,
            ...z.filter(v=>v&&v.subscribe!==undefined)
        ]
        const der= derived(
            stores,
            arr => {
                //todo: think abou the ordering
                return (props) => add({})(
                    ...arr.map(v=>v({...defaultProps,...props})),
                    ...z.filter(v=>v&&v.subscribe===undefined)
                )
            }
        )
        return {...der,custom:custom(der),remove:removeStore(der)}
}
const removeStore = (s)=>(...classes)=>{
    const der = derived(s,$s=>(props)=>$s(props).remove(...classes))

    return {...der,custom:custom(der),remove:removeStore(der)}
}
export const store=(o)=>{
    
    const w = writable((props)=>new Proxy(o(props),handler);
    
    return {subscribe:w.subscribe,custom:custom(w),remove:removeStore(w)};
}