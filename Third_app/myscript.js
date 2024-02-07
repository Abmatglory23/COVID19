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
    if ( india_stat.new_cases = " " ) {
        new_cases.innerHTML = 0 
    }
    else {
        new_cases.innerHTML = india_stat.new_cases; 
    }   
   
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

// Fetch the state wise cases for India

fetch("https://covid19india.p.rapidapi.com/getIndiaStateData", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid19india.p.rapidapi.com",
		"x-rapidapi-key": "e561511c78msh5371fea55e4600fp1a7e53jsn90ee4f2deb17"
	}
})
.then(response => response.json().then( data => {
    console.log("Inside Fetch 2");
    console.log(data);
    let india_State_Data = data.response;
    console.log("we are here");
    console.log(india_State_Data[0]);
    
    // Find a <table> element with id="idTStateWise":
    var table = document.getElementById("idTStateWise");

    for(let i = 0; i< india_State_Data.length;i++){
        console.log("Inside for loop");
        console.log(i);
        console.log(india_State_Data[i].active);
        
        // Create an empty <tr> element and add it to the 1st position of the table:
         let table_row = table.insertRow(i+1);

         // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        let state_name                  = table_row.insertCell(0);
        let total_state_confirmed_cases = table_row.insertCell(1);
        let total_state_active_cases    = table_row.insertCell(2);
        let total_state_recovered_cases = table_row.insertCell(3);
        let total_state_death_cases     = table_row.insertCell(4);  
     
        // Add some text to the new cells:
       
        state_name.innerHTML = india_State_Data[i].name ; 

        total_state_confirmed_cases.innerHTML = india_State_Data[i].confirmed ;

        total_state_active_cases.innerHTML = india_State_Data[i].active ;
       
        total_state_recovered_cases.innerHTML = india_State_Data[i].recovered ;

        total_state_death_cases.innerHTML = india_State_Data[i].deaths ;

        
    }
})).catch(err => {
    console.log(err);
});




