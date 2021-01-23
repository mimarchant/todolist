import React, { useRef, useState } from 'react';
import './App.css';
import Title from './components/title';

function App() {


  let inputRef = useRef(null);

  const [list, setList] = useState([]);

  const addTask = (e) => {
    if (e.keyCode === 13 && inputRef.value !== "") {
      /* setTask(inputRef.value); */
      setList(list.concat(inputRef.value));
      inputRef.value = "";

    }

  }
  const addTask2 = () => {
    if (inputRef.value !== "") {
      setList(list.concat(inputRef.value));
      inputRef.value = "";
    }
  }

  const deleteTask = (i) => {
    list.splice(i, 1);
    setList([...list]);
  }

  const deleteAllTasks = () => {
    setList([])
  }





  return (
    <>
      <div className="container border mt-5 fondo">
        <Title />
        <div className="d-flex mt-5">
          <input ref={r => inputRef = r} onKeyUp={addTask} className="col-md-9 form-control" placeholder="What needs to be done?" autoFocus></input>
          <button onClick={addTask2} className="btn ml-5 bg-success text-white"><i class="fas fa-thumbtack"></i></button>
        </div>
        <div className="">
          <ol className="list-group mb-5">
            {
              !!list.length > 0 &&
              list.map((task, i) => {
                return (
                  <li key={i} className="col-md-9 list-group-item text-start">{task}<i onClick={() => deleteTask(i)} className="fas fa-trash"></i></li>
                )
              })
            }

          </ol>
          <div className="text-center">
            <button className="btn bg-danger mb-3" onClick={deleteAllTasks}>delete</button>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
