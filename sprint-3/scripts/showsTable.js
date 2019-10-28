const URL = "https://project-1-api.herokuapp.com/showdates?api_key=330199d8-d0d3-43bf-9209-b837266d8e98";
const showTable = document.querySelector(".show-table");

axios.get(URL).then((response) => {
    createTable(response.data)
});

function createTable(table) {
    for (i = 0; i < table.length; i++) {
        console.log("inside for loop");
        let dateHead = document.createElement('h4');
        dateHead.className = "show-table__headers";
        let newShowDiv = document.createElement("div");
        newShowDiv.className = "show-table__container";
        let showDate = document.createElement('h4');
        showDate.className = "show-table__container--date";
        let showVenue = document.createElement('h5');
        showVenue.className = "show-table__container--venue";
        let showLocation = document.createElement('h5');
        showLocation.className = "show-table__container--location";
        let button = document.createElement('button');
        button.className = "show-table__container--button";
        button.innerText = "BUY TICKETS";


        let headDate = document.createElement('h5');
        headDate.className = "show-table__headers";
        headDate.innerHTML = "DATE";

        let headVenue = document.createElement('h5');
        headVenue.className = "show-table__headers";
        headVenue.innerHTML = "VENUE";

        let headLocation = document.createElement('h5');
        headLocation.className = "show-table__headers";
        headLocation.innerHTML = "LOCATION";

        newShowDiv.appendChild(headDate);
        let date = document.createTextNode(table[i].date);
        showDate.appendChild(date);
        newShowDiv.appendChild(showDate);

        newShowDiv.appendChild(headVenue);
        let venue = document.createTextNode(table[i].place);
        showVenue.appendChild(venue);
        newShowDiv.appendChild(showVenue);
        newShowDiv.appendChild(headLocation);
        let location = document.createTextNode(table[i].location);
        showLocation.appendChild(location);
        newShowDiv.appendChild(showLocation);
        newShowDiv.appendChild(button);
        showTable.appendChild(newShowDiv);

    }
}


