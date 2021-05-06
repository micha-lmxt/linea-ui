import {baseAction} from '../../utils';
import {text_lg} from 'linea-ui-project-css/css/text-lg';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_4} from 'linea-ui-project-css/css/my-4';
import { pt_8} from 'linea-ui-project-css/css/pt-8';
import {font_bold} from 'linea-ui-project-css/css/font-bold';
import { baseClass } from '../../utils/base';


export const H6A = baseAction((node, props) => {
    return {classes:H6R(props)}
})

export const H6R = (props={},...other) => [
        ...getColor(props.color,props.colorDark),
        text_lg,pt_8,
        p_2, mx_2,my_4, font_bold
    ].concat(other)

export const _h6 = (props, ...other) => H6R(props, ...other).join(' ');

export const H6 = baseClass(_h6);
export default H6();