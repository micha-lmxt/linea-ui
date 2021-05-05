import {cleanup, setClasses} from './setClasses.js';

export const baseAction = (cb) => (node,props) => {
    let classes = [];

    const setAction = (props={}) => {
        cleanup(node,classes);

        ({classes=[]} = cb(node,props,setAction));

        setClasses(node,classes);

    }

    setAction(props);
    return {
        update: setAction,
        destroy: ()=>{
            cleanup(undefined,[])
        }
    }
}

export const chainAction=( a1,a2)=> (node,props)=>{
    const ret1 = a1(node,props);
    const ret2 = a2(node,props);
    return {
        update:(props)=>{
            ret1.update?.(props)
            ret2.update?.(props)
        },
        destroy: ()=>{
            ret1.destroy?.()
            ret2.destroy?.()
        }
    }
}
