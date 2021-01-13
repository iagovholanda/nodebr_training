const { readFile, writeFile } = require ('fs')

const { promisify } = require ('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }

  /* Recebendo os dados do arquivos JSON. */
  async dadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
    return JSON.parse(arquivo.toString())
  }

  async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true
  }

  async cadastrar(heroi) {
    const dados = await this.dadosArquivo()
    const id = heroi.id <= 2 ? heroi.id: Date.now()
    const heroiId = {
      id,
      ...heroi
    }

    const heroiFinal = [
      ...dados,
      heroiId
    ]

    const resultado = await this.escreverArquivo(heroiFinal)
  }

  /* Listando dados de um id expecfico. */
  async listar(id) {
    const dados = await this.dadosArquivo()
    const dadosFiltrados = dados.filter(item => (id ? (item.id === id): true))
    return dadosFiltrados
  }
}

module.exports = new Database()