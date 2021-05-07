import { items_start } from 'linea-ui-project-css/css/items-start';
import { items_end } from 'linea-ui-project-css/css/items-end';
import { items_center } from 'linea-ui-project-css/css/items-center';
import { items_baseline } from 'linea-ui-project-css/css/items-baseline';
import { items_stretch } from 'linea-ui-project-css/css/items-stretch';

export const alignClass = (items)=>{
    switch (items) {
        
        case "end":
            return items_end;
        case "center":
            return items_center;
        case "baseline":
            return items_baseline;
        case "stretch":
            return items_stretch;
        default: case "start":
            return items_start;
    }
}