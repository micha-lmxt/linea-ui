import { baseAction } from '../../utils';
import { h_auto } from 'linea-ui-project-css/css/h-auto';
import {overflow_hidden} from 'linea-ui-project-css/css/overflow-hidden';
import { overflow_y_auto } from 'linea-ui-project-css/css/overflow-y-auto';
import { scrolling_touch } from 'linea-ui-project-css/css/scrolling-touch';
import { sticky } from 'linea-ui-project-css/css/sticky';
import { top_0} from 'linea-ui-project-css/css/top-0';


export const contentA = baseAction((node, props) => {
    return {
        classes: contentR(props)
    }
})
export const contentR = (props={}, ...other) => [
  h_auto,
  overflow_hidden,
  overflow_y_auto,
  scrolling_touch,
  sticky,
  top_0
].concat(other);

export const content = (props,...other) => contentR(props, ...other).join(' ');

export default content()
