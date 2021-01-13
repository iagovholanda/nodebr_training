const { 
  deepEqual,
  ok
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

describe('Manipulação de Herois', () => {
  before(async () =>{
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
  })

  it('Listagem/Pesquisa de herois, utilizando arquivos.', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)
    deepEqual(resultado, expected)
  })

  it('Cadastro de herois, utilizando arquivos.', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    /* Cadastrar item no arquivo ja criado. */
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    /* Pegar o id cadastrado e verificar se o mesmo estra presente no arquivo. */
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
    deepEqual(actual, expected)
  })
})