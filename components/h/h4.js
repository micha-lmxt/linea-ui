import {baseAction} from '../../utils';
import {text_2xl} from 'linea-ui-project-css/css/text-2xl';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { mt_4} from 'linea-ui-project-css/css/mt-4';
import { mb_4} from 'linea-ui-project-css/css/mb-4';
import { pt_4} from 'linea-ui-project-css/css/pt-4';
import {font_bold} from 'linea-ui-project-css/css/font-bold';
import { baseClass } from '../../utils/base';


export const H4A = baseAction((node, props) => {
    return {classes:H4R(props)}
})

export const H4R = (props={},...other) => [
        ...getColor(props.color,props.colorDark),
        text_2xl,pt_4,
        p_2, mx_2,mt_4,mb_4, font_bold
    ].concat(other)

export const _h4 = (props, ...other) => H4R(props, ...other).join(' ');

export const H4 = baseClass(_h4);
export default H4();