import {py_2} from 'linea-ui-project-css/css/py-2';
import {rounded} from 'linea-ui-project-css/css/rounded';
import {baseAction} from '../../utils';

export const list = baseAction((node, props) => {
    return {classes:[
        py_2, rounded
    ]}
});