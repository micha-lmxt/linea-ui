import {baseAction} from '../../utils';
import {text_3xl} from 'linea-ui-project-css/css/text-3xl';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { m_2 } from 'linea-ui-project-css/css/m-2';
import {font_bold} from 'linea-ui-project-css/css/font-bold'

export const H1A = baseAction((node, props) => {
    return {classes:H1R(props)}
})

export const H1R = (props={}, ...other) => [
        ...getColor(props.color,props.colorDark),
        text_3xl,
        p_2,m_2, font_bold
    ].concat(other)

export const H1 = (props, ...other) => H1R(props, ...other).join(' ');
