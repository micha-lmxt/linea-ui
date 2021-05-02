const store=new Map();
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
