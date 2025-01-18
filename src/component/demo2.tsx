
import React, { ReactDOM, ReactNode, FC } from "react";

type GreatProps = {
    number: number

}

const Demo2: FC<GreatProps> = (props: GreatProps): ReactNode => {
  const { number } = props;
  return <h1>{number}</h1>;
};
    

export  type ApprePros = JSX.LibraryManagedAttributes<typeof Demo2, {name: string}>;
export type porps2= React.Component<typeof Demo2, ApprePros>; 