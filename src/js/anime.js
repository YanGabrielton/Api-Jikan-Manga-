// Função para buscar os animes da API do Jikan
async function fetchAnimes() {
  try {
    // Fazendo a requisição à API do Jikan
    const response = await fetch('https://api.jikan.moe/v4/anime');
    
    // Verificando se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao buscar os animes');
    }

    // Convertendo a resposta para JSON
    const data = await response.json();

    // Pegando o elemento da lista onde os animes serão exibidos
    const animeList = document.getElementById('mainAnimes');

    // Iterando sobre os animes e criando os elementos <li> para cada um
    data.data.forEach(anime => {
      const listItem = document.createElement('li');
      listItem.classList.add('anime-item'); // Classe para cada item da lista

      // Estrutura do anime sendo inserida dinamicamente
      listItem.innerHTML = `
      <div class="MainAnime">
        <div class="anime">
          <img src="${anime.images.jpg.image_url}" alt="${anime.title}" width="100">
          <div class="anime-info">
            <h3>${anime.title}</h3>
            <span class="rating">${anime.score}</span> <!-- Adicionando a nota do anime -->
          </div>
          <div class="descricao">
            <p>${anime.synopsis}</p> <!-- Descrição do anime -->
          </div>
        </div>
      </div>
      `;

      // Adicionando o item à lista de animes
      animeList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Erro ao carregar os dados: ', error);
  }
}

// Chamando a função para buscar os animes quando a página carregar
fetchAnimes();
