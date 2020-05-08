
const save = function (arg){
    var datas = load()||[];
    datas.push(arg);
    localStorage.setItem("sleep",JSON.stringify(datas));
}

const load = function load(){
    return JSON.parse(localStorage.getItem("sleep"));
}
