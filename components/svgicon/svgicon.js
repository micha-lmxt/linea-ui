import { baseAction } from '../../utils';
import { w_4 } from 'linea-ui-project-css/css/w-6';
import { w_6 } from 'linea-ui-project-css/css/w-6';
import { w_8 } from 'linea-ui-project-css/css/w-6';
import { h_4 } from 'linea-ui-project-css/css/w-6';
import { h_6 } from 'linea-ui-project-css/css/w-6';
import { h_8 } from 'linea-ui-project-css/css/w-6';
import { baseClass } from '../../utils/base';
import {getColor} from '../../utils/getColor';

export const svgiconA = baseAction((node, props) => {
    return {
        classes: svgiconR(props)
    }
})

export const svgiconR = (props={}, ...other) => (
    props.size="small" ? [w_4,h_4]:
    props.size="large" ? [w_8,h_8]: 
    [w_6,h_6])
    .concat(getColor(props.color||"black",props.colorDark||"white"))
    .concat(other);

export const svgicon = (props) => ({
  class:svgiconR(props).join(' '),
  viewBox:"0 0 24 24"
 });

export const SvgIcon = baseClass(svgicon);
export default SvgIcon();