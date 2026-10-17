

export function getMaskedString(originalword, gussedletters){

gussedletters = gussedletters.map(letter => letter.toUpperCase());
const gussedLetterSet = new Set(gussedletters)
const result = originalword.toUpperCase().split("").map(char => {
    if(gussedLetterSet.has(char)){
        return char
    }else{
        return "_"
    }
})
return result;
}