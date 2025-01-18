import { ReactNode, ComponentProps } from "react";

interface IProps{
    name:string
}

const defaultProps = {
    age :25
}

const Demo3 = ({name,age}:IProps & typeof defaultProps): JSX.Element => {
    
    return <>
        <div>
            {name} {age}
        </div>
    </>
}
Demo3.defaultProps = defaultProps

const TestComponent = (props: ComponentProps<typeof Demo3>) => {
    const {name, age} = props
    return (
      <>
        <div>
          {name} {age}
        </div>
      </>
    );
}


const TestComponent2 = () => {
    return (
      <>
        <div>
          <TestComponent33 name="123" />
        </div>
      </>
    );
}

type CComponentProps<T> = T extends
    | React.FunctionComponent<infer P>
    | React.Component<infer P>
    ? JSX.LibraryManagedAttributes<T,P>
    : never;

const TestComponent33 = (props: CComponentProps<typeof Demo3>) => {
  const { name, age } = props;
  return (
    <>
      <div>
        {name} {age}
      </div>
    </>
  );
};

export default Demo3