import { baseAction } from '../../utils';
import { getBgColor } from '../../utils/getBgColor';
import { fixed } from 'linea-ui-project-css/css/fixed';
import { top_0 } from 'linea-ui-project-css/css/top-0';
import { w_full } from 'linea-ui-project-css/css/w-full';
import { items_center } from 'linea-ui-project-css/css/items-center';
import { flex_wrap } from 'linea-ui-project-css/css/flex-wrap';
import { z_20 } from 'linea-ui-project-css/css/z-20';
import { p_4 } from 'linea-ui-project-css/css/p-4';
import { m_0 } from 'linea-ui-project-css/css/m-0';
import { h_16 } from 'linea-ui-project-css/css/h-16';
import { shadow } from 'linea-ui-project-css/css/shadow';
import { flex } from 'linea-ui-project-css/css/flex';

export const appbarA = baseAction((node, props) => {
    return {
        classes: appbarR(props)
    }
})
export const appbarR = (props={}, ...other) => 
  getBgColor(props.color, props.colorDark)
  .concat([
      fixed,
      top_0,
      w_full,
      items_center,
      flex_wrap,
      flex,
      z_20,
      p_4,
      m_0,
      h_16,
      shadow
    ])
  .concat(other);
export const appbar = (props,...other) => appbarR(props, ...other).join(' ');
