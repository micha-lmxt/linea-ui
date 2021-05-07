import { list_decimal } from 'linea-ui-project-css/css/list-decimal';
import {list_inside} from 'linea-ui-project-css/css/list-inside';
import {list_outside} from 'linea-ui-project-css/css/list-outside';
import { listR } from "./list";
import { baseClass } from '../../utils/base';


export const olR = (props,...other) => listR(props,...other).concat([list_decimal,props.outside?list_outside:list_inside]);
export const ol = (props,...other)=> olR(props,...other).join(" ");
export const Ol = baseClass(ol);
export default Ol();