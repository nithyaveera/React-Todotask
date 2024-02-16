import React, { useState } from 'react';
import './style/displaycomp.css'

const DisplayComp = ({ index, item, deleteElem, changeStatus, editTodo }) => {
    let [isEditTodo, setEdittodo] = useState(false)
    let [editTitle, setEditTitle] = useState(item.title)
    let [editDescrip, setEditDescrip] = useState(item.descrip)
    let handleSave = () => {
        if (editTitle !== '' && editDescrip !== '') {
            editTodo(index, { ...item, name: editTitle, descrip: editDescrip })
            setEdittodo(false)
        } else {
            alert('Please Enter title and description')
        }
    }
    let handleCancel = () => {
        setEdittodo(false);
        setEditTitle(item.name);
        setEditDescrip(item.descrip);
    }
    let handleEdit = () => {
        setEdittodo(true)
    }
    return (
        <div className="col-md-4 mb-4" key={index} >
            <div className="card h-100 cart p-3">
                <div className="card-body">
                    {isEditTodo ? (
                        <>
                            <div>
                            <label htmlFor={`edittitle ${index}`}>Title :</label>
                                <input type="text" id={`edittitle ${index}`} style={{margin:"5px",padding:"3px",border:'none'}} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} required/>                     </div>
                            <div>
                            <label htmlFor={`editdescrip ${index}`}>Description :</label>
                                <input type="text" id={`editdescrip ${index}`} style={{ margin: "5px", padding: "3px", border: 'none' }} value={editDescrip} onChange={(e) => setEditDescrip(e.target.value)} required/>
                            </div>
                        </>
                    ) : (<>
                        <p>Name :{item.name}</p>
                        <p>Description :{item.descrip}</p>
                    </>)}
                    
                    <p>Status :
                        <select value={item.status} className="select" style={{ backgroundColor: item.status === 'pending' ? '#fe8282' : '#0fb08b',margin:"7px" }} onChange={(e) => changeStatus(index, e.target.value)}>
                            <option value='pending' >pending</option>
                            <option value='completed'>completed</option>
                        </select>
                    </p>
                    <div id="btns">
                        {isEditTodo ? (<>
                            <button className='btn edit' onClick={handleSave}>Save</button>
                            <button className='btn del' onClick={handleCancel}>Cancel</button>
                        </>) : (<>
                                <button className='btn edit' onClick={handleEdit} >Edit</button>
                                <button className='btn del' onClick={() => { deleteElem(index) }}>Delete</button>
                        </>)}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default DisplayComp;
