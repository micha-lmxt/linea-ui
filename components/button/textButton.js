import { baseAction, chainAction } from '../../utils';
import {getColor} from '../../utils/getColor';
import {getBgColor} from '../../utils/getBgColor';
import ripple from 'descent-ripple';
import {fill_current} from 'linea-ui-project-css/css/fill-current';
import {c} from 'linea-ui-project-css/css/c';
import { opacity_30} from 'linea-ui-project-css/css/opacity-30';

export const textButton = chainAction(baseAction((node, props) => {

    return {
        classes: getBgColor(props.background,props.backgroundDark)
            .concat(getColor(props.color,props.colorDark))
    }
}),
    (node, props = {}) => {
        const rippleBaseProps=(xprops)=>({
            nLines:0,
            nCircles:1,
            circleInAnimationProps:{duration:2000},
            circleProps:{class:c(...getColor(xprops.rippleColor,xprops.rippleColorDark),fill_current,opacity_30)}
        })
        let r = ripple(node,
            {
                ...rippleBaseProps(props),
                ...props.ripplePropsm,
                nLines:0
            }
        )
        console.log(rippleBaseProps(props).circleProps)
        return {
            update: (nprops = {})=>{
                r.update({
                    ...rippleBaseProps(nprops),
                    ...nprops.rippleProps
                })
            },
            destroy:r.destroy

        }
    })