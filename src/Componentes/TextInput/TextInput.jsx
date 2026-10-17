function TextInput({ type = "text" , lable, placeholder = "enter your input here" , value, onchageHandler}){

    return(
        <lable>
        <span className="text-gray-750 p-[20px]">{lable}</span>
        <input
            type = {type}
            className="px-4 py-2 border border-gray-500 rounded-md w-full"
            placeholder ={placeholder}
            value ={value}
            onChange={onchageHandler}
        />
        </lable>
    )
}

export default TextInput