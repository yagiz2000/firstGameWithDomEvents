
const button = document.getElementById("buton");
const input = document.getElementById("input1");
const button2 = document.getElementById("buton2");
const deleteBtn = document.getElementById("delete-btn");

let puan = 0;
eventListeners();


function eventListeners(){
    button2.addEventListener("click",kontrolEt);
    document.addEventListener("DOMContentLoaded",UI.loadScoresToUı);
    deleteBtn.addEventListener("click",deletScores);

}
function kontrolEt(){
    const number1FromUı = document.querySelectorAll(".col-sm")[0];
    const convertedNumber1 = parseInt((number1FromUı.textContent));
    const number2FromUı = document.querySelectorAll(".col-sm")[2];
    const convertedNumber2 = parseInt((number2FromUı.textContent));
    
    const answer = convertedNumber1+convertedNumber2;

    if(parseInt(input.value)===answer){
        console.log("true");
        input.value = null;
        UI.addPoint();
        UI.createAlert("success","Bravo Doğru");
        const number1 = Nmbrs.generateNumber();
        const number2 = Nmbrs.generateNumber();
        UI.changeNumbers(number1,number2);
    }
    else{
        const score = UI.getScoreFromUI();
        //console.log(typeof score);
        Storage.addScoreToDataToStorage(score);
        UI.createAlert("danger","Yanlış cevap");
        UI.addScoreToUI(score);
        input.value = null;

    }
}
function deletScores(){
    const answer = confirm("Puanları silmek istediğinden emin misin ?");
    if(answer===true){
        Storage.deleteAllDatasFromStorage();
        location.reload();
    }

    
}











