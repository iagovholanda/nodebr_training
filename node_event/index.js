const EventEmitter = require('events')

class EventIssuer extends EventEmitter {

}

const eventIssuer = new EventIssuer()
const event = 'user: click'
eventIssuer.on(event, function(click) {
  console.log('Usuario Clicou', click)
})

/*

eventIssuer.emit(event, 'Na barra de rolagem')
eventIssuer.emit(event, 'No OK')

let count = 0

setInterval(function() {
  eventIssuer.emit(event, 'Clicks: ' + (count++))
}, 1000)

*/

const stdin = process.openStdin()
function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener('data', function(value) {
    //console.log(`Você digitou: ${value.toString().trim()}`)
    return resolve(value)
    })
  })
}

main().then(function(result) {
  console.log('Resultado: ', result.toString())
})