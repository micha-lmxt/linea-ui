import { bg_white } from 'linea-ui-project-css/css/bg-white';
import { bg_black } from 'linea-ui-project-css/css/bg-black';
import { bg_gray_light } from 'linea-ui-project-css/css/bg-gray_light';
import { bg_gray_dark } from 'linea-ui-project-css/css/bg-gray_dark';
import { bg_primary } from 'linea-ui-project-css/css/bg-primary';
import { bg_secondary } from 'linea-ui-project-css/css/bg-secondary';
import { bg_tertiary } from 'linea-ui-project-css/css/bg-tertiary';
import { dark_bg_white } from 'linea-ui-project-css/css/dark:bg-white';
import { dark_bg_black } from 'linea-ui-project-css/css/dark:bg-black';
import { dark_bg_gray_light } from 'linea-ui-project-css/css/dark:bg-gray_light';
import { dark_bg_gray_dark } from 'linea-ui-project-css/css/dark:bg-gray_dark';
import { dark_bg_primary } from 'linea-ui-project-css/css/dark:bg-primary';
import { dark_bg_secondary } from 'linea-ui-project-css/css/dark:bg-secondary';
import { dark_bg_tertiary } from 'linea-ui-project-css/css/dark:bg-tertiary';

import { bg_secondary_light } from 'linea-ui-project-css/css/bg-secondary_light';
import { dark_bg_secondary_light } from 'linea-ui-project-css/css/dark:bg-secondary_light';

import { dark_bg_transparent } from 'linea-ui-project-css/css/dark:bg-transparent';
import { bg_transparent } from 'linea-ui-project-css/css/bg-transparent';


import { dark_bg_secondary_darker } from 'linea-ui-project-css/css/dark:bg-secondary_darker';
import { bg_secondary_darker } from 'linea-ui-project-css/css/bg-secondary_darker';


const getBg = (col) => {
    switch (col) {
        case "none":
            return undefined;
        case "transparent":
            return bg_transparent;
        case "primary":
            return bg_primary;
        case "tertiary":
            return bg_tertiary;
        case "secondary":
            return bg_secondary;
        case "secondary-light":
            return bg_secondary_light;
        case "secondary-darker":
            return bg_secondary_darker;
        case "black":
            return bg_black;
        case "grey-light":
        case "gray-light":
            return bg_gray_light;
        case "gray-dark":
        case "grey-dark":
            return bg_gray_dark;
        default:
            return bg_white;
    }
}
const getBgDark = (col) => {
    switch (col) {
        case "none":
            return undefined;
        case "transparent":
            return dark_bg_transparent;
        case "primary":
            return dark_bg_primary;
        case "tertiary":
            return dark_bg_tertiary;
        case "secondary":
            return dark_bg_secondary;
        case "secondary-darker":
            return dark_bg_secondary_darker;
        case "secondary-light":
            return dark_bg_secondary_light;
        case "white":
            return dark_bg_white;
        case "grey-light":
        case "gray-light":
            return dark_bg_gray_light;
        case "gray-dark":
        case "grey-dark":
            return dark_bg_gray_dark;
        default:
            return dark_bg_black;
    }
}
export const getBgColor = (light, dark) => {
    const ret = [];
    const l = getBg(light);
    if (l) {
        ret.push(l)
    }
    const d = getBgDark(dark)
    if (d) {
        ret.push(d)
    }
    return ret
}
