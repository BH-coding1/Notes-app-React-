const TextAreaInput  = ({label,name,value,onChange}) => {
    return (  
        <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>
                    {label}
                </label>
                <textarea
                    name={name}
                    type='text'
                    id={name}
                    value={value}
                    className='w-full p-2 border  rounded-lg '
                    onChange={onChange}
                >

                </textarea>
                    
            </div>

    );
}
 
export default TextAreaInput ;