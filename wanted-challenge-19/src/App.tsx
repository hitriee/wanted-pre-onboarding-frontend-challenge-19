import "./style.scss";
import Box from "./components/List/Box";
import Button from "./components/Button";
import Input from "./components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  listValues,
  lengthValue,
} from "./store/rootReducer";

function App() {
  const list = useSelector(listValues);
  const length = useSelector(lengthValue);
  const dispatch = useDispatch();

  return (
    <div className="App container">
      <section className="flex marginVertical">
        <Input />
        <Button name="Add" onClick={() => dispatch(addItem())} />
      </section>
      <section>
        {length === 0 ? (
          <div></div>
        ) : (
          <>
            {list.map((content: string, index: number): JSX.Element => {
              return (
                <>
                  <hr></hr>
                  <div key={index} className="flex marginVertical line">
                    <Box content={content} />
                    <Button
                      name="Delete"
                      onClick={() => dispatch(deleteItem(index))}
                    />
                  </div>
                </>
              );
            })}
            <hr></hr>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
