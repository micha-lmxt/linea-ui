import { baseAction, chainAction } from '../../utils';
import {getColor} from '../../utils/getColor';
import {getBgColor} from '../../utils/getBgColor';
import ripple from 'descent-ripple';
import {fill_current} from 'linea-ui-project-css/css/fill-current';
import {c} from 'linea-ui-project-css/css/c';
import { opacity_30} from 'linea-ui-project-css/css/opacity-30';
import { base } from '../../utils/base';



export const textButtonA = chainAction(baseAction((node, props) => {

    return {
        classes: textButtonR(props)}
}),addRipple);

const addRipple = (node, props = {}) => {
        const rippleBaseProps=(xprops)=>({
            nLines:0,
            nCircles:1,
            circleInAnimationProps:{duration:2000},
            circleProps:{class:c(...getColor(xprops.rippleColor,xprops.rippleColorDark),fill_current,opacity_30)}
        })
        let r = ripple(node,
            {
                ...rippleBaseProps(props),
                ...props.rippleProps,
                nLines:0
            }
        )
        return {
            update: (nprops = {})=>{
                r.update({
                    ...rippleBaseProps(nprops),
                    ...nprops.rippleProps
                })
            },
            destroy:r.destroy

        }
}

// dummy object for action store
const ripples = {}

export const textButtonR = (props, ...other) => getBgColor(props.background,props.backgroundDark)
            .concat(getColor(props.color,props.colorDark))
            .concat(other)
    
export const textButton = (props, ...other) => textButtonR(props, ...other).join(' ');

export const TextButton = base(
    { class: textButton},
        addRipple
)