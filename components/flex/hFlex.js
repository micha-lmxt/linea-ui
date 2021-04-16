
import { baseAction } from '../../utils';
import { flex } from 'linea-ui-project-css/css/flex';
import { flex_row } from 'linea-ui-project-css/css/flex-row';
import { justifyClass } from './justify';


export const hFlex = baseAction((node, props) => {
    const { justify } = props;

    const classes = [
        flex,
        flex_row
    ]
    
    if (justify){
        classes.push(justifyClass(justify))
    }
    return { classes }
})