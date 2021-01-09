/* 
  0 - Obter um usuário
  1 - Obter o numero de telefone de um usuário a partir do seu ID.
  2 - Obter endereco do usuário por meio do seu ID.
*/

/*
  1 - Quando ocorrer algum error, retornamos o reject(error).
  2 - Quando der tudo como sucesso, retornamos o resolver.
*/

const util = require('util');
const returnAddress = util.promisify(getAddress)

function getUser() {
  return new Promise(function returnPromise(resolve, reject){
    setTimeout(function () {
      return resolve({
        id: 1,
        name: 'Iago Holanda',
        nasc_date: new Date()
      })
    }, 1000)
  })
}
 
function getPhone(user_id) {
  return new Promise(function returnPromise(resolve, reject){
    setTimeout(function () {
      return resolve({
        phone: '999999999',
        ddd: '11',
      })
    }, 2000)
  })
}

function getAddress(user_id, callback) {
  setTimeout(function () {
    return callback(null, {
      street: 'Inacio Mendes',
      number: 2228
    })
  })
}

/*
  1 - Adicionar a palavra async, retornando uma promise.

*/ 
main()
async function main() {
  try {
    console.time('medida-promise')
    const user = await getUser()

    const result = await Promise.all([
      getPhone(user.id),
      returnAddress(user.id)
    ])

    const address = result[1]
    const phone = result[0]

    console.log(`
      Nome: ${user.name},
      Telefone: (${phone.ddd}) ${phone.number}
      Endereco: ${address.street}, ${address.number}
    `)

    console.timeEnd('medida-promise')
  } catch (error) {
    console.error('Error found', error)
  }
}