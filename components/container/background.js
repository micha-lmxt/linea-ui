import {baseAction} from '../../utils';
import { getBgColor } from '../../utils/getBgColor';

export const background = baseAction((node, props) => {
    return {classes:[
        ...getBgColor(props.color||"white",props.colorDark||"black")
    ]}
})