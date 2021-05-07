
import { list_disc} from 'linea-ui-project-css/css/list-disc';
import {list_inside} from 'linea-ui-project-css/css/list-inside';
import {list_outside} from 'linea-ui-project-css/css/list-outside';
import { listR } from "./list";
import { baseClass } from '../../utils/base';


export const ulR = (props,...other) => listR(props,...other).concat([list_disc,props.outside?list_outside:list_inside]);
export const ul = (props,...other)=> ulR(props,...other).join(" ");
export const Ul = baseClass(ul);
export default Ul();