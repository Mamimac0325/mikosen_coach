$(function() {
    var areaLog1 = $('#areaLog1')
    var input = $('#record-btn')

    const render = function(arg){
        var logcontents = $('#logcontents')
        var row = $('<tr></tr>')
        row.append(
            '<td>'+ arg.start + '</td>'+
            '<td>'+ arg.awake + '</td>'+
            '<td>'+ arg.feeling + '</td>'+
            '<td>'+ arg.bath + '</td>'+
            '<td>'+ arg.howdid + '</td>'
        )
    
        logcontents.append(row)
    };

    input.click(function() {
        var start = $('#start option:selected').text();
        var awake = $('#awake option:selected').text();
        var feeling = $('input[name=feel]:checked').val();
        var bath = $('input[name=bath]:checked').val();
        var howdid = $('#howdid').val();

        save({
            start:start,
            awake:awake,
            feeling:feeling,
            bath:bath,
            howdid:howdid,
        });

        render({
            start:start,
            awake:awake,
            feeling:feeling,
            bath:bath,
            howdid:howdid,
        });
    });

    try{
        const datas = load() || []
        datas.map(function(d){
            render(d)
        });
    } catch {

    }

});
