var shows = [
    { date: "Mon Dec 17 2018", venue: "Ronald Lane", location: "San Francisco, CA" },
    { date: "Tue Jul 18 2019", venue: "Pier 3 East", location: "San Francisco, CA" },
    { date: "Fri Jul 22 2019", venue: "View Loungue", location: "San Francisco, CA" },
    { date: "Sat Aug 12 2019", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { date: "Fri Sep 05 2019", venue: "Moscow Center", location: "San Francisco, CA" },
    { date: "Wed Aug 11 2019", venue: "Pres Club", location: "San Francisco, CA" }
];

function createTableMobile(table, shows) {
    for (var show of shows) {

        for (key in show) {

            let row = table.insertRow();
            createTableHead(showKeys, row);
            let cell = row.insertCell();
            let text = document.createTextNode(show[key]);
            cell.appendChild(text);
            if (key === "date") {
                let element = document.querySelectorAll('td');
                console.log(element);
                for (i = 0; i < element.length; i++) {
                    if (i % 4 === 0) {
                        element[i].classList.add("bolded-date");
                    }
                }
            }

            if (count % 3 === 2) {
                let row = table.insertRow();
                let buttoncell = row.insertCell();
                let btn = document.createElement("BUTTON");
                btn.innerHTML = "BUY TICKETS";
                buttoncell.appendChild(btn);
            }
            count++;

        }
    }
    function createTableHead(shows, row) {
        let variable = count % 3;
        // let tHead = table.createTHead();
        // let row = table.insertRow();
        let th = document.createElement("th");
        let text = document.createTextNode(shows[variable]);
        th.appendChild(text);
        row.appendChild(th);
    }
}




let count = 3;
// let countTwo = 4;
const table = document.querySelector("table");
//console.log(table);
const showKeys = Object.keys(shows[0]);

// function invocation
createTableMobile(table, shows); // actually pass the students array
//createTableHead(table, showKeys);
