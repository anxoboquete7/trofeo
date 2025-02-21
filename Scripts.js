fetch('dataA.json')
  .then(response => response.json())
  .then(data => {
    const animeListContainer = document.getElementById('anime-list');

    // Iterar sobre los datos y crear los artículos dinámicamente
    data.forEach(anime => {
      const article = document.createElement('article');

      const img = document.createElement('img');
      img.src = anime.img; // Usa la clave 'img' para la imagen
      img.alt = anime.alt; // Usa la clave 'alt' para el texto alternativo

      const h2 = document.createElement('h2');
      h2.textContent = anime.title; // Usa la clave 'title' para el título

      const p = document.createElement('p');
      p.textContent = anime.description; // Usa la clave 'description' para la descripción

      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(p);

      animeListContainer.appendChild(article);
    });
  })
  .catch(error => console.error('Error al cargar los datos:', error));

  fetch('dataV.json')
  .then(response => response.json())
  .then(data => {
    const animeListContainer = document.getElementById('games-list');

    // Iterar sobre los datos y crear los artículos dinámicamente
    data.forEach(anime => {
      const article = document.createElement('article');

      const img = document.createElement('img');
      img.src = anime.img; // Usa la clave 'img' para la imagen
      img.alt = anime.alt; // Usa la clave 'alt' para el texto alternativo

      const h2 = document.createElement('h2');
      h2.textContent = anime.title; // Usa la clave 'title' para el título

      const p = document.createElement('p');
      p.textContent = anime.description; // Usa la clave 'description' para la descripción

      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(p);

      animeListContainer.appendChild(article);
    });
  })
  .catch(error => console.error('Error al cargar los datos:', error));

  fetch('dataP.json')
  .then(response => response.json())
  .then(data => {
    const animeListContainer = document.getElementById('film-list');

    // Iterar sobre los datos y crear los artículos dinámicamente
    data.forEach(anime => {
      const article = document.createElement('article');

      const img = document.createElement('img');
      img.src = anime.img; // Usa la clave 'img' para la imagen
      img.alt = anime.alt; // Usa la clave 'alt' para el texto alternativo

      const h2 = document.createElement('h2');
      h2.textContent = anime.title; // Usa la clave 'title' para el título

      const p = document.createElement('p');
      p.textContent = anime.description; // Usa la clave 'description' para la descripción

      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(p);

      animeListContainer.appendChild(article);
    });
  })
  .catch(error => console.error('Error al cargar los datos:', error));

  f// Definir la función global para contar elementos de un JSON
function contarElementosPlatino(jsonFile, countId) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const countContainer = document.getElementById(countId);

      if (!countContainer) {
        console.error(`Error: No se encontró el contenedor con ID ${countId}`);
        return;
      }

      // Mostrar la cantidad de elementos
      countContainer.textContent = `Total de platinos: ${data.length}`;
    })
    .catch(error => console.error(`Error al cargar los datos de ${jsonFile}:`, error));
}

  
function contarElementosAnime(jsonFile, countId) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const countContainer = document.getElementById(countId);

      if (!countContainer) {
        console.error(`Error: No se encontró el contenedor con ID ${countId}`);
        return;
      }

      // Mostrar la cantidad de elementos
      countContainer.textContent = `Total de animes vistos: ${data.length}`;
    })
    .catch(error => console.error(`Error al cargar los datos de ${jsonFile}:`, error));
}
