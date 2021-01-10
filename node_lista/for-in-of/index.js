const service = require('./service')

async function main() {
  try {
    const result = await service.getPessoas('a')
    const names = []

    /* For */
    console.time('for') 
    for(let i = 0; i < result.results.length -1; i++) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('for')

    /* ForIn */
    console.time('for-in')
    for(let i in result.results) {
      const pessoa = result. results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('for-in')

    /* ForOf */
    console.time('forOf')
    for(pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('forOf')


    console.log('Nomes: ', names)
  } catch (error) {
    console.error('Error Found', error)
  }
}

/* Chamada Função */
main()