import { baseAction } from '../../utils';
import { getBgColor } from '../../utils/getBgColor';
import { baseClass } from '../../utils/base';


export const backgroundA = baseAction((node, props) => {
    return {
        classes: backgroundR(props)
    }
})
export const backgroundR = (props={}, ...other) => getBgColor(props.color||"white", props.colorDark||"black").concat(other);

export const background = (props,...other) => backgroundR(props, ...other).join(' ');

export const Background = baseClass(background)