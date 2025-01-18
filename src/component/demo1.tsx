import React , {Ref} from "react";

const {useRef ,useEffect, useImperativeHandle} = React


type ListProps<T> = {
    item: T,
    innerRef: Ref<{to(): void}>
}

export default (props:ListProps<{}>) => {
    const ref1 = useRef<HTMLDivElement>(null);

    useImperativeHandle(props.innerRef, () => ({
        to(){}
    }));

    useEffect(() => {
        console.log(ref1.current);
    })
    return (
      <>
        <div ref={ref1}></div>
        </>
        
    );
}