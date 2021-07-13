function send(number){
    firstnumber=$('#display').val();
    $('#display').val(firstnumber+number);
}
// function send(num){
//     var y = $(num).val();
//     var x = $("#display").val();
//     $('#display').val(x+y);
// }
function math(symbol){
    value_1=$('#display').val();
    $('#display').val(symbol)
    type=symbol;
}
function solve(){
    displayValue=$('#display').val();
    value_2=displayValue.slice(1,displayValue.length)
    if(type=="+"){
    $('#display').val(parseFloat(value_1)+parseFloat(value_2));
    }
    if(type=="-"){
        $('#display').val(parseFloat(value_1)-parseFloat(value_2));
    }
    if(type=="*"){
        $('#display').val(parseFloat(value_1)*parseFloat(value_2));
    }
    if(type=="/"){
        $('#display').val(parseFloat(value_1)/parseFloat(value_2));
    }
    if(type=="%"){
        $('#display').val(parseFloat(value_1)%parseFloat(value_2));
    }
}
function delet(){
    $('#display').val("");   
}
function back(){
    original=$('#display').val();
    current= original.slice(0,original.length-1);  
    $('#display').val(current);
}