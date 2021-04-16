
import { baseAction } from '../../utils';
import { flex } from 'linea-ui-project-css/css/flex';
import { flex_col } from 'linea-ui-project-css/css/flex-col';
import { justifyClass } from './justify';

export const vFlex = baseAction((node, props) => {
    const { justify } = props;

    const classes = [
        flex,
        flex_col
    ]
    
    if (justify){
        classes.push(justifyClass(justify))
    }
    return { classes }
})