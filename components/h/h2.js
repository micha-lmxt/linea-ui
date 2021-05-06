import {baseAction} from '../../utils';
import {text_4xl} from 'linea-ui-project-css/css/text-4xl';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { mt_8} from 'linea-ui-project-css/css/mt-8';
import { mb_4} from 'linea-ui-project-css/css/mb-4';
import { pt_8} from 'linea-ui-project-css/css/pt-8';
import {font_bold} from 'linea-ui-project-css/css/font-bold';
import { baseClass } from '../../utils/base';


export const H2A = baseAction((node, props) => {
    return {classes:H2R(props)}
})

export const H2R = (props={},...other) => [
        ...getColor(props.color,props.colorDark),
        text_4xl,pt_8,
        p_2, mx_2,mt_8,mb_4, font_bold
    ].concat(other)

export const _h2 = (props, ...other) => H2R(props, ...other).join(' ');

export const H2 = baseClass(_h2);
export default H2();