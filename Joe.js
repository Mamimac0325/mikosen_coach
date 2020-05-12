$(function() {
    var areaLog1 = $('#areaLog1')
    var input = $('#record-btn')

    input.click(function() {
        var start = $('#start option:selected').text();
        var awake = $('#awake option:selected').text();
        var feeling = $('input[name=feel]:checked').val();
        var howdid = $('#howdid').val();
    
        var logcontents = $('#logcontents')
        var row = $('<tr></tr>')
        row.append(
        '<td>'+ start + '</td>'+
        '<td>'+ awake + '</td>'+
        '<td>'+ feeling + '</td>'+
        '<td>'+ howdid + '</td>'
        )

        logcontents.append(row)

        var savedatas = {
            start:start,
            awake:awake,
            feeling:feeling,
            howdid:howdid,
        }

        save(savedatas);
    });



});



const save = function (arg){
    var datas = load()||[];
    datas.push(arg);
    // ローカルに保存
    localStorage.setItem("sleep",JSON.stringify(datas));
    // サーバーに保存
    $.ajax({
        type: "post",
        url: "https://script.google.com/macros/s/AKfycbyg8Ises98BRSQvf2q2PmYSZZiz6Ll1akZVNBa7VliI2YxGs93y/exec",
        data: JSON.stringify(arg),
        dataType: "json"
    });
}



const load = function load(){
    return JSON.parse(localStorage.getItem("sleep"));
}