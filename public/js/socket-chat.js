var socket = io();

let params= new URLSearchParams(window.location.search)

if(!params.has('nombre') || !params.has('sala')){
    window.location= 'index.html'
    throw new Error('el nombre y la sala son necesarios')
}

let usuario= {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}   

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrar-chat', usuario, function(resp) {
        console.log('Usuarios conectados ', resp)
    })
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crear-mensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crear-mensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

//escuchar cuando un usuario entra o sale del chat
socket.on('lista-personas', function(personas) {

    console.log('Servidor:', personas);

});

//mensajes provados
socket.on('mensaje-privado', function(mensaje){
    console.log('Privado: ', mensaje)
})