import { getMaskedString } from "./MaskingUtility";

function MaskedText({text, gussedletters}){
    const maskedString = getMaskedString(text, gussedletters)

    return (
        <>
            {maskedString.map((letter, index)=>{
                return(
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </>
    )
}
export default MaskedText;