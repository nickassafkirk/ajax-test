const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb){
    let xhr = new XMLHttpRequest();
// XMLHttpRequest() is an inbuilt object that JS provides that allows us to consume APIs

xhr.open("GET", baseURL + type + "/");

xhr.send();


// here we're essentially saying if the resource is present at the URL we passed and the states and statuses are as we have specified
// we're going to darget the div with an id of "data" and insert the response text into it.   
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
        }
    // If the ready state is equal to 4 and the status is 200, then what we want to do is use JavaScript to do document.getElementByID() and retrieve our data div.
    // And then we're going to change the innerHTML to be equal to the response text that comes back from our xhr object.
    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`
}

function writeToDocument(type){
    let tableRows = [];
    let el = document.getElementById("data");
    el.innerHTML = " "; //empty string is added eachg time the button is clicked to stop each group of ten items adding to the bottom of the page
    
    getData(type, function(data){
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);
        
        data.forEach(function(item){
           let dataRow = [];

           Object.keys(item).forEach(function(key){
               let rowData = item[key].toString();
               let truncatedData = rowData.substring(0, 15);
               dataRow.push(`<td>${truncatedData}</td>`);
           });
           tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`
    });
}
