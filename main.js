function valueDispaly(value){
    let displaybox =document .getElementById('display');

    if(displaybox.value.length <10){
        displaybox.value += value;
    }
}

//clear function
function clearAllDisplay(){
    document.getElementById('display').value = '0';

} 

//delete funtion
function deleteDisplay(){
    display.value = display.value.toString().slice(0, -1);
}

//calculate function
function calculate(){
try{
        if(display.value.trim() === ''){
            display.value = '0';
        }else{
            display.value = eval(display.value);
        }
    }catch(error){
        display.value = "Err";
    }
}

//calculateBtn.addEventListener('click'), function(calculate){
    
//}