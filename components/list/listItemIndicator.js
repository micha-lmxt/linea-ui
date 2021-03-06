import { baseAction } from '../../utils';
import { w_2 } from 'linea-ui-project-css/css/w-2';
import { w_1 } from 'linea-ui-project-css/css/w-1';
import { getBgColor } from '../../utils/getBgColor';
import { baseClass } from '../../utils/base';
import { z_30} from 'linea-ui-project-css/css/z-30';


export const listItemIndicatorA = baseAction((node, props) => {

    const classes = listItemIndicatorR(props)

    return { classes }
})

export const listItemIndicatorR = (props={}, ...other) => [
        ...getBgColor(props.color||"primary",props.colorDark||"primary"),
        props.thin ? w_1 : w_2,
        z_30
    ]
    
export const listItemIndicator = (props, ...other) => listItemIndicatorR(props, ...other).join(' ');

export const ListItemIndicator = baseClass(listItemIndicator);
export default ListItemIndicator();