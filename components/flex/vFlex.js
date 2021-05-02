
import { baseAction } from '../../utils';
import { flex } from 'linea-ui-project-css/css/flex';
import { flex_col } from 'linea-ui-project-css/css/flex-col';
import { justifyClass } from './justify';
import { baseClass } from '../../utils/base';


export const vFlexA = baseAction((node, props) => {
    return { classes: vFlexR(props) }
});

export const vFlexR = (props={}, ...other) => {
    const { justify } = props;

    const classes = [
        flex,
        flex_col
    ]
    
    if (justify){
        classes.push(justifyClass(justify))
    }
    return classes.concat(other)
};

export const vFlex = (props, ...other) => vFlexR(props, ...other).join(' ');
export const VFlex = baseClass(vFlex);
export default VFlex();