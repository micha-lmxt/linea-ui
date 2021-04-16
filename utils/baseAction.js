import {cleanup, setClasses} from './setClasses.js';

export const baseAction = (cb) => (node,props) => {
    let classes = [];
    let subscriptions = [];



    const setAction = (props={}) => {
        cleanup(node,classes,subscriptions);

        ({classes=[],subscriptions=[]} = cb(node,props));

        setClasses(node,classes);

    }

    setAction(props);
    return {
        update: setAction,
        destroy: ()=>{
            cleanup(undefined,[],subscriptions)
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
