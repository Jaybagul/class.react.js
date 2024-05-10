function fetchdata() {
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
        .then((res) => res.json())
        .then((data) => cardlist(data.data.regional))
        .catch((err) => console.log(err))
}

fetchdata();

function cardlist(data) {
    console.log(data)
    let store = data.map((el)=>singlecard(el.loc,el.confirmedCasesIndian,el.confirmedCasesForeign,el.discharged,el.deaths));
    document.getElementById("contain").innerHTML = store.join('');
}

function singlecard(loc, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths) {
    const totalConfirmed = confirmedCasesIndian + confirmedCasesForeign;
   
    let card = ` 
<div class="card" style=" background-color: transparent;">
    <h2>location:${loc}</h2>
    <p>Confirmed Cases Indian: ${confirmedCasesIndian}</p>
    <p>Confirmed Cases Foreign: ${confirmedCasesForeign}</p>
    <p>Discharged: ${discharged}</p>
    <p>Deaths: ${deaths}</p>
    <p class="para">Total Confirmed: ${totalConfirmed}</p>
</div>
`;
    return card;
}
