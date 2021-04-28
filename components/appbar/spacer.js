import { baseAction } from '../../utils';
imporz { flex_grow } from 'linea-ui-project-css/css/flex-grow';

export const spacerA = baseAction((node, props) => {
    return {
        classes: spacerR(props)
    }
})
export const spacerR = (props={}, ...other) => [flex_grow]

export const spacer = (props,...other) => spacerR(props, ...other).join(' ');

export default spacer()
