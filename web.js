
function display(value){
document.getElementById('result').value += value;

};
function giveAns(){
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById('result').value = b;
}