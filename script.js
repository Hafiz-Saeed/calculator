//display function

function displayNumber(num){
    result.value += num
}

//clear function

function clearBox(){
    result.value = ""
}

//evaluate expression



function Evaluate(){

    // //method 1

    // exp = result.value
    // output = eval(exp)
    // result.value= output


    //method 2

    result.value = eval(result.value)
}

function removela(){
    result.value=result.value.slice(0,-1)
}