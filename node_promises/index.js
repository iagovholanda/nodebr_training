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
  1 - Para manipular o sucesso da função, utilizamos o .then
  2 - Para manipular erros, usuamos o try/cath.
*/
const userPromise = getUser()

userPromise
.then(function(user) {
  /* Recebeu o telefone. */
  return getPhone(user.id)
  /* Retornou uma nova função com as informações de retorno do usuário e telefone. */
  .then(function resolverPhone(result) {
    return {
      usuario: {
        nome: user.name,
        id: user.id
      },
      telefone: result
    }
  })
  /* Essa vai pegar o ultimo resultado, ou resultado anterior. */ 
  .then(function (result){
    const address = returnAddress(result.usuario.id)
    return address.then(function resolverAddress(address) {
      return {
        usuario: result.usuario,
        telefone: result.telefone,
        endereco: address
      }
    })
  })
})
  .then(function(result) {
    console.log(`
      Nome: ${result.usuario.nome}
      Endereco: ${result.endereco.street}, ${result.endereco.number}
      Telefone: (${result.telefone.ddd}) ${result.telefone.phone}
    `)
  })
  .catch(function(error) {
      console.log('Error found', error)
  })



