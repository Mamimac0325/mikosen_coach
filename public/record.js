$(function() {
    var start = $('#start option:selected').text();
    var awake = $('#awake option:selected').text();
    var feeling = $('input[name=feel]:checked').val();
    var how = $('#howdid').val();
    var howdid = $(how).val();
    var areaLog1 = $('#areaLog1')
    var input = $('#record-btn')

    input.click(function() {
        var logcontents = $('#logcontents')
        var row = $('<tr></tr>')
        row.append(
        '<td>'+ start + '</td>'+
        '<td>'+ awake + '</td>'+
        '<td>'+ feeling + '</td>'+
        '<td>'+ howdid + '</td>'
        )

        logcontents.append(row)
    });

    

});
