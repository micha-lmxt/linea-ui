import {baseAction} from '../../utils';
import {getColor} from '../../utils/getColor';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_4} from 'linea-ui-project-css/css/my-4';
import { baseClass } from '../../utils/base';



export const PA = baseAction((node, props) => {
    return {classes:PR(props)}
})

export const PR = (props={}, ...other) => [
        ...getColor(props.color,props.colorDark),
        p_2, mx_2,my_4
    ].concat(other)
    
export const _p = (props, ...other) => PR(props, ...other).join(' ');

export const P = baseClass(_p);
export default P();