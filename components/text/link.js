import {baseAction} from '../../utils';
import {text_base} from 'linea-ui-project-css/css/text-base';
import {getColor} from '../../utils/getColor';
import { underline } from 'linea-ui-project-css/css/underline';

export const linkA = baseAction((node, props) => {
    return {classes:linkR(props)}
})

export const linkR = (props={}, ...other) => [
        ...getColor(props.color||"primary",props.colorDark||"primary"),
        underline,
        text_base
    ].concat(other)
    
export const link = (props, ...other) => linkR(props, ...other).join(' ');
