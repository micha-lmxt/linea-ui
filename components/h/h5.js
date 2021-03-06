import {baseAction} from '../../utils';
import {text_xl} from 'linea-ui-project-css/css/text-xl';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_4} from 'linea-ui-project-css/css/my-4';
import { pt_8} from 'linea-ui-project-css/css/pt-8';
import {font_bold} from 'linea-ui-project-css/css/font-bold';
import { baseClass } from '../../utils/base';


export const H5A = baseAction((node, props) => {
    return {classes:H5R(props)}
})

export const H5R = (props={},...other) => [
        ...getColor(props.color,props.colorDark),
        text_xl,pt_8,
        p_2, mx_2,my_4, font_bold
    ].concat(other)

export const _h5 = (props, ...other) => H5R(props, ...other).join(' ');

export const H5 = baseClass(_h5);
export default H5();