import {tick} from 'svelte';

let i=0;
let dirty = false;
let requests = new Map();

const requestGet = (id,callback) => {
    requests.set(id.toString(), {callback:[callback]});
    
    if (dirty){
        return;
    }
    
    dirty=true;
    
    tick().then(_=>{
        const elements = document.querySelectorAll("[data-__getel__]");
        for (const el of elements){
            const key = el.dataset.__getel__;
            const cb = requests.get(key);
            if(cb){
                cb.callback.forEach(v=>v(el,true));
                requests.delete(key)
            }
            delete el.dataset.__getel__;
        }
        dirty=false;
        if (requests.size>0){
            requests.forEach((v,k)=>{
                v.callback.forEach(w=>w());
            })
            requests.clear();
            i=0;
        }
        
        
    })
}

export const getElement = (callback) => {
    let browser = false;
    try {
        if (document){
            browser = true;
        }
    } catch(e){}
    if (!browser){
        return undefined
    }
    const id = i++;
    requestGet(id,callback);
    return id;
}

export const addRequest = (id,callback) => {
    const req = requests.get(id.toString());
    if (!req){
        return;
    }
    req.callback.push(callback);
};