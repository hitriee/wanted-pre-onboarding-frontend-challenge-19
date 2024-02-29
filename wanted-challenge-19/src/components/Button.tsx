type ButtonType = {
  name: string;
  onPressed: (arg: any) => void;
};

function Button({ name, onPressed }: ButtonType) {
  return (
    <button className="container" onClick={onPressed}>
      {name}
    </button>
  );
}

export default Button;
