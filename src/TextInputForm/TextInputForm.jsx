import Button from "../Componentes/Button/Button"
import ButtonColor from "../Componentes/Button/Color"
import TextInput from "../Componentes/TextInput/TextInput"

function TextInputForm({inputType, handelFormSumbit, handelTextInputChange, handelShowHideClick}){

   

    return(
        <form onSubmit={handelFormSumbit}>
            <div>
                <TextInput
                    type ={inputType}
                    lable='enter a word or phrase'
                    placeholder="Guess The word"
                    onchageHandler={handelTextInputChange}
                />

            </div>
            <div>
                <Button
                    className="backgroundColor-black"
                    text={inputType === "password" ? "Show": "Hide"}
                    bg="third"
                    onClickHandler={handelShowHideClick}
                />
            </div>
             <div>
                <Button
                type="submit"
                    className="backgroundColor-black"
                    text="submit"
                    bg="prime"
                />
            </div>
        </form>
    )

}
export default TextInputForm