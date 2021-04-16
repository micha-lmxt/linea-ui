import { baseAction } from '../../utils';
import { w_2 } from 'linea-ui-project-css/css/w-2';
import { w_1 } from 'linea-ui-project-css/css/w-1';
import { getBgColor } from '../../utils/getBgColor';

export const listItemIndicator = baseAction((node, props) => {

    const classes = [
        ...getBgColor(props.color||"primary",props.colorDark||"primary"),
        props.thin?w_1:w_2
    ]

    return { classes }
})