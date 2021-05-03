const store=new Map();

const onUnmount = (obj, node)=>(x,o)=>{
    if (!x.find(v=>v.removedNodes.find(w=>w===node)
    const map = store.get(obj);
    if (!map){
        return;
    }
    map.get(node)??.forEach(v=>v.destroy());
    store.delete(node);
    
}

export const action = (obj,props={},...act) => (node) => {
    if (!node){
        return;
    }
    let map = store.get(obj);
    if (!map){
        map = new Map();
        store.set(obj, map);
    }

    const current = map.get(node);
    if (current){
        current.forEach(v=>v.update(props));
        return;
    }
    
    map.set(node, act.map(v=>v(node,props));
} 
