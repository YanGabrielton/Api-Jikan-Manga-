// Função para buscar os mangás da API do Jikan
async function fetchMangas() {
    try {
      // Fazendo a requisição à API do Jikan
      const response = await fetch('https://api.jikan.moe/v4/manga');
      
      // Verificando se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro ao buscar os mangás');
      }
  
      // Convertendo a resposta para JSON
      const data = await response.json();
  
      // Pegando o elemento da lista onde os mangás serão exibidos
      const mangaList = document.getElementById('mainManga');
  
      // Iterando sobre os mangás e criando os elementos <li> para cada um
      data.data.forEach(manga => {
        const listItem = document.createElement('li');
        listItem.classList.add('manga-item'); // Classe para cada item da lista
  
        // Estrutura do mangá sendo inserida dinamicamente
        listItem.innerHTML = `
        <div class="MainManga">
          <div class="manga">
            <img src="${manga.images.jpg.image_url}" alt="${manga.title}" width="100">
            <div class="manga-info">
              <h3>${manga.title}</h3>
              <span class="rating">${manga.score}</span> <!-- Adicionando a nota do mangá -->
            </div>
            <div class="descricao">
              <p>${manga.synopsis}</p> <!-- Descrição do mangá -->
            </div>
          </div>
        </div>
        `;
  
        // Adicionando o item à lista de mangás
        mangaList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Erro ao carregar os dados: ', error);
    }
  }
  
  // Chamando a função para buscar os mangás quando a página carregar
  fetchMangas();
