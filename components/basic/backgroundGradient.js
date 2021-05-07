import { baseAction } from '../../utils';
import { baseClass } from '../../utils/base';
import { bg_gradient_to_t} from 'linea-ui-project-css/css/bg-gradient-to-t'
import { bg_gradient_to_tr} from 'linea-ui-project-css/css/bg-gradient-to-tr'
import { bg_gradient_to_r} from 'linea-ui-project-css/css/bg-gradient-to-r'
import { bg_gradient_to_br} from 'linea-ui-project-css/css/bg-gradient-to-br'

const dir = (p)=>{
    switch(p){
        case "t": return bg_gradient_to_t;
        case "tr": return bg_gradient_to_tr;
        case "r": return bg_gradient_to_r;
        default: return bg_gradient_to_br; 
    }
}

export const backgroundGradientA = baseAction((node, props) => {
    return {
        classes: backgroundGradientR(props)
    }
})
export const backgroundGradientR = (props={}, ...other) => [dir(props.direction)].concat(other);

export const backgroundGradient = (props,...other) => backgroundGradientR(props, ...other).join(' ');

export const BackgroundGradient = baseClass(backgroundGradient)