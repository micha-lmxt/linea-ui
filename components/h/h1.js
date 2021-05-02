import {baseAction} from '../../utils';
import {text_5xl} from 'linea-ui-project-css/css/text-5xl';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_8 } from 'linea-ui-project-css/css/my-8';
import {font_bold} from 'linea-ui-project-css/css/font-bold';
import { baseClass } from '../../utils/base';


export const H1A = baseAction((node, props) => {
    return {classes:H1R(props)}
})

export const H1R = (props={}, ...other) => [
        ...getColor(props.color,props.colorDark),
        text_5xl,
        p_2,mx_2,my_8, font_bold
    ].concat(other)

export const _h1 = (props, ...other) => H1R(props, ...other).join(' ');

export const H1 = baseClass(_h1);
export default H1();