var cityPop = [ //create data for table
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

function createTable(){
//create a table element
	var table = document.createElement("table");
	//create a header row
	var headerRow = document.createElement("tr");
	//add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	//add the header row
	table.appendChild(headerRow);

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }
	
	document.querySelector("#mydiv").appendChild(table); //add table to mydiv section

	addColumns(cityPop); //run func to add in third column
}

function addColumns(cityPop){
    document.querySelectorAll("tr").forEach(function(row, i){ //find the header row
    	if (i == 0){
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>'); //add City Size to header
    	} else { //set row val for new col  depending on the following thresholds
    		var citySize;
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};
			toInsert = '<td>' + citySize + '</td>'
			row.insertAdjacentHTML('beforeend',toInsert); //insert val in row/col
    	};
    });
};

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		//build up a random string with rgb values
		var color = "rgb(";	
		for (var i=0; i<3; i++){
			var random = Math.round(Math.random() * 255);
			color += random;
			if (i<2){
				color += ",";
			} else {
				color += ")"	
			};
		};
		document.querySelector("table").style.color = color; //set table color to str composed above
		console.log(document.querySelector("table").style.color)
	});

	function clickme(){ //alerts upon click

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme) //implements above func
};

function initialize(){ //functions run on page
	createTable();
	addEvents();
};

window.onload = initialize();
