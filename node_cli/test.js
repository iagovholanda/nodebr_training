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

const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Lanterna Verde',
  poder: 'Anel',
  id: 2
}

describe('Manipulação de Herois', () => {
  /* Antes dele realizar algum teste, ele vai cadastrar um usuario no arquivo json. */
  before(async () =>{
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
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

  it('Remover um heroi por id, utilizando arquivos.', async () => {
    const expected = true
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
    deepEqual(resultado, expected)
  })

  it.only('Atualizar um heroi por id, utilizando arquivos', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Dinheiro'
    }
    
    const novoHeroi = {
      nome: 'Batman',
      poder: 'Dinheiro'
    }

    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoHeroi)
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    deepEqual(resultado, expected)
  })
})