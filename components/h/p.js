import {baseAction} from '../../utils';
import {text_base} from 'linea-ui-project-css/css/text-base';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { m_2 } from 'linea-ui-project-css/css/m-2';

export const PA = baseAction((node, props) => {
    return {classes:PR(props)}
})

export const PR = (perops, ...other) => [
        ...getColor(props.color,props.colorDark),
        text_base,
        p_2, m_2
    ].concat(other)
    
export const P = (props, ...other) => PR(props, ...other).join(' ');
