document.getElementById("logo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const foto =
      document.getElementById("foto").value || " https://picsum.photos/150";
    const bgColor = document.getElementById("bgColor").value;
    const textColor = document.getElementById("textColor").value;



    console.log(titulo, nacionalidad, foto ,bgColor, textColor);



    const cardContainer = document.getElementById("nuevo-jugador");
    const newcard = document.createElement("div");
    newcard.className="card";
    newcard.style.backgroundColor = bgColor;
    newcard.style.color = textColor;
    newcard.innerHTML = `
  <div class="card-content" style="background-color: ${bgColor};">
    <img src="${foto}" alt="${titulo}">
    <h4>${titulo}</h4>
    <p class="parrafo-jugador">${nacionalidad}</p>
    </div>
  `;
  cardContainer.appendChild(newcard);
    document.getElementById("form").reset();
  });
});

   
    
    
