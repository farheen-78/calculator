
function getNo(num){
    
   var result =document.getElementById("no");
    result.value+=num;
    
}
function getResult(){
    result=document.getElementById("no");
    result.value=eval(result.value);
}
function getClear(){

    result=document.getElementById("no");
    result.value="";
}
function getSq(){
    result=document.getElementById("no");
    result.value=Math.sqrt(result.value);
}