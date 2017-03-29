var table = document.getElementById('table');

var time = Date.now();

var html = '<tbody>';
for (var i = 0 ; i < loop ; i++) {
   html += '<tr></tr>';
}
html += '</tbody>';
table.innerHTML = html;

time = Date.now() - time;
console.log(time + 'ms');