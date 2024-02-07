//Decalring the Different Variable and Objects
let new_cases = document.getElementById("idNewCases");
let new_death = document.getElementById("idNewDeath");
let total_death = document.getElementById("idTotalDeath");
let total_recovered = document.getElementById("idTotalRecovery");
let total_cases = document.getElementById("idTotalCase");

// Fetching the Data from the server

//Fetching the World Data

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "e561511c78msh5371fea55e4600fp1a7e53jsn90ee4f2deb17"
	}
})

.then(response => response.json().then( data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;

})).catch(err => {
    console.log(err);
});





