/* 
  0 - Obter um usuário
  1 - Obter o numero de telefone de um usuário a partir do seu ID.
  2 - Obter endereco do usuário por meio do seu ID.
*/

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: 'Iago Holanda',
      nasc_date: new Date()
    })
  }, 1000)
}

function getTelefone(user_id, callback) {
  setTimeout(function () {
    return callback(null, {
      phone: '999999999',
      ddd: '11',
    })
  }, 2000)
}

function getEndereco(user_id, callback) {
  setTimeout(function () {
    return callback(null, {
      street: 'Inacio Mendes',
      number: 2228
    })
  })

}

function returnUser(error, user) {
  console.log('Usuario', user)
}

getUser(function returnUser(error, user) {
  if(error) {
    console.error('Error found.', error)
    return
  }
  getTelefone(user.id,function returnTelefone(error, phone) {
    if(error) {
      console.error('Error found', error)
      return
    }
    getEndereco(user.id,function returnEndereco(error, address) {
      if(error) {
        console.error('Error found', error)
        return
      }

      console.log(`
        Nome: ${user.name},
        Endereco: ${address.street}, ${address.number},
        Telefone: (${phone.ddd}) ${phone.phone} 
      `)
    })
  })
})
