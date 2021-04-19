import {baseAction} from '../../utils';
import { getBgColor } from '../../utils/getBgColor';
import {c} from 'linea-ui-project-css/css/c' 
export const backgroundA = baseAction((node, props) => {
    return {classes:[
        ...getBgColor(props.color||"white",props.colorDark||"black")
    ]}
})
export const background = (props,...other) => c(...getBgColor(props.color||"white",props.colorDark||"black"),...other)