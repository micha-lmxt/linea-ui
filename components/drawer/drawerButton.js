import { baseAction } from '../../utils';
import { sm_hidden } from 'linea-ui-project-css/css/sm:hidden';
import { md_hidden } from 'linea-ui-project-css/css/md:hidden';
import { lg_hidden } from 'linea-ui-project-css/css/lg:hidden';
import {cleanup, setClasses} from '../../utils/setClasses.js';
import {getContext, unsubscribe} from '../../Context/keyContext';
import { base } from '../../utils/base';
import {getElement} from '../../getElement';
import {action} from '../../utils/actionStore';



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
        bp = {...(getContext(context, update, node)||{}),...props};
        
    }
    update(bp)

    return {
        update,
        destroy:() => unsubscribe(context,node)
    }
}

export const drawerButtonR = (props, ...other) => {
    const {closeBreakpoint} = props;
    return (closeBreakpoint === "sm" ? [sm_hidden] :
        closeBreakpoint === "md" ? [md_hidden] :
            closeBreakpoint === "lg" ?
            [lg_hidden] : []).concat(other);
}

export const drawerButton = (props, ...other) => drawerButtonR(props, ...other).join(' ')

const buttons = {};
export const DrawerButton = base((props)=>({
    class:drawerButton(props),
    ...getElement(action(buttons,drawerButtonA,props))
}))