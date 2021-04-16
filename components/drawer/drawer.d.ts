/// <reference types="svelte" />
import {Readable} from 'svelte/store';

interface DrawerProps {
    /** Open.
        * Should the drawer be visible.
        * Default: true */
    open?: boolean|Readable<boolean>
    /** Animate.
        * Should there be an animation when openend.
        * Default: "auto" - "true" open prop is a store, else false*/
    animate?: boolean,
    /** Right.
     * Drawer can be at the left or the right side.
     * Default: false (left)
     */
    right?:boolean,
    /**  At which screen size can you close the drawer.
     * The drawer will be always open, unless the screen is smaller than this breakpoint.  If set to "always", you can always close it.
     * 
     * Default: "md";
     */
    closeBrakepoint?:"sm"|"md"|"lg"|"always"
}
/**
 * Drawer Component.
 * 
 * Usage:
 * ```javascript
 * <script>
 *     import {drawer} from 'linea-ui/components/drawer';
 * 
 * <aside use:drawer={right:false,open}>
 *     <nav>...</nav>
 * </aside>
 * ```
 */
export const drawer: (node:Node, props:DrawerProps) => 
{
       update: (props:DrawerProps) => void,
       
}