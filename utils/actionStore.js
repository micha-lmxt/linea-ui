const store = new Map();

const onUnmount = (obj, node) => (x, o) => {
    let n = node;
    while (n = n.parentNode) {
        if (x.find(mutationRecord => mutationRecord.target === n) || n === document) {
            // is still in DOM
            return;
        }
    }

    // nothing found, so this element seems to be removed from DOM

    o.disconnect();

    if (!store){
        return;
    }

    const type = store.get(obj);

    if (!type){
        return;
    }

    const actions = type.get(node)||[];
    actions.forEach(v=>v.destroy && v.destroy());
    type.delete(node);
}

export const action = (obj, props = {}, ...act) => (node,init=false) => {
    if (!node) {
        return;
    }

    let map = store.get(obj);

    if (!map) {
        map = new Map();
        store.set(obj, map);
    }

    const current = map.get(node);
    if (current) {
        current.forEach(v => v.update(props,init));
        return;
    }
    
    const observer = new MutationObserver(onUnmount(obj, node));
    
    let n = node.parentNode;

    while(n && n.tagName.toUpperCase() !== "HTML"){
        observer.observe(n,{childList:true});
        n = n.parentNode;
    }

    map.set(node, act.map(v => v(node, props)));

} 
