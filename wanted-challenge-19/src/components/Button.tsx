type ButtonType = {
  name: string;
  onClick: (value: any) => void;
};

function Button({ name, onClick }: ButtonType) {
  return (
    <button className="container" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
