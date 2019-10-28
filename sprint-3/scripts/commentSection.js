
// old key 4ca5e4fe-ddf2-4c8f-8b8e-8d2b3b171922
// new key 9b6f169a-3639-47f9-b95b-939ba1bb009f

const commentSection = document.getElementById("comment-section");
const commentContainer = document.getElementById("comments");

function getComments() {
    axios.get("https://project-1-api.herokuapp.com/comments?api_key=9b6f169a-3639-47f9-b95b-939ba1bb009f")
        .then((response) => {
            createComments(response.data);
        });
}



function createComments(comments) {
    let commentMainContainer = document.createElement("div");
    commentMainContainer.setAttribute("id", "main-container");
    commentContainer.appendChild(commentMainContainer);
    for (let i = comments.length - 1; i >= 0; i--) {
        let newCommentContainer = document.createElement("div");
        newCommentContainer.className = "new-comment";
        let head = document.createElement("h4");
        head.className = "new-comment--name";
        let userComment = document.createElement("p");
        userComment.className = "new-comment--comment";
        let date = document.createElement("h5");
        date.className = "new-comment--date";
        let avatar = document.createElement("img");
        avatar.src = "assets/Images/avatar.jpg"
        avatar.className = "new-comment--avatar";
        newCommentContainer.appendChild(avatar);
        let text = document.createTextNode(comments[i].name);
        head.appendChild(text);
        newCommentContainer.appendChild(head);
        let day = comments[i].timestamp;
        let time = new Date();
        day = time.getMonth() + 1 + "/" + time.getDate() + "/" + time.getFullYear();
        day = document.createTextNode(day);
        date.appendChild(day);
        newCommentContainer.appendChild(date);
        let user = document.createTextNode(comments[i].comment);
        userComment.appendChild(user);
        newCommentContainer.appendChild(userComment);
        commentMainContainer.appendChild(newCommentContainer);
    }
}



commentSection.addEventListener("submit", (event) => {

    event.preventDefault();

    let name = event.target.name.value;
    let comment = event.target.comment.value;

    let object = {
        name: name,
        comment: comment,
    }

    axios.post("https://project-1-api.herokuapp.com/comments?api_key=9b6f169a-3639-47f9-b95b-939ba1bb009f", object).then((response) => {
        remove();
        console.log(response.data)
    });

    setTimeout(function () { getComments(); }, 125);
    commentSection.reset();
    count++;
});

function remove() {
    let del = document.getElementById("comments");
    del.removeChild(del.childNodes[0]);
}

getComments();