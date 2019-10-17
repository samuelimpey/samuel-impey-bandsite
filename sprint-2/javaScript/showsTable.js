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
            createTableHeadMobile(showKeys, row);
            let cell = row.insertCell();
            let text = document.createTextNode(show[key]);
            cell.appendChild(text);
            if (key === "date") {
                let element = document.querySelectorAll('td');
                for (i = 0; i < element.length; i++) {
                    if (i % 4 === 0) {
                        element[i].classList.add("show-table__bolded-date");
                    }
                    else if (i % 4 === 3) {
                        element[i].classList.add("button_underline");
                    }
                    else {
                        element[i].classList.add("show-table__values");
                    }
                }
            }

            if (key === "location") {
                let row = table.insertRow();
                let buttoncell = row.insertCell();
                let btn = document.createElement("BUTTON");
                btn.innerHTML = "BUY TICKETS";
                buttoncell.appendChild(btn);
            }
            count++;

        }
    }

} function createTableHeadMobile(shows, row) {
    let variable = count % 3;
    let th = document.createElement("th");
    let text = document.createTextNode(shows[variable].toUpperCase());
    th.appendChild(text);
    row.appendChild(th);
}



let count = 3;
const table = document.querySelector(".show-table");
const tabelTablet = document.querySelector(".show-table-tablet")
const showKeys = Object.keys(shows[0]);

function createTableTablet(table, shows) {
    createTableHeadTablet(table, shows);
    for (var show of shows) {
        let row = table.insertRow();
        for (key in show) {
            let cell = row.insertCell();
            let text = document.createTextNode(show[key]);
            cell.appendChild(text);
            if (key === "date") {
                let element = document.querySelectorAll('td');
                for (i = 0; i < element.length; i++) {
                    if (i % 4 === 0) {
                        element[i].classList.add("show-table__bolded-date");
                    }
                }
            }

            if (count % 3 === 2) {
                let buttoncell = row.insertCell();
                let btn = document.createElement("BUTTON");
                btn.innerHTML = "BUY TICKETS";
                buttoncell.appendChild(btn);
            }
            count++;

        }
    }
    let element = document.querySelector('thead tr');
    element.classList.add("show-table-tablet__table--headers");
}
function createTableHeadTablet(table, shows) {
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (index = 0; index < 3; index++) {
        let th = document.createElement("th");
        let text = document.createTextNode(showKeys[index].toUpperCase());
        th.appendChild(text);
        row.appendChild(th);
    }
}

createTableMobile(table, shows);
createTableTablet(tabelTablet, shows);


// function createTableDesktop(table, shows) {
//     for (var show of shows) {

//         for (key in show) {

//             let row = table.insertRow();
//             let cell = row.insertCell();
//             let text = document.createTextNode(show[key]);
//             cell.appendChild(text);
//             if (key === "date") {
//                 let element = document.querySelectorAll('td');
//                 console.log(element);
//                 for (i = 0; i < element.length; i++) {
//                     if (i % 4 === 0) {
//                         element[i].classList.add("bolded-date");
//                     }
//                 }
//             }

//             if (count % 3 === 2) {
//                 let row = table.insertRow();
//                 let buttoncell = row.insertCell();
//                 let btn = document.createElement("BUTTON");
//                 btn.innerHTML = "BUY TICKETS";
//                 buttoncell.appendChild(btn);
//             }
//             count++;

//         }
//     }

// } function createTableHeadDesktop(table, shows) {
//     var tHead = table.createTHead();
//     var row = tHead.insertRow();
//     for (var show of shows) {
//         var th = document.createElement("th");
//         var text = document.createTextNode(show);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }