fetch('data.json')
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
