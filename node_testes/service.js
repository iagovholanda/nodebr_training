const { get } = require('axios')
const URL = `https://swapi.dev/api/people`

async function getPessoas(name) {
  const url = `${URL}/?search=${name}&format=json`
  const result = await get(url)
  console.log(result.data)
  return result.data.results.map(mapPessoas)
}

/* 
  Função que vai nos retornar apenas as informações no qual desejamos
  para passar nos tests. 
*/
function mapPessoas (item) {
  return {
    nome: item.name,
    peso: item.height
  }
}

module.exports = { getPessoas }