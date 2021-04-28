import {text_3xl} from 'linea-ui-project-css/css/text-3xl';
import {baseAction} from '../../utils';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_4} from 'linea-ui-project-css/css/my-4';


export const largeTextA = baseAction((node, props) => {
    return {classes:largeTextR(props)}
})

export const largeTextR = (props={}, ...other) => [
        ...getColor(props.color,props.colorDark),
        text_3xl,
        p_2, mx_2,my_4,
    ].concat(other)
    
export const largeText = (props, ...other) => largeTextR(props, ...other).join(' ');
