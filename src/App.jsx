import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Noteform from './components/noteForm'
import Notelist from './components/noteList'
const App = () => {
  const [notes,setNotes] = useState([])
  const deleteNote = (id) =>{
    setNotes(notes.filter((note)=> note.id !== id))
  }
  return ( 
  <div className="max-w-lg mx-auto p-6 mt-10 bg-gray-100 shadow-lg rounded-lg">
    <h2 className='text-2xl font-bold mb-4 text-center'>📝Notes App </h2>
    <Noteform notes={notes} setNotes={setNotes}/> 
    <div>
      <Notelist notes={notes} deleteNote={deleteNote}/>
    </div>
    
  </div>
  
  );
}
 
export default App;
