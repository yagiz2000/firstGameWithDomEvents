const firstNumberLabel = document.querySelectorAll(".col-sm")[0];
const secondNumberLabel = document.querySelectorAll(".col-sm")[2];
const pointArea = document.getElementById("point-area");
const alertArea = document.getElementById("alert-area");
const tbody = document.getElementById("tbody");

class UI{
    static changeNumbers(num1Value,num2Value){
        firstNumberLabel.innerHTML = `<h3 class="numbers">${num1Value}</h3>`;
        secondNumberLabel.innerHTML = `<h3 class = "numbers">${num2Value}</h3>`;

    }
    static addPoint(){
        let point = parseInt(pointArea.textContent)+5;
        pointArea.innerHTML = `<span style="margin-left: 1cm;"id="point-area" class="badge badge-secondary">${point}</span>`;
    }
    static createAlert(type,message){
        if(type==="danger"){
            const newElement = document.createElement("div");

            newElement.className = `alert alert-${type}`;
            newElement.role= "alert";
            newElement.textContent = `${message}`;
            newElement.style="margin-top: 10%;margin-left: 40%;width: 20%;border-radius: 500px;background-color: red;color: lightcyan;font-weight: bolder;"
            alertArea.appendChild(newElement);
    
            setInterval(function(){
                newElement.remove();
            },1500)
        }
        if(type==="success"){
            const newElement = document.createElement("div");

            newElement.className = `alert alert-${type}`;
            newElement.role= "alert";
            newElement.textContent = `${message}`;
            newElement.style="margin-top: 10%;margin-left: 40%;width: 20%;border-radius: 500px;background-color: green;color: lightcyan;font-weight: bolder;"
            alertArea.appendChild(newElement);
    
            setInterval(function(){
                newElement.remove();
            },1500)
        }
    }
    static getScoreFromUI(){
        const score = pointArea.textContent;
        return score;
    }
   /*  <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr> */
    static addScoreToUI(score){
        const newElement = document.createElement("tr");
        newElement.innerHTML+=`<td>${score}</td>`; 
        tbody.prepend(newElement);
        pointArea.textContent = 0;

    }
    static loadScoresToUı(){
        const data = Storage.getDataFromStorage();
        data.forEach(element => {
            const newElement = document.createElement("tr");
            newElement.innerHTML+=`<td>${element}</td>`; 
            tbody.prepend(newElement);
        });
    }
}