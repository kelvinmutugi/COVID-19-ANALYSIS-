//API fetch
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53784247femsha09007afa44af8cp193cd1jsn9f06a8a62888',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics', options)
	.then(response => response.json())
	.then(data => {
        console.log(data.response)
       //show table data
const myArray = data.response
function showtable(myArray){
document.getElementById("mytable").innerHTML =`
<tr class="bg-primary text-white fw-bold">
    <td>Continent</td>
    <td>Country</td>
    <td>Cases</td>
    <td>Deaths</td>
    <td>Tests</td>
</tr>
`;
//checking array is empty
if(myArray == ""){
document.getElementById("error").innerHTML = `<span class="text-danger">Not Found</span>`
}
else{
document.getElementById("error").innerHTML = "";
for(let i= 0; i< myArray.length; i++){ document.getElementById("mytable").innerHTML +=
           `<tr>
        <td>${myArray[i].continent}</td>
        <td>${myArray[i].country}</td>
        <td>${myArray[i].cases.total}</td>
        <td>${myArray[i].deaths.total}</td>
        <td>${myArray[i].tests.total}</td>
              </tr>
    `
    }
}
}
// calling show table data method 
showtable(myArray);
//take filtered data array
var newArray =[]
//for search method
document.getElementById("search").addEventListener("keyup",()=>{
    var search = this.value;
    newArray = myArray.filter((val)=>{
    if(val.continent.includes(search) || val.country.includes(search) || val.cases.includes(search)|| val.deaths.includes(search)|| val.tests.includes(search))
    {
    var newObj = {continent :val.continent,country :val.country,cases :val.cases,deaths :val.deaths,tests :val.tests};
    return newObj
    }
    })
    showtable(newArray)
    })
    })
    .catch(error => console.log(error))
	