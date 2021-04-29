import { baseAction } from '../../utils';
import { w_4 } from 'linea-ui-project-css/css/w-6';
import { w_6 } from 'linea-ui-project-css/css/w-6';
import { w_8 } from 'linea-ui-project-css/css/w-6';
import { h_4 } from 'linea-ui-project-css/css/w-6';
import { h_6 } from 'linea-ui-project-css/css/w-6';
import { h_8 } from 'linea-ui-project-css/css/w-6';



export const svgiconA = baseAction((node, props) => {
    return {
        classes: svgiconR(props)
    }
})
export const svgiconR = (props={}, ...other) => [mt_20].concat(other);

export const svgicon = (props,...other) => ({
  class:svgiconR(props, ...other).join(' '),
  viewBox:"0 0 24 24"
 })

export default svgicon()
