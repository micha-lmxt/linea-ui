import {baseAction} from '../../utils';
import {text_base} from 'linea-ui-project-css/css/text-base';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_4} from 'linea-ui-project-css/css/my-4';


export const PA = baseAction((node, props) => {
    return {classes:PR(props)}
})

export const PR = (props={}, ...other) => [
        ...getColor(props.color,props.colorDark),
        text_base,
        p_2, mx_2,my_4
    ].concat(other)
    
export const P = (props, ...other) => PR(props, ...other).join(' ');
