import {tick} from 'svelte';

let id=0;
let dirty = false;
let requests = new Map();

const requestSetIDs = (id,callback) => {
    requests.set(id, callback);
    
    if (dirty){
        return;
    }
    
    dirty=true;
    
    tick().then(_=>{
        const elements = document.querySelectorAll("[data-__setid__]");
        for (const el of elements){
            const setted = !el.id;
            if(setted){
                el.id = "_l_" + el.dataset.__setid__;
            }
                        
            const cb = requests.get(el.dataset.__setid__);
            if(cb){
                cb(setted,el.id);
            }
            
            delete el.dataset.__setid__;
        }
        
        requests.clear()
        dirty=false;
    })
}

export const setID = (callback) => {
    const id = i++;
    requestSetIDs(id,callback);
    return {"data-__setid__":id};
}