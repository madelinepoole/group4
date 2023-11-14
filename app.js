function sendMessage(message) {
    const inputField = document.getElementById('messageInput');
    const messageText = message || inputField.value.trim();

    if (messageText !== '') {
        const chatContainer = document.querySelector('.chat');
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = messageText;

        chatContainer.appendChild(newMessage);

        // Clear input field
        inputField.value = '';

        // Scroll to the bottom of the chat
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}
