import { hidden } from 'linea-ui-project-css/css/hidden';
import { sm_block } from 'linea-ui-project-css/css/sm:block';
import { md_block } from 'linea-ui-project-css/css/md:block';
import { lg_block } from 'linea-ui-project-css/css/lg:block';
import {cleanup, setClasses} from '../../utils/setClasses.js';
import {getContext, unsubscribe} from '../../Context/keyContext';
import { base } from '../../utils/base';




export const drawerTextA = (node, props={}) => {
    const { context="drawer"} = props;
    let bp = props;
    let last = [];
    const update = (props1) => {
        bp = { ...bp, ...props1 };
        
        cleanup(node,last,[]);
        last = drawerTextR(bp)
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

export const drawerTextR = (props, ...other) => {
    const {closeBreakpoint} = {...props,...getContext(props.context||"drawer")};
    return (closeBreakpoint === "sm" ? [sm_block] :
        closeBreakpoint === "md" ? [md_block] :
            closeBreakpoint === "lg" ?
            [lg_block] : []).concat(hidden).concat(other);
}

export const drawerText = (props, ...other) => drawerTextR(props, ...other).join(' ')



export const DrawerText = base(
    { class:drawerText },
    drawerTextA
)
export default DrawerText()