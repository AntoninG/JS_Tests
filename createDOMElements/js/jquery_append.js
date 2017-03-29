var table = $('#table');

var time = Date.now();

var tbody = $('<tbody>');
for (var i = 0 ; i < loop ; i++) {
    var row = $('<tr>');
    tbody.append(row);
}
table.append(tbody);

time = Date.now() - time;
console.log(time + 'ms');