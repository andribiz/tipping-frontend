import ContainerArea from "./Container.styled";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<Props> = ({ children }) => {
  return <ContainerArea>{children}</ContainerArea>;
};

export default Container;
