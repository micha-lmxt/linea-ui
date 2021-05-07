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
    actions.destroy && actions.destroy();
    type.delete(node);
}

export const action = (...act) => (node,init=false) => {

    if (!node) {
        return;
    }
    for (let comb of act){

        const {act,props} = comb;

        let map = store.get(act);

        if (!map) {
            map = new Map();
            store.set(act, map);
        }

        const current = map.get(node);
        if (current) {
            current.update(props,init);
            continue;
        }
        
        // register new action

        const observer = new MutationObserver(onUnmount(act, node));
        
        let n = node.parentNode;

        while(n && n.tagName.toUpperCase() !== "HTML"){
            observer.observe(n,{childList:true});
            n = n.parentNode;
        }

        map.set(node, act(node, props));
    }

} 
