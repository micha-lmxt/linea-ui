import { baseAction, chainAction } from '../../utils';
import {getColor} from '../../utils/getColor';
import {getBgColor} from '../../utils/getBgColor';
import {addRipple} from './addRipple'
import { base } from '../../utils/base';
import './mobile.css';


export const textButtonA = chainAction(baseAction((node, props) => {

    return {
        classes: textButtonR(props)}
}),addRipple);


export const textButtonR = (props, ...other) => getBgColor(props.background||"transparent",props.backgroundDark||"transparent")
            .concat(getColor(props.color,props.colorDark))
            .concat(props.mobile==="default"?[]:["mobile-button-light"])
            .concat(other)
    
export const textButton = (props, ...other) => textButtonR(props, ...other).join(' ');

export const TextButton = base(
    { class: textButton},
        addRipple
)
export default TextButton()