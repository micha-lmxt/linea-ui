
import { baseAction } from '../../utils';
import { flex } from 'linea-ui-project-css/css/flex';
import { flex_row } from 'linea-ui-project-css/css/flex-row';
import { justifyClass } from './justify';
import { baseClass } from '../../utils/base';



export const hFlexA = baseAction((node, props) => {
    return { classes: hFlexR(props)}
})

export const hFlexR = (props={}, ...other) => {
    const { justify } = props;

    const classes = [
        flex,
        flex_row
    ]
    
    if (justify){
        classes.push(justifyClass(justify))
    }
    return classes.concat(other)
};

export const hFlex = (props, ...other) => hFlexR(props,...other).join(' ');

export const HFlex = baseClass(hFlex);
export default HFlex();