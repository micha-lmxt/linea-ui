import {baseAction} from '../../utils';
import {text_base} from 'linea-ui-project-css/css/text-base';
import {getColor} from '../../utils/getColor';
import {getBgColor} from '../../utils/getBgColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { m_2 } from 'linea-ui-project-css/css/m-2';
import { rounded } from 'linea-ui-project-css/css/rounded';

export const codeA = baseAction((node, props) => {
    return {classes:codeR(props)}
})

export const codeR = (props={}, ...other) => [
        ...getColor(props.color||"white",props.colorDark||"black"),
        ...getBgColor(props.background||"black",props.backgroundDark||"white",
        rounded,
        text_base,
        p_2, m_2
    ].concat(other)
    
export const code = (props, ...other) => codeR(props, ...other).join(' ');
