document.getElementById('movieForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value;
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;

    if (title && year && director && duration && genre && rate && poster) {
        console.log('Todos los campos están completados. Enviando petición POST...');
        const movie = {
            title: title,
            year: year,
            director: director,
            duration: duration,
            genre: genre,
            rate: rate,
            poster: poster
        };

        console.log('Datos de la película:', movie);

        // Realizar la solicitud POST
        fetch('http://localhost:3000/createMovies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
        .then(response => {
            if (response.ok) {
                console.log('Película creada con éxito.');
            } else {
                console.error('Error al crear la película:', response.statusText);
                alert('Ocurrió un error al crear la película. Por favor, inténtalo de nuevo más tarde.');
            }
        })
    } else {
        alert('Por favor, complete todos los campos antes de enviar el formulario.');
    }

});