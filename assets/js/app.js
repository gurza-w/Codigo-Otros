const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Le faltaba el . antes de name
const $b = document.querySelector('.blog'); // las clases se seleccionan con . no con #
const $l = document.querySelector('.location'); // location no existe en el index

async function displayUser(username) { // No era una funcion asincrona entonces no se podia usar el await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // No estabamos accediendo a los datos correctamente
  console.log(data); // data no existia
  $n.textContent = `${data.name}`; // data no existia y esta utilizando las comillas simples en lugar de backtick
  $b.textContent = `${data.blog}`; // data no existia y esta utilizando las comillas simples en lugar de backtick
  $l.textContent = `${data.location}`; // data no existia y esta utilizando las comillas simples en lugar de backtick
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // le faltaba el $ al nombre de la variable $n
}

displayUser('stolinski').catch(handleError);