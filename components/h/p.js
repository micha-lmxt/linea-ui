import {baseAction} from '../../utils';
import {text_base} from 'linea-ui-project-css/css/text-base';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { m_2 } from 'linea-ui-project-css/css/m-2';

export const P = baseAction((node, props) => {
    return {classes:[
        ...getColor(props.color,props.colorDark),
        text_base,
        p_2, m_2
    ]}
})