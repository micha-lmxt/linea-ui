import {c} from "linea-ui-project-css/css/c.js";

export const cleanup = (node, classes, subscriptions) => {
    if (classes.length>0){
        node.classList.remove(...classes);
    }
    subscriptions.forEach(v=>v());
    subscriptions.length=0;
}
export const setClasses = (node,classes) => {
    node.classList.value = c(...classes, node.classList.value);
}