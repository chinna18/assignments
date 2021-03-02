var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function (){
	var countrydata = JSON.parse(request.response);
	// Countries from Asia region
	var region = countrydata.filter((item)=>{
		if(item.region === "Asia")
		{
			return item;
		}
	}).map((element)=>{return element.name});
		console.log(region);
	// Countries from Asia region

    // Countries with population less than 2 lakh
     var population = countrydata.filter((item)=>{
		return item.population<200000;
	}).map((element)=>{return element.name});
		console.log(population);	
	// Countries with population less than 2 lakh
	
	//Print name, capital and flag using for each
	var properties = countrydata.forEach((item)=>{console.log(item.name,item.flag,item.capital)});
	//Print name, capital and flag using for each
	
	//Print total population of all countries using reduce method
	var totalpopulation = countrydata.reduce((total,item)=>{return total+item.population},0);
	console.log(totalpopulation);
	//Print total population of all countries using reduce method
	
	//Print the country which uses US Dollar as currency
	var countrycurrency = countrydata.filter((item)=>{
		for(var i in item.currencies)
		{
			if(item.currencies[i].name === "United States Dollar")
		{
			return item;
		}
		}	
	}).map((element)=>{return element.name});
		console.log(countrycurrency);
	//Print the country which uses US Dollar as currency
}
