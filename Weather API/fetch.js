function fetchdata() {
    fetch("http://localhost:3000/data")
        .then((res) => res.json())
        .then((data) => Cardlist(data))
        .catch((err) => console.log(err));
}

fetchdata();

function Cardlist(data) {
    const store = data.map((el) => SingleCard(el.avatar, el.first_name, el.last_name, el.email));
    document.getElementById("weather").innerHTML = store.join("");
}

function SingleCard(avatar, first_name, last_name, email) {
    let card = `
    <div class="card mb-3 m-auto" style="max-width: 540px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;         ">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${avatar}" class="img-fluid rounded-start" alt="${first_name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${first_name} ${last_name}</h5>
                    <p class="card-text">Email: ${email}</p>
                </div>
            </div>
        </div>
    </div>`;
    return card;
}
