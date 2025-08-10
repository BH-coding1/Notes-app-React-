const Notelist = ({notes, deleteNote}) => {
    if (notes.length === 0){
        return (
            <p className="text-center text-gray-500">No Notes Yet </p>
        )
    }
    let TaskColor = (priority) => {
        if (priority === 'High') {return 'border-red-500'};
        if (priority === 'Medium') {return 'border-yellow-500'};
        if (priority === 'Low') {return 'border-green-500'};}
    return ( 
    <div className="space-y-4">
        {notes.map(note => (
          <div className={`p-4 bg-white shadow-md rounded-lg border-l-4 ${TaskColor(note.priority)} ` } key={note.id}>
            <h3 className="flex text-xl font-semibold">{note.title}</h3>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <strong>Category: {note.category}</strong>
              
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <strong>Priority: {note.priority}</strong>
              
            </div>
            <p className="flex mt-2 text-gray-600">{note.description}</p>
            <button onClick= {()=> deleteNote(note.id)} className=" flex mt-3  text-red-700 px-4 py-2 rounded-lg hover:bg-red-600  hover:text-white transition-colors cursor-pointer">Delete</button>
          </div>
            
        ))}
    </div> 
    
);
}
 
export default Notelist;