interface ButtonProps {
  text: string;
  type: "button" | "submit";
}

const Button = ({ text, type }: ButtonProps): JSX.Element => {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};

export default Button;
