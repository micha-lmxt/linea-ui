const handler = {
    get: (t, p) => {
        if (p === "add") {
            return add(t)
        }
        if (p === "remove") {
            return remove(t)
        }
        return Reflect.get(t, p);
    }
}

const add = (o) => (...x) => {

    let classes = o.class ? [o.class] : [];
    let obj = o;
    for (let t of x) {

        if (!t) {
            continue;
        }

        if (typeof t === "string") {
            classes.push(t);
            continue;
        }

        if (typeof t === "object") {
            if (t.class) {
                classes.push(t.class);
            }
            obj = { ...obj, ...t };
            continue;
        }
        console.log(t, typeof t, " is not allowed");
    }
    return new Proxy({ ...obj, class: classes.join(' ') }, handler)
}

const remove = (o) => (...classes) => {
    o.class = o.class.split(' ')
        .filter(v => !classes.includes(v));
    return new Proxy(o, handler);
}

const custom = (t) => (defaultProps,
    ...more) => {
    let z = more;
    const der = (props) => {
        const p = { ...defaultProps, ...props };
        return add(t(p))(
            ...z.map(v => typeof v === 'function' ?
                v(p) : v)
        )
    }

    return new Proxy(der, functionHandler)
}

const removeStore = (s) => (...classes) => {
    const der = derived(s, $s => (props) => $s(props).remove(...classes))

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

export const base = (o) => {

    const w = (props) => new Proxy(o(props), handler);

    return new Proxy(w, functionHandler);
}
export const baseClass = (classGeneratingFunction) => base((props = {}) => ({ class: classGeneratingFunction(props) }));