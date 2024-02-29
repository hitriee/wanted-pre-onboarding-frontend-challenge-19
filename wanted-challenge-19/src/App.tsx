import Box from "./components/List/Box";
import "./style.scss";
import Button from "./components/Button";
import React, { useEffect, useState } from "react";
import Input from "./components/Input";

function App() {
  const [list, setList] = useState<string[]>([]);
  const [content, setContent] = useState("");
  function addItem(content: string) {
    setList((prev) => [...prev, content]);
    onChange("");
  }

  function deleteItem(idx: number) {
    setList(
      list.filter((value, index) => {
        if (index !== idx) {
          return value;
        }
      })
    );
  }

  function onChange(newContent: string) {
    setContent(() => newContent);
  }

  useEffect(() => {
    console.log(list);
  }, []);

  return (
    <div className="App">
      <section className="flex">
        <Input content={content} onChange={onChange} />
        <Button name="Add" onPressed={() => addItem(content)} />
      </section>
      <section>
        {list.length === 0 ? (
          <div></div>
        ) : (
          <>
            {list.map((content: string, index: number): JSX.Element => {
              return (
                <div key={index} className="flex">
                  <Box content={content} />
                  <Button name="Delete" onPressed={() => deleteItem(index)} />
                </div>
              );
            })}
          </>
        )}
      </section>
    </div>
  );
}

export default App;
