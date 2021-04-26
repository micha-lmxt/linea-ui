import {baseAction} from '../../utils';
import {text_base} from 'linea-ui-project-css/css/text-base';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { m_2 } from 'linea-ui-project-css/css/m-2';
import {font_bold} from 'linea-ui-project-css/css/font-bold'

export const H5A = baseAction((node, props) => {
    return {classes:H5R(props)}
})

export const H5R = (props,...other) => [
        ...getColor(props.color,props.colorDark),
        text_base,
        p_2, m_2, font_bold
    ].concat(other)

export const H5 = (props, ...other) => H5R(props, ...other).join(' ');