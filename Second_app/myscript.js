//Decalring the Different Variable and Objects
let new_cases = document.getElementById("idNewCase");
let new_death = document.getElementById("idNewDeath");
let total_death = document.getElementById("idTotalDeath");
let total_recovered = document.getElementById("idTotalRecovery");
let total_cases = document.getElementById("idTotalCase");
let active_cases = document.getElementById("idActiveCase");
let total_case_per_mil = document.getElementById("idTotalCasePerPop");
let serious_critical = document.getElementById("idSeriousCritical");
let record_date = document.getElementById("idlupdt");
let country_code = document.getElementById("idcountry");



// Fetching the Data from the server

//Fetching the World Data

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "e561511c78msh5371fea55e4600fp1a7e53jsn90ee4f2deb17"
	}
})

.then(response => response.json().then( data => {
    console.log("Inside Fetch");
    console.log(data);
    let countries_stat = data.latest_stat_by_country;
    let india_stat = countries_stat[0];
    console.log(india_stat.serious_critical) ;
    console.log("here is go")
    country_code.innerHTML = india_stat.country_name;
    record_date.innerHTML = india_stat.record_date;
    total_cases.innerHTML = india_stat.total_cases;
    new_cases.innerHTML = india_stat.new_cases;
    active_cases.innerHTML= india_stat.active_cases ;
    total_case_per_mil.innerHTML= india_stat.total_cases_per1m ;
    total_death.innerHTML = india_stat.total_deaths;
    total_recovered.innerHTML = india_stat.total_recovered;
    if ( india_stat.new_deaths = " " ) {
        new_death.innerHTML = 0 
    }
    else {
        new_death.innerHTML = india_stat.new_deaths; 
    }   

    if ( india_stat.serious_critical = " " ) {
        serious_critical.innerHTML = 0 
    }
    else {
        serious_critical.innerHTML = india_stat.serious_critical; 
    }   
 
})).catch(err => {
    console.log(err);
});





