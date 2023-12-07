let input = document.getElementById('input')
let curInput = ""

function addInput(value) {
    curInput += value
    input.value = curInput
}

//стереть всё
function addInputClear() { 
    curInput = ""
    input.value = ""
}

//удалить символ
let backspace = function () {
    let inputText = document.getElementById("input").value;
    document.getElementById("input").value = inputText.substring( 0,
    inputText.length - 1
     );
     };

//вычисления
function appOper(operator) {
    curInput += ' ' + operator + ' ';
    input.value = curInput
}

function addInputResult() {
    input.value = eval(curInput)
    curInput = input.value
}




// function addInputResult() {
//     const res = new Function ('return' + curInput)()
//     input.value = res
//     curInput = res
// }