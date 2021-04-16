/// <reference types="svelte" />
import {Readable} from 'svelte/store';

interface ListProps {
}
/**
 * List Component.
 * 
 * Usage:
 * ```javascript
 * <script>
 *     import {drawer} from 'linea-ui/components/drawer';
 * 
 * <ul use:list>
 *     {#each items as item}...{/each}
 * </ul>
 * ```
 */
export const list: (node:Node, props:ListProps) => 
{
       update: (props:ListProps) => void,
       
}