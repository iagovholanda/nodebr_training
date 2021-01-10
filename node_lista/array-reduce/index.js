const { getPessoas } = require ('./service')

async function main() {
  try {
    const { results } = await getPessoas('a')
    const pesos = results.map(pessoa => parseInt(pessoa.heigth))

    const total = pesos.reduce((anterior, proximo) => {
      return anterior + proximo
    }, 0)

    console.log('Pesos: ', pesos)
    console.log('Total: ', total)

    /* Reduzir a um valor final. */
    const myList = [
      ['Erick', 'Wendel'],
      ['NodeBR', 'Nerdzao']
    ]

    const list = myList.reduce((anterior, proximo) => {
      return anterior.concat(proximo)
    }, [])
    .join(', ')

  } catch (error) {
    console.error('Error Found', error)
  }
}

main()