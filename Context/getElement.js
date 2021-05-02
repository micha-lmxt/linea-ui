import {tick} from 'svelte';

let id=0;
let dirty = false;
let requests = new Map();

const requestGet = (id,callback,trys) => {
    requests.set(id.toString(), {callback,trys});
    
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
                
                cb.callback(el);
                
                requests.delete(key)
            }
            
            delete el.dataset.__getel__;
        }
        dirty=false;
        if (requests.size>0){
            requests.forEach((v,k)=>{
                if (v.trys>0){
                    requestGet(k,v.callback,v.trys-1);
                }else{
                    v.callback();
                }
            })
        }else{
            i=0;
        }
        
        
    })
}
const numtrys = 10;

export const getElement = (callback) => {
    const id = i++;
    requestGet(id,callback,numtrys);
    return {"data-__getel__":id};
}