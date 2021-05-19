import { text_primary } from 'linea-ui-project-css/css/text-primary';
import { text_secondary } from 'linea-ui-project-css/css/text-secondary';
import { text_secondary_dark } from 'linea-ui-project-css/css/text-secondary_dark';
import { text_tertiary } from 'linea-ui-project-css/css/text-tertiary';
import { text_white } from 'linea-ui-project-css/css/text-white';
import { text_black } from 'linea-ui-project-css/css/text-black';
import { text_gray_light } from 'linea-ui-project-css/css/text-gray_light';
import { text_gray_dark } from 'linea-ui-project-css/css/text-gray_dark';
import { dark_text_gray_light } from 'linea-ui-project-css/css/dark:text-gray_light';
import { dark_text_gray_dark } from 'linea-ui-project-css/css/dark:text-gray_dark';
import { dark_text_primary } from 'linea-ui-project-css/css/dark:text-primary';
import { dark_text_secondary } from 'linea-ui-project-css/css/dark:text-secondary';
import { dark_text_tertiary } from 'linea-ui-project-css/css/dark:text-tertiary';
import { dark_text_white } from 'linea-ui-project-css/css/dark:text-white';
import { dark_text_black } from 'linea-ui-project-css/css/dark:text-black';
import { text_secondary_light } from 'linea-ui-project-css/css/text-secondary_light';
import { dark_text_secondary_light } from 'linea-ui-project-css/css/dark:text-secondary_light';

const getCol = (type) => {
    switch (type) {
        case "primary":
            return text_primary;
        case "secondary":
            return text_secondary;
        case "secondary-light":
            return text_secondary_light;
        case "secondary-dark":
            return text_secondary_dark;
        case "tertiary":
            return text_tertiary;
        case "white":
            return text_white;
        case "grey-light":
        case "gray-light":
            return text_gray_light;
        case "gray-dark":
        case "grey-dark":
            return text_gray_dark;
        default:
            return text_black;
    }
}

const getColDark = (type) => {
    switch (type) {
        case "primary":
            return dark_text_primary;
        case "secondary":
            return dark_text_secondary;
        case "secondary-light":
            return dark_text_secondary_light;
        case "tertiary":
            return dark_text_tertiary;
        case "grey-light":
        case "gray-light":
            return dark_text_gray_light;
        case "gray-dark":
        case "grey-dark":
            return dark_text_gray_dark;
        case "black":
            return dark_text_black;
        default:
            return dark_text_white;
    }
}

export const getColor = (light, dark) => {
    return [getCol(light), getColDark(dark)]
}
