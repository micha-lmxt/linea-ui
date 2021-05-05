import {c} from "linea-ui-project-css/css/c.js";

export const cleanup = (node, classes) => {
    if (classes.length>0){
        node.classList.remove(...classes);
    }
}
export const setClasses = (node,classes) => {
    node.classList.value = c(...classes, node.classList.value);
}