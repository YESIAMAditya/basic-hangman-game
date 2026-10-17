import { Link, useLocation} from "react-router-dom";
import MaskedText from "../MaskedText/MaskrdText";

function PlayGame(){

    //const [searchParams] = useSearchParams()
    //console.log(searchParams.get("text"))
    //const {text, id} = useParams()

    const {state} = useLocation()

    return(
        <>
            <h1>Play Game {state.wordSelected} </h1>
            <MaskedText text={state.wordSelected} gussedletters={['h', "e", 'l', "o"]} />
            <Link to='/' className="text-green-600" ><h1>Go Home</h1></Link>
        </>
    )

}

export default PlayGame;