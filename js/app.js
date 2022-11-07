function buildTable(data){
// Clears out any existing data
    tbody.html("");
//Loops through each object in data and appends new row with ufo data
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
//loop through each data row and adds value to table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
     );
        
    });

};