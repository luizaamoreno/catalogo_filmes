const cards = document.querySelector(".cards")

async function buscarFilmes() {
    const resposta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR")
    const dados = await resposta.json()
    const lista_de_filmes = dados.results

    lista_de_filmes.forEach((filme_da_vez) => {
        const novo_card = document.createElement("div")
        novo_card.className = "card"
        novo_card.innerHTML = `
        <div class="card_hover">
            <h3>${filme_da_vez.title}</h3>
            <p>${filme_da_vez.overview}</p>
            
        </div>
        <img class="img_card" src="https://image.tmdb.org/t/p/w500${filme_da_vez.poster_path}" alt="foto do ${filme_da_vez.title}">`
        // <div class="card_infos">
        //     <h2 class="nome_card">Nome: <span class="destaque">${filme_da_vez.title}</span></h2>
        //     <p class="texto_card">Espécie: <span class="destaque">${filme_da_vez.species}</span></p>
        //     <p class="texto_card">Status: <span class="destaque">${filme_da_vez.status}</span></p>
        //     <p class="texto_card">Localização: <span class="destaque">${filme_da_vez.location.name}</span></p>
        // </div>
        // `
        cards.appendChild(novo_card)
    })
}
buscarFilmes()



const nome = document.querySelector(".input_search")


nome.addEventListener("input", async () => {
    const resposta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR${nome.value}`)
    const dados = await resposta.json()
    const lista_de_filmes = dados.results

    container.innerHTML = ""

    lista_de_filmes.forEach((filme_da_vez) => {
        const novo_card = document.createElement("div")
        novo_card.className = "card"
        novo_card.innerHTML = `
        <div class="card_hover">
            <h3>${filme_da_vez.title}</h3>
            <p>${filme_da_vez.overview}</p>
            
        </div>
        <img class="img_card" src="https://image.tmdb.org/t/p/w500${filme_da_vez.poster_path}" alt="foto do ${filme_da_vez.title}">`
        cards.appendChild(novo_card)
    })

})