const service = require('./service')

async function main() {
  try {
    const result = await service.getPessoas('a')
    
    const names = result.results.map(pessoa => {
      return pessoa.name
    })

    console.log('Names: ', names)
  } catch (error) {
    console.error('Error Found', error)
  }
}

/* Chamada Função */
main()