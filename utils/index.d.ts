export const baseAction: <T>  (cb: (node: Node, props: T) => { classes: string[], subscriptions: Readable<any>[] }) =>
    (node: Node, props: T) => {
        updade: (props: T) => void,
        destroy: () => void
    }