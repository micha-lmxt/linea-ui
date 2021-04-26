import {baseAction} from '../../utils';
import {w_full} from 'linea-ui-project-css/css/w-full';

export const maxContainerA = baseAction((node, props) => {
    return {classes:maxContainerR(props)}
})
export const maxContainerR = (props, ...other) => [w_full].concat(other);

export const maxContainer = ( props, ...other) => maxContainerR(props,...other).join(' ');