import {py_2} from 'linea-ui-project-css/css/py-2';
import {rounded} from 'linea-ui-project-css/css/rounded';
import {baseAction} from '../../utils';
import { store } from '../../utils/store';
import { baseClass } from '../../utils/base';

export const listA = baseAction((node, props) => {
    return {classes:_list}
});

export const _list = [py_2, rounded];

export const listR = (props, ...other) => _list.concat(other);

export const list = (props, ...other) => listR(props,...other).join(' ');
export const List = baseClass(list);
export default List();