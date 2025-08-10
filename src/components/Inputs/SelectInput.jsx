const SelectInput = ({label,name,onChange,required=false,value,options}) => {
    return ( 
        <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>
                    {label}
                </label>
                <select
                    name={name}
                    
                    id={name}
                    value={value}
                    className='w-full p-2 border  rounded-lg '
                    onChange={onChange}>
                    
                    {options.map((option, index) => (
                        <option key={option.value} value={option.value}>{option.label}</option> 
                    ))}
                     
                    

                </select>
                    
            </div>
                
     );
}
 
export default SelectInput;