import { baseAction } from '../../utils';
import { absolute } from 'linea-ui-project-css/css/absolute';
import { inset_0 } from 'linea-ui-project-css/css/inset-0';
import { z_30 } from 'linea-ui-project-css/css/z-30';
import { m_0 } from 'linea-ui-project-css/css/m-0';
import { transition_all } from 'linea-ui-project-css/css/transition-all';
import { duration_700 } from 'linea-ui-project-css/css/duration-700';
import {cleanup, setClasses} from '../../utils/setClasses.js';
import {getContext, unsubscribe} from '../../Context/keyContext';
import { sm_hidden} from 'linea-ui-project-css/css/sm:hidden';
import { md_hidden} from 'linea-ui-project-css/css/md:hidden';
import { lg_hidden} from 'linea-ui-project-css/css/lg:hidden';
import { opacity_40 } from 'linea-ui-project-css/css/opacity-40';
import { opacity_0} from 'linea-ui-project-css/css/opacity-0';
import {getBgColor} from '../../utils/getBgColor';
import { pointer_events_none } from 'linea-ui-project-css/css/pointer-events-none';
import { base } from '../../utils/base';
import {getElement} from '../../getElement';
import {action} from '../../utils/actionStore';


export const clickAwayAreaA = (node, props={}) => {
    const { closeBreakpoint , context="drawer"} = props;
    let bp = props;
    let last = [];
    const update = (props) => {
        cleanup(node,last,[]);
        last = clickAwayAreaR(props)
        setClasses(node,last)
    }
    
    if (!closeBreakpoint){
        bp = {...props,...(getContext(context, update, node)||{})};
    }
    update(bp);
    return {
        update,
        destroy:() => unsubscribe(context,node)
    }
}

export const clickAwayAreaR = (props={}, ...other) => {
    const {closeBreakpoint, open} = props;
    return (closeBreakpoint === "sm" ? [sm_hidden] :
        closeBreakpoint === "md" ? [md_hidden] :
            closeBreakpoint === "lg" ?
            [lg_hidden] : [])
        .concat([open?opacity_40:opacity_0,absolute,inset_0,m_0,
                 transition_all,duration_700])
        .concat(open?[z_30,...getBgColor(props.color||"black",props.colorDark||'white')]:[pointer_events_none])
        .concat(other);
}

export const clickAwayArea = (props, ...other) => drawerButtonR(props, ...other).join(' ')

const areas = {};

export const ClickAwayArea = base((props={})=>({
    class:clickAwayArea(props),
    ...getElement(action(areas,clickAwayAreaA,props))
}))

export default ClickAwayArea();