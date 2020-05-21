$(function() {
    var areaLog1 = $('#areaLog1')
    var input = $('#record-btn')

    input.click(function() {
        var start = $('#start option:selected').text();
        var awake = $('#awake option:selected').text();
        var feeling = $('input[name=feel]:checked').val();
        var bath = $('input[name=bath]:checked').val();
        var howdid = $('#howdid').val();
    
        var logcontents = $('#logcontents')
        var row = $('<tr></tr>')
        row.append(
        '<td>'+ start + '</td>'+
        '<td>'+ awake + '</td>'+
        '<td>'+ feeling + '</td>'+
        '<td>'+ bath + '</td>'+
        '<td>'+ howdid + '</td>'
        )

        logcontents.append(row)

        var savedatas = {
            start:start,
            awake:awake,
            feeling:feeling,
            bath:bath,
            howdid:howdid,
        }

        save(savedatas);
    });
    load();
});


const save = function (arg){
    var datas = load()||[];
    datas.push(arg);
    // ローカルに保存
    localStorage.setItem("sleep",JSON.stringify(datas));
    // サーバーに保存
    $.ajax({
        type: "post",
        url: "/api",
        data: JSON.stringify(arg),
        dataType: "json"
    });
}


// ↓ここにGASからのデータが入るようにする　→コンソールに出るようになる
const load = function(){
    //return JSON.parse(localStorage.getItem("sleep"));
    $.ajax({
        type: "get",
        url: "/api",
        dataType: "json"
    }).then(r => {console.log(r)});

}
