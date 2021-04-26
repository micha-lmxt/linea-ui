import { baseAction } from '../../utils';
import { absolute } from 'linea-ui-project-css/css/absolute';
import { inset_0 } from 'linea-ui-project-css/css/inset-0';
import { z_30 } from 'linea-ui-project-css/css/z-30';
import { m_0 } from 'linea-ui-project-css/css/m-0';
import { transition_opacity } from 'linea-ui-project-css/css/transition-opacity';
import { duration_700 } from 'linea-ui-project-css/css/duration-700';
import {cleanup, setClasses} from '../../utils/setClasses.js';
import {getContext, unsubscribe} from '../../Context/keyContext';
import { sm_hidden} from 'linea-ui-project-css/css/sm:hidden';
import { md_hidden} from 'linea-ui-project-css/css/md:hidden';
import { lg_hidden} from 'linea-ui-project-css/css/lg:hidden';
import { opacity_40 } from 'linea-ui-project-css/css/opacity-40';
import { opacity_0} from 'linea-ui-project-css/css/opacity-0';


export const clickAwayAreaA = (node, props) => {
    const { closeBreakpoint , context="drawer"} = props;
    let bp = closeBreakpoint;
    let last = [];
    const update = (props) => {
        cleanup(node,last,[]);
        last = clickAwayAreaR(props)
        setClasses(node,last)
    }
    
    if (!closeBreakpoint){
        bp = getContext(context, update, node);
    }

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
                 transition_opacity,duration_700])
        .concat(open?[z_30]:[])
        .concat(other);
}

export const clickAwayArea = (props, ...other) => drawerButtonR(props, ...other).join(' ')
