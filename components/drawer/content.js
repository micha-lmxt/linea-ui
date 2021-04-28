import { baseAction } from '../../utils';
import { h_screen } from 'linea-ui-project-css/css/h-screen';
import {overflow_hidden} from 'linea-ui-project-css/css/overflow-hidden';
import { overflow_y_auto } from 'linea-ui-project-css/css/overflow-y-auto';
import { sticky } from 'linea-ui-project-css/css/sticky';
import { top_0} from 'linea-ui-project-css/css/top-0';


export const contentA = baseAction((node, props) => {
    return {
        classes: contentR(props)
    }
})
export const contentR = (props={}, ...other) => [
  h_screen,
  overflow_hidden,
  overflow_y_auto,
  sticky,
  top_0
].concat(other);

export const content = (props,...other) => contentR(props, ...other).join(' ');

export default content()
