import { baseAction } from '../../utils';
import { flex_grow } from 'linea-ui-project-css/css/flex-grow';
import { base } from '../../utils/base';


export const spacerA = baseAction((node, props) => {
    return {
        classes: spacerR(props)
    }
})
export const spacerR = (props={}, ...other) => [flex_grow].concat(other);

export const spacer = (props,...other) => spacerR(props, ...other).join(' ');

export const Spacer=base((props=>{class:spacer(props)}))
export default Spacer();
