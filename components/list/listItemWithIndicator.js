import { baseAction } from '../../utils';
import { flex } from 'linea-ui-project-css/css/flex';
import { flex_row } from 'linea-ui-project-css/css/flex-row';
import { justify_between } from 'linea-ui-project-css/css/justify-between';
import { p_2 } from 'linea-ui-project-css/css/p-2';
import { m_2 } from 'linea-ui-project-css/css/m-2';

export const listItemWithIndicatorA = baseAction((node, props) => {



    return { classes:_listItemWithIndicatorR }
})

const _listItemWithIndicatorR = [
        flex,
        flex_row,
        justify_between,
        p_2, m_2
    ]

export const listItemWithIndicatorR = (props, ...other) => _listItemWithIndicatorR.concat(other)

export const listItemWithIndicator = (props, ...other) => listItemWithIndicatorR(props, ...other).join(' ');
