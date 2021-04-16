import { justify_start } from 'linea-ui-project-css/css/justify-start';
import { justify_end } from 'linea-ui-project-css/css/justify-end';
import { justify_center } from 'linea-ui-project-css/css/justify-center';
import { justify_between } from 'linea-ui-project-css/css/justify-between';
import { justify_around } from 'linea-ui-project-css/css/justify-around';
import { justify_evenly } from 'linea-ui-project-css/css/justify-evenly';

export const justifyClass = (justify)=>{
    switch (justify) {
        case "start":
            return justify_start;
        case "end":
            return justify_end;
        case "center":
            return justify_center;
        case "between":
            return justify_between;
        case "around":
            return justify_around;
        case "evenly":
            return justify_evenly;

    }
}