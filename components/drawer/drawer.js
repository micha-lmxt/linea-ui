import { baseAction } from '../../utils';
// animation order is important!
import { transition_transform } from 'linea-ui-project-css/css/transition-transform'
import { transform } from 'linea-ui-project-css/css/transform';
import { absolute } from "linea-ui-project-css/css/absolute.js";
import { top_0 } from "linea-ui-project-css/css/top-0.js";
import { overflow_hidden } from "linea-ui-project-css/css/overflow-hidden.js";
import { h_full } from "linea-ui-project-css/css/h-full.js";
import { duration_700 } from 'linea-ui-project-css/css/duration-700';
import { ease_out } from 'linea-ui-project-css/css/ease-out';
import { _translate_x_full } from 'linea-ui-project-css/css/-translate-x-full';
import { translate_x_full } from 'linea-ui-project-css/css/translate-x-full';
import { left_0 } from 'linea-ui-project-css/css/left-0';
import { right_0 } from 'linea-ui-project-css/css/right-0';
import { z_20 } from 'linea-ui-project-css/css/z-20';
import { sm_translate_x_0 } from 'linea-ui-project-css/css/sm:translate-x-0';
import { md_translate_x_0 } from 'linea-ui-project-css/css/md:translate-x-0';
import { lg_translate_x_0 } from 'linea-ui-project-css/css/lg:translate-x-0';
import { sm_static } from "linea-ui-project-css/css/sm:static.js";
import { md_static } from "linea-ui-project-css/css/md:static.js";
import { lg_static } from "linea-ui-project-css/css/lg:static.js";
import { drawerSize } from './drawerSize';
import { setContext } from '../../Context/keyContext';
import { z_40 } from 'linea-ui-project-css/css/z-40';

export const drawerA = baseAction((node, props) => {
    
    const { open = true, right = false } = props;

    let subscriptions = [];
    
    const dir = right ? translate_x_full : _translate_x_full;
    
    if (typeof open.subscribe === "function") {
        // open is a store
        // subscribe to open
        subscriptions.push(open.subscribe((value) => {
            if (value) {
                // default is translation 0, so just remove translation
                node.classList.remove(dir);
                return;
            }
            node.classList.add(dir);
        }));

    } 
    

    return { subscriptions, classes: drawerR(props) };
})

export const drawerR = (props, ...other) => {
    const { open = true, animate = "auto", right = false , closeBreakpoint = "md" , size, context="drawer"} = props;

    let subscriptions = [];

    const dir = right ? translate_x_full : _translate_x_full;
    
    let slide = [
            transform,
            ...(animate ? [transition_transform, duration_700, ease_out] : []),
            ...(open ? [] : [dir])
        ];
        
        
     
    
    let bp = closeBreakpoint === "sm" ? [sm_translate_x_0,sm_,sm_static] :
        closeBreakpoint === "md" ? [md_translate_x_0,md_static] : 
        closeBreakpoint === "lg" ? [lg_translate_x_0,lg_static] : [];
    
    setContext(context, { closeBreakpoint, open });

    return [
        ...slide, 
        right ? right_0 : left_0, 
        absolute, top_0, overflow_hidden, 
        h_full, z_20,
        ...bp,
        drawerSize(size),
        z_40,
    ].concat(other);
}

export const drawer = (props,...other) => drawerR(props, ...other).join(' ');
