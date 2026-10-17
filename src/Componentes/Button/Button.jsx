import ButtonColor from "./Color"

function Button({text, onClickHandler, bg = 'prime', type="button"}){
    
    return (
        <>
        <button
        onClick={onClickHandler}
        type={type}
        className={`px-4 py-2 text-white ${ButtonColor(bg)}`}
        >
        {text}
        </button>
        </>
    
    )
}



export default Button