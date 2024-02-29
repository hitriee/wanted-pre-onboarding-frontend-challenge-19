type InputContent = {
  content: string;
  onChange: (value: string) => void;
};

function Input({ content, onChange }: InputContent) {
  return (
    <div className="container">
      <input
        type="text"
        name="listMaker"
        id="listMaker"
        placeholder="Input"
        onChange={(e) => onChange(e.target.value)}
        value={content}
      />
    </div>
  );
}

export default Input;
