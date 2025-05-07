document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cardsContainer");
  
    // Simulación de datos de signos
    const signs = [
      {
        word: "Hola",
        image_url: "https://www.handspeak.com/word/h/hola.jpg",
        description: "Signo para 'Hola'."
      },
      {
        word: "Gracias",
        image_url: "https://www.handspeak.com/word/g/gracias.jpg",
        description: "Signo para 'Gracias'."
      },
      {
        word: "Por favor",
        image_url: "https://www.handspeak.com/word/p/porfavor.jpg",
        description: "Signo para 'Por favor'."
      },
      {
        word: "Amigo",
        image_url: "https://www.handspeak.com/word/a/amigo.jpg",
        description: "Signo para 'Amigo'."
      },
      {
        word: "Familia",
        image_url: "https://www.handspeak.com/word/f/familia.jpg",
        description: "Signo para 'Familia'."
      }
    ];
  
    signs.forEach(sign => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const img = document.createElement("img");
      img.src = sign.image_url;
      img.alt = `Signo de ${sign.word}`;
  
      const title = document.createElement("h3");
      title.textContent = sign.word;
  
      const desc = document.createElement("p");
      desc.textContent = sign.description;
  
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      cardsContainer.appendChild(card);
    });
  });
  