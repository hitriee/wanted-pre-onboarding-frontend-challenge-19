import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../store/rootReducer";
import { contentValue } from "../store/rootReducer";

// type InputContent = {
//   content: string;
//   onChange: (value: string) => void;
// };

function Input() {
  const content = useSelector(contentValue);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <input
        type="text"
        name="listMaker"
        id="listMaker"
        placeholder="Input"
        onChange={(e) => dispatch(onChange(e.target.value))}
        value={content}
      />
    </div>
  );
}

export default Input;
