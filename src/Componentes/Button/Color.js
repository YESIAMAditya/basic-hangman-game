function ButtonColor(bg){
    if(bg === "prime"){
        return "bg-gray-800"
    }else if(bg === "second"){
        return "bg-red-700"
    }else if(bg === "third"){
        return "bg-green-700"
    }
}

export default ButtonColor