import React, {useState} from 'react';

function NewTodoForm (props){
    const [assigned, setAssigned] = useState('');
    const [description, setDescription] = useState('');

    const submitTodo = () =>{
        if(description !== '' && assigned !== ''){
            props.addTodo(description, assigned);
            setAssigned('');
            setDescription('');

        }
    }

    const assignedChange = (event) => {
        setAssigned(event.target.value);
    }

    const descriptionChange = (event) => {
        setDescription(event.target.value);
    }


    return (<div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Asiggned</label>
                    <input 
                        className='form-control' 
                        type='text'
                        onChange={assignedChange}
                        value={assigned}
                        required>
                    </input>
                </div>
                <div className='mb-3'>
                    <label className='mb-3'>Description</label>
                    <textarea 
                        className='form-control' 
                        type='textArea' 
                        onChange={descriptionChange}
                        value={description}
                        required rows={3}>
                        
                    </textarea>
                </div>
                <button 
                    className='btn btn-primary'
                    onClick={submitTodo}
                    >Submit
                </button>
            </form>
        </div>)
}

export default NewTodoForm;