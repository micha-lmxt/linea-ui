import { baseAction } from '../../utils';
import { sm_opacity_0 } from 'linea-ui-project-css/css/sm:opacity-0';
import { sm_w_0 } from 'linea-ui-project-css/css/sm:w-0';
import { md_opacity_0 } from 'linea-ui-project-css/css/md:opacity-0';
import { md_w_0 } from 'linea-ui-project-css/css/md:w-0';
import { lg_opacity_0 } from 'linea-ui-project-css/css/lg:opacity-0';
import { lg_w_0 } from 'linea-ui-project-css/css/lg:w-0';
import {cleanup, setClasses} from '../../utils/setClasses.js';
import {getContext, unsubscribe} from '../../Context/keyContext';


export const drawerButtonA = (node, props={}) => {
    const { closeBreakpoint , context="drawer"} = props;
    let bp = closeBreakpoint;
    let last = [];
    const update = (props) => {
        cleanup(node,last,[]);
        last = drawerButtonR(props)
        setClasses(node,last)
    }
    
    if (!closeBreakpoint){
        bp = {...props,...(getContext(context, update, node)||{})};
        
    }
    update(bp)

    return {
        update,
        destroy:() => unsubscribe(context,node)
    }
}

export const drawerButtonR = (props, ...other) => {
    const {closeBreakpoint} = props;
    return (closeBreakpoint === "sm" ? [sm_opacity_0, sm_w_0] :
        closeBreakpoint === "md" ? [md_opacity_0, md_w_0] :
            closeBreakpoint === "lg" ?
            [lg_opacity_0, lg_w_0] : []).concat(other);
}

export const drawerButton = (props, ...other) => drawerButtonR(props, ...other).join(' ')
