import {baseAction} from '../../utils';
import {text_base} from 'linea-ui-project-css/css/text-base';
import {getColor} from '../../utils/getColor';
import { underline } from 'linea-ui-project-css/css/underline';
import { baseClass } from '../../utils/base';

export const linkA = baseAction((node, props) => {
    return {classes:linkR(props)}
})

export const linkR = (props={}, ...other) => [
        ...getColor(props.color||"secondary-dark",props.colorDark||"secondary-light"),
        underline,
        text_base
    ].concat(other)
    
export const link = (props, ...other) => linkR(props, ...other).join(' ');

export const Link = baseClass(link);
export default Link();