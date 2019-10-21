// from data.js
var tableData = data;

// define function to create and assign records to table from data.js using forEach array loop (anonymous)
function WebTable(records) {
  var tbody = d3.select("tbody");
  records.forEach((record) => {var row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {var cell = row.append("td");
      cell.html(value);
    });
  });
};
// display the data
WebTable(tableData);

// clear webpage table
function ClearTable() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// select the filter button on the webpage
var button = d3.select("#filter-btn");

// filter the database and display
button.on("click", function(event) {
  d3.event.preventDefault();
  ClearTable();
  var dateInput = d3.select("#datetime").property("value");
  
  if (dateInput.trim() === "" ) {
    // display all if the input field incorrect data type
    var filteredData = tableData;
  } else {
    // display all data with empty or other input instances (anonymous)
    var filteredData = tableData.filter(record => 
      record.datetime === dateInput.trim());
  };

  // append fun header message alert in the table if no record matches input
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>The truth wasn't out there that time!</h4>");
  };

  console.log(filteredData);
  WebTable(filteredData);
});