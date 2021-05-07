import { addRipple } from './addRipple'
import { base } from '../../utils/base'
import { textButtonR } from './textButton'
import { border } from 'linea-ui-project-css/css/border'
import { border_2 } from 'linea-ui-project-css/css/border-2'
import { border_4 } from 'linea-ui-project-css/css/border-4'
import { border_8 } from 'linea-ui-project-css/css/border-8'
import { rounded } from 'linea-ui-project-css/css/rounded'
import { rounded_full } from 'linea-ui-project-css/css/rounded-full'
import { px_4 } from 'linea-ui-project-css/css/px-4'
import { py_2 } from 'linea-ui-project-css/css/py-2'
import { focus_outline_none } from 'linea-ui-project-css/css/focus:outline-none';

const borderWidth = (w) => {
    switch (w) {
        case "double": return border_2;
        case "strong": return border_4;
        case "thick": return border_8;
        default: return border;
    }
}
const radius = (w) => {
    switch (w) {
        case false: return [];
        case "full": return [rounded_full];
        default: return [rounded];
    }
}
export const outlinedButtonR = (props, ...other) => textButtonR(props, ...other)
    .concat([borderWidth(props.width), px_4, py_2, focus_outline_none])
    .concat(radius(props.round))

export const outlinedButton = (props, ...other) => outlinedButtonR(props, ...other).join(' ')


export const OutlinedButton = base(
    { class: outlinedButton },
    addRipple
)
export default OutlinedButton()