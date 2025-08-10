import React, { useState } from 'react';
import TextInput from './Inputs/TextInput.jsx';
import SelectInput from './Inputs/SelectInput.jsx';
import TextAreaInput from './Inputs/TextAreaInput.jsx';
const Noteform = ({notes,setNotes}) => {
    const [formData,setformData] = useState({
        title: '',
        category: 'Work',
        priority: 'High',
        description: '',

    });
   
    
    const [isFormVisible,setFormVisible] = useState(false);
    const handleChange = (e) => {
        setformData({
            ...formData,// copies all existing fields
            [e.target.name]:e.target.value
        });


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // validation
        if (!formData.title || !formData.description) {
            alert('Please fill in all fields');
            return;
        }
        const newNote = {id:Date.now(), ...formData};
        // ading new notes as well as the old ones 
        setNotes([...notes, newNote]);

        //reset formData 
        setformData({
            title:'',
            description:'',
            category:'Work',
            priority:'High'
        })
    }
    
    return ( 
    <div>
        <button onClick={() =>setFormVisible((prevState) => !prevState)} className='w-full bg-gray-100 border border-blue-300 text-blue-800 py-2 rounded-lg transition hover:bg-blue-200  cursor-pointer mb-4'>{isFormVisible ? 'Hide Form ✖':'Add New Note ➕'} </button> 
        { isFormVisible && (  
        <form className='mb-6' onSubmit={handleSubmit}>
            <TextInput label='Title' name="title" onChange={handleChange} value={formData.title}/>
            <SelectInput label='Category' name="category" onChange={handleChange} value={formData.category} 
            options={[
                {value: 'Work',
                label: '💻Work'},
                {value: 'Personal',
                label: '🏠Personal'},
                {value: 'Ideas',
                label: '🧠Ideas'}
            ]}/>
            
            <SelectInput label='Priority' name="priority" onChange={handleChange} value={formData.priority} 
            options={[
                {value: 'High',
                label: '🔴High'},
                {value: 'Medium',
                label: '🟠Medium'},
                {value: 'Low',
                label: '🟢Low'}
            ]}/>
            
            <TextAreaInput label='Description' name='description' onChange={handleChange} value={formData.description}/>
            

            
            <button className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer'>
                Add Note
            </button>
            
        </form>)}
        
    </div> );
}
 
export default Noteform;