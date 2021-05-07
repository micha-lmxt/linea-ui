
import { baseAction } from '../../utils';
import { flex } from 'linea-ui-project-css/css/flex';
import { flex_col } from 'linea-ui-project-css/css/flex-col';
import { justifyClass } from './justify';
import { alignClass } from './align';
import { baseClass } from '../../utils/base';


export const vFlexA = baseAction((node, props) => {
    return { classes: vFlexR(props) }
});

export const vFlexR = (props={}, ...other) => {
    const { justify, align, center } = props;


    const classes = [
        flex,
        flex_col
    ]
    
    if (justify){
        classes.push(justifyClass(justify))
    }else if (center){
        classes.push(justifyClass("center"))
    }
    if (align){
        classes.push(alignClass(align))
    }else if (center){
        classes.push(alignClass("center"))
    }
    return classes.concat(other)
};

export const vFlex = (props, ...other) => vFlexR(props, ...other).join(' ');
export const VFlex = baseClass(vFlex);
export default VFlex();