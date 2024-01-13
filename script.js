const buscarEndereco = () => {
  let cep = document.querySelector('#cep').value;

  if(cep.length !== 8){
    alert('CEP inválido!!!')
  }

  let url = `https://viacep.com.br/ws/${cep}/json`;

  fetch(url).then(function(response){
    response.json().then(mostrarDados)
  });
}
const mostrarDados = (data) => {
  let resultado = document.querySelector("#resultado");
  if(data.erro){
    resultado.innerHTML = 
    `
    <h2>CEP não encontrado!!!</h2>
    `

  } else{
    resultado.innerHTML = 
    `
    <h2>Cidade: ${data.localidade}</h2>
    <h2>UF: ${data.uf}</h2>
    <h2>DDD: ${data.ddd}</h2>
    `
  }
}

const apagarResposta = () => {
  resultado.innerHTML = ''
}