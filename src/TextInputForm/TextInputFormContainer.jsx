import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const [inputType, setInputType] = useState("text");
    const [value, setValue] = useState("")
    const navigate = useNavigate();
    

     function handelFormSumbit(event){
        event.preventDefault();
        console.log("Form sumbited", value)
        if(value.length > 0){
          
            navigate(`/play`, {state:{wordSelected: value}})
        }
         
    }
    function handelTextInputChange(event){
        console.log("Text Input Change")
        console.log(event.target.value)
        setValue(event.target.value)
    }

    function handelShowHideClick(){
        console.log("Show / Hide")
        if(inputType === "text"){
            setInputType("password")
        }else{
            setInputType("text")
        }
    }

    return(
        <>
            <TextInputForm
                inputType ={inputType}
                handelShowHideClick={handelShowHideClick}
                handelFormSumbit={handelFormSumbit}
                handelTextInputChange={handelTextInputChange}
            />
        </>
    )
}
export default TextInputFormContainer;