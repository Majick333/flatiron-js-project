function commentForm(message_iid) {

    const commentForm = document.getElementById('comment-form');

    commentForm.innerHTML +=
        `
    <form>
        <strong> Reply to Message </strong> <br>
        <label> Your Name:</label><input type="text" id="replyUsername" placeHolder ="Anonymous"> <br>
        <label> Reply:</label> <input type="text" id="replyContent"> <br>
        <input type="submit" value="Send">
        <button onclick="closeComment(); return false;">Close</button
    </form>
    `

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let replyUsername = document.getElementById('replyUsername').value;
        replyUsername.defaultValue = "Anonymous";

        let replyContent = document.getElementById('replyContent').value;

        let reply = {
            username: replyUsername,
            content: replyContent,
            message_id: message_iid
        }

        fetch(`${BASE_URL}/comments`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reply)

            }

        )

        console.log("reply submitted", message_iid);
        //window.location.reload();
        //testFunction();
        refreshComments(message_iid);
    })
}

function closeComment() {
    const commentForm = document.getElementById('comment-form');
    commentForm.innerHTML = ``
}