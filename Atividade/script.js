const key = "648c9e4ef64735fd4b4f0db1222f825f";

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(res => res.json());
    criarCard(dados);
}

function criarCard(dados){
    const container = document.getElementById("container");

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2 class="cidade">${dados.name}</h2>
        <p class="temp">${Math.floor(dados.main.temp)} °C</p>
        <div class="caixa-menor">
            <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png">
            <p class="texto-previsao">${dados.weather[0].description}</p>
        </div>
        <p class="umidade">Umidade: ${dados.main.humidity}%</p>
    `;

    container.appendChild(card);
}

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

function apagarCards(){
    document.getElementById("container").innerHTML = "";
}