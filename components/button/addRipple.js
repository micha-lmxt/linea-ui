
import ripple from 'descent-ripple';
import {fill_current} from 'linea-ui-project-css/css/fill-current';
import {c} from 'linea-ui-project-css/css/c';
import {getColor} from '../../utils/getColor';
import { opacity_30} from 'linea-ui-project-css/css/opacity-30';

export const addRipple = (node, props = {}) => {
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