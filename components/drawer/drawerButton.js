import { sm_hidden } from 'linea-ui-project-css/css/sm:hidden';
import { md_hidden } from 'linea-ui-project-css/css/md:hidden';
import { lg_hidden } from 'linea-ui-project-css/css/lg:hidden';
import {cleanup, setClasses} from '../../utils/setClasses.js';
import {getContext, unsubscribe} from '../../Context/keyContext';
import { base } from '../../utils/base';



export const drawerButtonA = (node, props={}) => {
    const { context="drawer"} = props;
    let bp = props;
    let last = [];
    const update = (props1) => {
        bp = { ...bp, ...props1 };
        
        cleanup(node,last,[]);
        last = drawerButtonR(bp)
        setClasses(node,last)
    }
    
    if (!bp.closeBreakpoint){
        bp = { ...props, ...(getContext(context, update, node) || {}) };    
    }
    update(bp)

    return {
        update,
        destroy:() => unsubscribe(context,node)
    }
}

export const drawerButtonR = (props, ...other) => {
    const {closeBreakpoint} = {...props,...getContext(props.context||"drawer")};
    return (closeBreakpoint === "sm" ? [sm_hidden] :
        closeBreakpoint === "md" ? [md_hidden] :
            closeBreakpoint === "lg" ?
            [lg_hidden] : []).concat(other);
}

export const drawerButton = (props, ...other) => drawerButtonR(props, ...other).join(' ')



export const DrawerButton = base(
    { class:drawerButton },
    drawerButtonA
)
export default DrawerButton()