import {baseAction} from '../../utils';
import {text_base} from 'linea-ui-project-css/css/text-base';
import {getColor} from '../../utils/getColor';
import {getBgColor} from '../../utils/getBgColor';
import { p_4 } from 'linea-ui-project-css/css/p-4';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_4} from 'linea-ui-project-css/css/my-4';
import { rounded } from 'linea-ui-project-css/css/rounded';
import { baseClass } from '../../utils/base';


export const codeA = baseAction((node, props) => {
    return {classes:codeR(props)}
})

export const codeR = (props={}, ...other) => [
        ...getColor(props.color||"white",props.colorDark||"black"),
        ...getBgColor(props.background||"black",props.backgroundDark||"white"),
        rounded,
        text_base,
        p_4, mx_2, my_4
    ].concat(other)
    
export const code = (props, ...other) => codeR(props, ...other).join(' ');

export const Code = baseClass(code);

export default Code();