//var Emitter = require('./emitter');
var Emitter = require('events'); //En vez de inyectar la dependencia de nuestro 'event emitter', inyectamos la dependencia del 'event emitter' propio de NODE JS en la cual hace más robusto el Emitter ya que su constructor abarca más parámetros como el total de eventos, el máximo de escuchas de eventos y los eventos que contiene.

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');
/* En la consola se muestra el mensaje de la línea 13 y se ejecutaron las funciones de la línea 5 y 9, 'Somewhere, someone said hello.' y 'A greeting occurred!'. El método emit permite llamar a las funciones que se encuentra en la variabñe 'emtr'.*/

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr); //Se manda a llamar la variable 'emtr' y en la consola se ve desglozado lo que contiene la variable: 2 eventos, greet y jump; el primero posee dos funciones anónimas, y el segundo solo tiene una función anónima.
emtr.emit('jump'); // Se manda a llamar el evento 'jump' que se encuentra en la variable 'emtr' por el método 'emit' y se muestra en la conola.
