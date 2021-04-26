
import {baseAction} from '../../utils';
import {w_full} from 'linea-ui-project-css/css/w-full';
import {max_w_7xl} from 'linea-ui-project-css/css/max-w-7xl';
import {mx_auto} from 'linea-ui-project-css/css/mx-auto';
import {relative as relativeC} from 'linea-ui-project-css/css/relative';

export const bigContainerA = baseAction((node, props) => {
    return { classes: bigContainerR(props) }
})

export const bigContainerR = (props, ...other) => {
    const {relative} = props; 
    
    const classes = [
        w_full,
        max_w_7xl,
        mx_auto
    ]
    
    if (relative){
        classes.push(relativeC)
    }
    
    return classes.concat(other);
}

export const bigContainer = (props, ...other) => bigContainerR(props, ...other).join(' ');