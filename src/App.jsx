import React, { useEffect, useState } from 'react';
import InputComp from './component/InputComp';
import DisplayComp from './component/DisplayComp';
import FilterComp from './component/FilterComp';

const App = () => {
  let [todo, setTodo] = useState([])
  let [filterStatus, setFilterstatus] = useState('all')
  let [filtertodo,setfiltertodo] = useState([])
  let addTodoList = (title,description) => {
    let newTask = {
      id:todo.length+1,
      name: title,
      descrip: description,
      status:'pending'
    }
    setTodo([...todo,newTask])
  }
  
  const deleteElem = (item) => {
    setTodo((pval) => pval.filter((val) => val.id !== item))
  }
  
  const changeStatus = (index, newstatus) => {
    const updatedTodos = [...todo]
    updatedTodos[index].status = newstatus
    setTodo(updatedTodos)
  }

  const editTodo = (id, updatedTodo) => {
    setTodo((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
      });
    });
  };

  
  useEffect(() => {
    if (filterStatus == 'all') {
      setfiltertodo(todo)
    }
     if (filterStatus == 'pending') {
      setfiltertodo(todo.filter((item) => item.status == 'pending'))
    }
    if (filterStatus == 'completed') {
      setfiltertodo(todo.filter((item) => item.status == 'completed'))
    }
     console.log(todo,filterStatus)
  },[filterStatus,todo])

  return (
    <div className='container'>
      <h2 className='text-center mt-5 ' style={{ color:'#0fb08b'}}>My ToDo</h2>
      <InputComp addTodoList={addTodoList} />
      <FilterComp setFilterstatus={setFilterstatus} />
      <div className='row mt-5'>
      {filtertodo.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <DisplayComp index={index} item={item} deleteElem={deleteElem} changeStatus={changeStatus} editTodo={editTodo} />
          </React.Fragment>
        )
      })}
      </div>
    </div>
  );
};

export default App;

  
