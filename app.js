//var Emitter = require('./emitter');
var Emitter = require('events'); //En vez de inyectar la dependencia de nuestro 'event emitter', inyectamos la dependencia del 'event emitter' propio de NODE JS en la cual hace más robusto el Emitter ya que su constructor abarca más parámetros como el total de eventos, el máximo de escuchas de eventos y los eventos que contiene.
var Config = require('./config'); //Esta dependcia nos ayuda a tener un "mapa" de las variables en string que teníamos para así tenerlas en un solo lugar en nuestro código y así podemos referirnos al string mediante la notación del punto sin necesidad de repetir el string varias veces.

var config = Config;
var emtr = new Emitter();

emtr.on(config.events.GREET, () => {    
    console.log('Somewhere, someone said hello.');
});
//Con esta notación nos permite acceder a una variable que se encuentra en otra dependencia en un grupo en específico. En este caso se guarda la función en el evento 'GREET'.
emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});
//Con esta notación nos permite acceder a una variable que se encuentra en otra dependencia en un grupo en específico. En este caso se guarda la función en el evento 'JUMP'.

console.log(emtr); 
emtr.emit('jump'); 
