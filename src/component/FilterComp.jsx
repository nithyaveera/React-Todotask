import React from 'react';

const FilterComp = ({ setFilterstatus }) =>{
    return (
        <div className='d-flex justify-content-between mt-5 aling-item-center'>
            <h5>My Todos</h5>

            <h5> Status Filter :
                <select onChange={(e) => { setFilterstatus(e.target.value) }} style={{ backgroundColor:"#fe8282",border:'none',color:'white',padding:'4px 2px',textAlign:'center',borderRadius:'7px'}}>
                <option value='all'>All</option>
                <option value='pending'>Pending</option>
                <option value='completed'>Complete</option>
                </select>
            </h5>
        </div>
    );
};

export default FilterComp;

                    
