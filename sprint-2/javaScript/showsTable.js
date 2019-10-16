var shows = [
    { date: "Mon Dec 17 2018", venue: "Ronald Lane", location: "San Francisco, CA" },
    { date: "Tue Jul 18 2019", venue: "Pier 3 East", location: "San Francisco, CA" },
    { date: "Fri Jul 22 2019", venue: "View Loungue", location: "San Francisco, CA" },
    { date: "Sat Aug 12 2019", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { date: "Fri Sep 05 2019", venue: "Moscow Center", location: "San Francisco, CA" },
    { date: "Wed Aug 11 2019", venue: "Pres Club", location: "San Francisco, CA" }
];

function createTable(table, shows) {
    for (var show of shows) {
        createTableHead(table, showKeys);
        var row = table.insertRow();
        for (key in show) {
            var cell = row.insertCell();
            var text = document.createTextNode(show[key]);
            cell.appendChild(text);
        }
    }
}

function createTableHead(table, shows) {
    var tHead = table.createTHead();
    var row = tHead.insertRow();
    for (var show of shows) {
        var th = document.createElement("th");
        var text = document.createTextNode(show);
        th.appendChild(text);
        row.appendChild(th);
    }
}

var table = document.querySelector("table");
//console.log(table);
var showKeys = Object.keys(shows[0]);

// function invocation
createTable(table, shows); // actually pass the students array
//createTableHead(table, showKeys);