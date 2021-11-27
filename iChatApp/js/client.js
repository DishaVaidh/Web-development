const socket = io('http://localhost:8000');

const form = document.getElementById("sendcontainer")
const messageInput = document.getElementById("messageInp")
const messagecontainer = document.querySelector(".container")//here we have to put messages

// Audio that will play on receiving messages
var audio = new Audio('ping.mp3');

// Function which will append event info to the contaner
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position =='left'){ 
        audio.play();
    }
}


// Ask new user for his/her name and let the server know
const name1 = prompt("Enter your name to join");
socket.emit('new-user-joined', name1);

// If a new user joins, receive his/her name from the server
socket.on('user-joined', name1 =>{
    append(`${name1} joined the chat`, 'right')
})

// If server sends a message, receive it
socket.on('receive', data =>{
    append(`${data.name1}: ${data.message}`, 'left')
})

// If a user leaves the chat, append the info to the container
socket.on('left', name1 =>{
    append(`${name1} left the chat`, 'right')
})

// If the form gets submitted, send server the message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ''
})