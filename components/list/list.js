import {PR} from '../h/p';
import {rounded} from 'linea-ui-project-css/css/rounded';
import {baseAction} from '../../utils';
import { baseClass } from '../../utils/base';

export const listA = baseAction((node, props) => {
    return {classes:_list}
});

export const _list = [rounded];

export const listR = (props={}, ...other) => _list.concat(PR(props)).concat(other);

export const list = (props, ...other) => listR(props,...other).join(' ');
export const List = baseClass(list);
export default List();