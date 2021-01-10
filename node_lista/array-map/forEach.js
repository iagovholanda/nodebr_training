const service = require('./service')

async function main() {
  try {
    const result = await service.getPessoas('a')
    const names = [];
    result.results.forEach(function (item) {
      names.push(item.name)
    })

    console.log('Names: ', names)
  } catch (error) {
    console.error('Error Found', error)
  }
}

/* Chamada Função */
main()