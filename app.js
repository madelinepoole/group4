function changeUser(user) {
    // Placeholder function for changing the user
    alert(`Switching to ${user}`);
}

function sendDifferentQuery() {
    const queryInput = document.getElementById('differentQueryInput');
    const queryText = queryInput.value.trim();

    if (queryText !== '') {
        const chatContainer = document.querySelector('.chat');
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = queryText;

        chatContainer.appendChild(newMessage);

        // Clear input field
        queryInput.value = '';

        // Scroll to the bottom of the chat
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}
