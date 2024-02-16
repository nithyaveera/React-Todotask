import React, { useState } from 'react';
import './style/inputcomp.css'

const InputComp = ({ addTodoList }) => {
    let [title, setTitle] = useState('')
    let [description, setdescription] = useState('')
    let addHandling = () => {
        if (title !== '' && description !== '') {
            addTodoList(title, description)
            setTitle('')
            setdescription('')
        } else {
            alert('Please Enter title and description')
        }
    }
    return (
        <div className='d-flex justify-content-around mt-5'>
            <input type="text" id='title' placeholder='Todo Name' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" id='description' placeholder='Todo description' value={description} onChange={(e) => setdescription(e.target.value)} required/>
                <button onClick={addHandling} className='add'>Add Todo</button>
        </div>
    );
};

export default InputComp;