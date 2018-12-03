var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
        to: 'jen',
        text: 'Hey. This is Jen.'
      });  
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function (msg) {
    console.log('New message', msg);
});