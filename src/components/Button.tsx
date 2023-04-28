interface Props {
  children: string;
  type?:
    | "primary"
    | "secundary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

const Button = ({ children, type = "info", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
