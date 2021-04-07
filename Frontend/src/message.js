class Message {
    constructor(username, category, title, content) {
        this.username = username;
        this.category = category;
        this.title = title;
        this.content = content;

    }
}


//triggers showComments
function renderMessages(json) {
    let messageCard = document.getElementById("message-cards")


    //make link to add comment to specific message


    messageCard.innerHTML = '';
    json.forEach(message => {
        const conversation = document.createElement('div');
        let message_iid = message.id;

        conversation.innerHTML =

            `<div class= "message-card">
        ${message.id}<br>
        ${message.title}<br>
        ${message.content}<br>
            <form>
                <strong> Reply to this Message </strong><br>
                <button onclick = "showComments(${message_iid})"> View </button>
            </form>       <br>
        </div>
        `


        messageCard.appendChild(conversation);
    })


}



//read message
function fetchMessages() {
    return fetch(`${BASE_URL}/messages`)
        .then(resp => resp.json())
        .then(json => renderMessages(json));
}


// !PAGE SHOULD REFRESH AFTER NEW MESSAGE IS SUBMITTED
function newMessage() {
    let messageForm = document.getElementById('message-form');

    messageForm.innerHTML +=
        `
    <form>
    <strong> Post a new Message: <strong> <br>
    <label> Username <input type="text" id="username"> </label><br>
    <label> Category <input type="text" id="category"> </label><br>
    <label> Title <input type="text" id="title"> </label><br>
    <label> Your Message <input type="text" id="content"> </label><br> <br>
    <input type="submit" value="Post">
    </form>

    `

    messageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('newMessage: --Submit button pressed...');


        let messageUsername = document.getElementById('username').value;
        let messageCategory = document.getElementById('category').value;
        let messageTitle = document.getElementById('title').value;
        let messageContent = document.getElementById('content').value;
        let message = {
            username: messageUsername,
            category: messageCategory,
            title: messageTitle,
            content: messageContent
        }

        fetch(`${BASE_URL}/messages`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
    })
}