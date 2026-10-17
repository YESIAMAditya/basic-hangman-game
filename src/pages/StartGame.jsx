import { Link } from "react-router-dom";
import TextInputFormContainer from "../TextInputForm/TextInputFormContainer";

function StartGame(){

    return(
        <>
        <h1>StartGame</h1>
        <TextInputFormContainer/>
        <Link to='/play' className="text-blue-500" ><h1>Play Game Click Here</h1></Link>
        </>
    )
}
export default StartGame;