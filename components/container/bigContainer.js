
import {baseAction} from '../../utils';
import {w_full} from 'linea-ui-project-css/css/w-full';
import {max_w_7xl} from 'linea-ui-project-css/css/max-w-7xl';
import {mx_auto} from 'linea-ui-project-css/css/mx-auto';
import {relative as relativeC} from 'linea-ui-project-css/css/relative';

export const bigContainer = baseAction((node, props) => {
    const {relative} = props; 
    const classes = [
        w_full,
        max_w_7xl,
        mx_auto
    ]
    if (relative){
        classes.push(relativeC)
    }
    return {classes}
})