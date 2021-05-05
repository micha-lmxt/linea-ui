import { baseAction } from '../../utils';
import { mt_20 } from 'linea-ui-project-css/css/mt-20';
import { base } from '../../utils/base';


export const offsetA = baseAction((node, props) => {
    return {
        classes: offsetR(props)
    }
})
export const offsetR = (props={}, ...other) => [mt_20].concat(other);

export const offset = (props,...other) => offsetR(props, ...other).join(' ');

export const Offset = base((props)=>({class:offset(props)}));

export default Offset();