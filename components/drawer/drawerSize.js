import { w_auto } from "linea-ui-project-css/css/w-auto.js";
import { w_40 } from "linea-ui-project-css/css/w-40.js";
import { w_80 } from "linea-ui-project-css/css/w-80.js";
import { w_112 } from "linea-ui-project-css/css/w-112.js";
import { w_128 } from "linea-ui-project-css/css/w-128.js";
import { w_168 } from "linea-ui-project-css/css/w-168.js";
import { w_224 } from "linea-ui-project-css/css/w-224.js";



export const drawerSize = (size) => {
    switch (size) {
        case "xxs":
            return w_40;
        case "xs":
            return w_80;
        case "sm":
            return w_112;
        case "md":
            return w_128;
        case "lg":
            return w_168;
        case "xl":
            return w_224;
        default:
            return w_auto;
    }
}