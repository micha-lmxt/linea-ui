import {baseAction} from '../../utils';
import {text_3xl} from 'linea-ui-project-css/css/text-3xl';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_6} from 'linea-ui-project-css/css/my-6;
import {font_bold} from 'linea-ui-project-css/css/font-bold'

export const H3A = baseAction((node, props) => {
    return {classes:H3R(props)}
})

export const H3R = (props={}, ...other) => [
        ...getColor(props.color,props.colorDark),
        text_3xl,
        p_2,mx_2,my_6, font_bold
    ].concat(other);
    
export const H3 = (props, ...other) => H3R(props, ...other).join(' ');

