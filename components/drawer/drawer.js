import { baseAction } from '../../utils';
// animation order is important!
import { transition_all } from 'linea-ui-project-css/css/transition-all'
import { transform } from 'linea-ui-project-css/css/transform';
import { fixed } from "linea-ui-project-css/css/fixed.js";
import { top_0 } from "linea-ui-project-css/css/top-0.js";
import { min_h_full } from "linea-ui-project-css/css/min-h-full.js";
import { duration_700 } from 'linea-ui-project-css/css/duration-700';
import { ease_out } from 'linea-ui-project-css/css/ease-out';
import { _translate_x_full } from 'linea-ui-project-css/css/-translate-x-full';
import { translate_x_full } from 'linea-ui-project-css/css/translate-x-full';
import { left_0 } from 'linea-ui-project-css/css/left-0';
import { right_0 } from 'linea-ui-project-css/css/right-0';
import { z_40 } from 'linea-ui-project-css/css/z-40';
import { sm_z_10 } from 'linea-ui-project-css/css/sm:z-10';
import { md_z_10 } from 'linea-ui-project-css/css/md:z-10';
import { lg_z_10 } from 'linea-ui-project-css/css/lg:z-10';
import { sm_translate_x_0 } from 'linea-ui-project-css/css/sm:translate-x-0';
import { md_translate_x_0 } from 'linea-ui-project-css/css/md:translate-x-0';
import { lg_translate_x_0 } from 'linea-ui-project-css/css/lg:translate-x-0';
import { sm_static } from "linea-ui-project-css/css/sm:static.js";
import { md_static } from "linea-ui-project-css/css/md:static.js";
import { lg_static } from "linea-ui-project-css/css/lg:static.js";
import { drawerSize } from './drawerSize';
import { setContext } from '../../Context/keyContext';

import { flex_shrink_0 } from "linea-ui-project-css/css/flex-shrink-0";
import { baseClass } from '../../utils/base';
import { shadow } from 'linea-ui-project-css/css/shadow';

export const drawerA = baseAction((node, props) => {
    
    const { right = false } = props;

    let subscriptions = [];
    
    const dir = right ? translate_x_full : _translate_x_full;   

    return { subscriptions, classes: drawerR(props) };
})

export const drawerR = (props, ...other) => {
    const { open = false, animate = "auto", right = false , closeBreakpoint = "md" , size, context="drawer"} = props;

    const dir = right ? translate_x_full : _translate_x_full;
    
    let slide = [
            transform,
            ...(animate ? [transition_all, duration_700, ease_out] : []),
            ...(open ? [] : [dir])
        ];
        
    let bp = closeBreakpoint === "sm" ? [sm_translate_x_0,sm_,sm_static,sm_z_10] :
        closeBreakpoint === "md" ? [md_translate_x_0,md_static,md_z_10] : 
        closeBreakpoint === "lg" ? [lg_translate_x_0,lg_static,lg_z_10] : [];
    
    setContext(context, { closeBreakpoint, open });

    return [
        ...slide, 
        right ? right_0 : left_0, 
        fixed, top_0, 
        min_h_full,
        ...bp,
        drawerSize(size),
        flex_shrink_0,
        z_40,
        shadow
    ].concat(other);
}

export const drawer = (props,...other) => drawerR(props, ...other).join(' ');

export const Drawer = baseClass(drawer);

export default Drawer();