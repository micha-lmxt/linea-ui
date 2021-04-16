import { bg_white } from 'linea-ui-project-css/css/bg-white';
import { bg_black } from 'linea-ui-project-css/css/bg-black';
import { bg_primary } from 'linea-ui-project-css/css/bg-primary';
import { bg_secondary } from 'linea-ui-project-css/css/bg-secondary';
import { bg_tertiary } from 'linea-ui-project-css/css/bg-tertiary';
import { dark_bg_white } from 'linea-ui-project-css/css/dark:bg-white';
import { dark_bg_black } from 'linea-ui-project-css/css/dark:bg-black';
import { dark_bg_primary } from 'linea-ui-project-css/css/dark:bg-primary';
import { dark_bg_secondary } from 'linea-ui-project-css/css/dark:bg-secondary';
import { dark_bg_tertiary } from 'linea-ui-project-css/css/dark:bg-tertiary';

import { bg_secondary_light } from 'linea-ui-project-css/css/bg-secondary_light';
import { dark_bg_secondary_light } from 'linea-ui-project-css/css/dark:bg-secondary_light';


const getBg = (col) => {
    switch (col) {
        case "primary":
            return bg_primary;
        case "tertiary":
            return bg_tertiary;
        case "secondary":
            return bg_secondary;
        case "secondary-light":
            return bg_secondary_light;
        case "black":
            return bg_black;
        default:
            return bg_white;
    }
}
const getBgDark = (col) => {
    switch (col) {
        case "primary":
            return dark_bg_primary;
        case "tertiary":
            return dark_bg_tertiary;
        case "secondary":
            return dark_bg_secondary;
        case "secondary-light":
            return dark_bg_secondary_light;
        case "white":
            return dark_bg_white;
        default:
            return dark_bg_black;
    }
}
export const getBgColor = (light, dark) => {
    return [getBg(light), getBgDark(dark)]
}