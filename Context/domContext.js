
let domContextStore = undefined;

export const setContext = (key, value, node) => {
    
    if (!domContextStore){
        domContextStore = new Map();
    }
    if (domContextStore.get(key)){
        const item = domContextStore.get(key);
        item.subscriptions.forEach((v,n)=>{
            const p = checkUpwards(n);
            if (p && p === node){
                v(value);
            }
        });
        item.value.set(node, value);
        return;
    }
    domContextStore.set(key,{value:new Map([node,value]),subscriptions:new Map());
};

const checkUpwards = (node, key) => {
    
    const topic = domContextStore.get(key);
    
    if (!topic){
        return undefined;
    }
    
    let check = node;
    while(check = check.parentNode){
        if (topic.value.has(check)){
            return check;
        }
    }
    return undefined;
}

export const getContext = (key,update,node) => {
    
    if (!domContextStore){
        domContextStore = new Map();
    }
    const item = domContextStore.get(key);
    if (!item){
        domContextStore.set(key, {subscriptions:new Map([[node, update]])});
        return undefined;
    }
    item.subscriptions.set(node, update);
    
    return item.value.get(checkUpwards(node, key));
}

export const unsubscribe = (key, node) => {
    
    const item = domContextStore.get(key);
    if (!item){
        return false;
    }
    return item.subscriptions.delete(node);
}