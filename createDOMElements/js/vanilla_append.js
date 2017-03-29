var table = document.getElementById('table');

var time = Date.now();

var tbody = document.createElement('tbody');
for (var i = 0 ; i < loop ; i++) {
    var row = document.createElement('tr');
    tbody.appendChild(row);
}
table.appendChild(tbody);

time = Date.now() - time;
console.log(time + 'ms');