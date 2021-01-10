const { getPessoas } = require('./service')

async function main() {
  try {
    const { results } = await getPessoas('a')

    const familyLars = results.filter(pessoa => {
      /*
        1 - toLowerCase: Letras maiusculas.
        2 - indexOf: Buscar uma informação dentro do array.
        3 - Não encontrou -1, encontrou na posiçao do array.
      */
      const result = pessoa.name.toLowerCase().indexOf('lars') !== -1
      return result
    })

    const names = familyLars.map(pessoa => pessoa.name)
    console.log('Names: ', names)
  } catch (error) {
    console.error('Error found', error)
  }
}

main()