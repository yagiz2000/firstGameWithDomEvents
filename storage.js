class Storage{
    static getDataFromStorage(){
        let data;
        if(localStorage.getItem("data")===null){
            data= [];
        }
        else{
            data = JSON.parse(localStorage.getItem("data"));
        }
        return data;
    }
    static addScoreToDataToStorage(score){
        let data = this.getDataFromStorage();
        data.push(score);
        localStorage.setItem("data",JSON.stringify(data));
    }
    static deleteAllDatasFromStorage(){
        localStorage.removeItem("data");
    }
}