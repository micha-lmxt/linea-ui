
let keyContextStore = undefined;

export const setContext = (key,value) => {
    
    if (!keyContextStore){
        keyContextStore = new Map();
    }
    if (keyContextStore.get(key)){
        const item = keyContextStore.get(key);
        item.subscriptions.forEach(v=>{
            v(value)
        });
        item.value = value;
        return;
    }
    keyContextStore.set(key,{value,subscriptions:new Map()});
};

export const getContext = (key,update,node) => {
    
    if (!keyContextStore){
        keyContextStore = new Map();
    }
    const item = keyContextStore.get(key);
    if (!item){
        if (node && update){
            keyContextStore.set(key, {subscriptions:new Map([[node, update]])});
        }
        return undefined;
    }
    if (node && update){
        item.subscriptions.set(node, update);
    }
    return item.value;
}

export const unsubscribe = (key, node) => {
    
    const item = keyContextStore.get(key);
    if (!item){
        return false;
    }
    return item.subscriptions.delete(node);
}
