import { p_2 } from 'linea-ui-project-css/css/p-2';
import { mx_2 } from 'linea-ui-project-css/css/mx-2';
import { my_4} from 'linea-ui-project-css/css/my-4';
import {rounded} from 'linea-ui-project-css/css/rounded';
import {baseAction} from '../../utils';
import { baseClass } from '../../utils/base';

export const listA = baseAction((node, props) => {
    return {classes:_list}
});

export const _list = [rounded, p_2, mx_2,my_4];

export const listR = (props, ...other) => _list.concat(other);

export const list = (props, ...other) => listR(props,...other).join(' ');
export const List = baseClass(list);
export default List();