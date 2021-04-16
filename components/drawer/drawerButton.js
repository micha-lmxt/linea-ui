import { baseAction } from '../../utils';
import { sm_opacity_0 } from 'linea-ui-project-css/css/sm:opacity-0';
import { sm_w_0 } from 'linea-ui-project-css/css/sm:w-0';
import { md_opacity_0 } from 'linea-ui-project-css/css/md:opacity-0';
import { md_w_0 } from 'linea-ui-project-css/css/md:w-0';
import { lg_opacity_0 } from 'linea-ui-project-css/css/lg:opacity-0';
import { lg_w_0 } from 'linea-ui-project-css/css/lg:w-0';

export const drawerButton = baseAction((node, props) => {
    const { closeBreakpoint = "md" } = props;

    const classes = closeBreakpoint === "sm" ? [sm_opacity_0, sm_w_0] :
        closeBreakpoint === "md" ? [md_opacity_0, md_w_0] :
            closeBreakpoint === "lg" ? [lg_opacity_0, lg_w_0] : [];


    return {classes};
})