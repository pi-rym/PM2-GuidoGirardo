const contenedorTarjetas = document.getElementById("contenedorTarjetas");

$.get("https://students-api.2.us-1.fl0.io/movies", data => {
    renderCards(data);
})


let i = 0;
function renderCards(pelis){
pelis.map(peli => {
    const tarjeta = document.createElement("a");
    tarjeta.className = "tarjeta";
    if(i == 0) tarjeta.href = "0";
    if(i == 1) tarjeta.href = "1";
    if(i == 2) tarjeta.href = "2";
    i++;

    const tarjetaTitulo = document.createElement("p");
    tarjetaTitulo.className = "tarjetaTitulo";
    tarjetaTitulo.textContent = peli.title;

    const tarjetaImagen = document.createElement("img");
    tarjetaImagen.src = peli.poster;
    tarjetaImagen.className = "tarjetaImagen";

    const tarjetaYear = document.createElement("p");
    tarjetaYear.className = "tarjetaTitulo";
    tarjetaYear.textContent = "Year: " + peli.year;

    const tarjetaDirector = document.createElement("p");
    tarjetaDirector.className = "tarjetaDirector";
    tarjetaDirector.textContent = "Director: " + peli.director;

    const tarjetaDuracion = document.createElement("p");
    tarjetaDuracion.className = "tarjetaDuracion";
    tarjetaDuracion.textContent = "Duration : " + peli.duration;

    const tarjetaGenero = document.createElement("p");
    tarjetaGenero.className = "tarjetaGenero";
    tarjetaGenero.textContent = "Genre : " + peli.genre.join(", ");

    const tarjetaRate = document.createElement("p");
    tarjetaRate.className = "tarjetaRate";
    tarjetaRate.textContent = "Rate : " + peli.rate;
    tarjetaRate.style.color = "yellow";

    tarjeta.appendChild(tarjetaTitulo);
    tarjeta.appendChild(tarjetaImagen);
    tarjeta.appendChild(tarjetaYear);
    tarjeta.appendChild(tarjetaDirector);
    tarjeta.appendChild(tarjetaDuracion);
    tarjeta.appendChild(tarjetaGenero);
    tarjeta.appendChild(tarjetaRate);
    
    contenedorTarjetas.appendChild(tarjeta);
})
}