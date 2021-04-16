import {baseAction} from '../../utils';
import {w_full} from 'linea-ui-project-css/css/w-full';

export const maxContainer = baseAction((node, props) => {
    return {classes:[
        w_full
    ]}
})