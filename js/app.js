// from data.js
const tableData = data;
// get table references
var tbody = d3.select("tbody");

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

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };
   // Rebuild the table using the filtered data
  buildTable(filteredData);
};
  // Attach a listening event
d3.selectAll("#filter-btn").on("click",handleClick);
  //Build table when the page loads
buildTable(tableData);