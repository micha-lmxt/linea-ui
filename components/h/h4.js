import {baseAction} from '../../utils';
import {text_2xl} from 'linea-ui-project-css/css/text-2xl';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_4} from 'linea-ui-project-css/css/my-4';
import {font_bold} from 'linea-ui-project-css/css/font-bold';
import { baseClass } from '../../utils/base';


export const H4A = baseAction((node, props) => {
    return {classes:H4R(props)}
})

export const H4R = (props={},...other) => [
        ...getColor(props.color,props.colorDark),
        text_2xl,
        p_2, mx_2,my_4, font_bold
    ].concat(other)

export const _h4 = (props, ...other) => H4R(props, ...other).join(' ');

export const H4 = baseClass(_h4);
export default H4();