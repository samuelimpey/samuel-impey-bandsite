// let comments = [
//     {
//         name: "Micheal Lyons",
//         comment:
//             "They blew the roof off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed",
//         date: "12/18/2018"
//     },
//     {
//         name: "Gary Wong",
//         comment:
//             "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I could ride like him one day so I can really enjoy myself",
//         date: "12/12/2018"
//     },
//     {
//         name: "Theodore Duncan",
//         comment:
//             "How can someone be soo good!!! You can tell he lives for this and loves to do it everyday.Every time I see him I get instantly happy! He’s definitely my favorite ever",
//         date: "11/15/2018"
//     }
// ];

const commentSection = document.getElementById("comment-section");
const commentContainer = document.getElementById("comments");
let count = 3;
// const formInput = comment - section.getelementByTagName('input["type = text"]').value;
function getComments() {
    axios.get("https://project-1-api.herokuapp.com/comments?api_key=4ca5e4fe-ddf2-4c8f-8b8e-8d2b3b171922")
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

    axios.post("https://project-1-api.herokuapp.com/comments?api_key=4ca5e4fe-ddf2-4c8f-8b8e-8d2b3b171922", object).then((response) => {
        remove();
        console.log(response.data)
    });

    // console.log(response);
    // addCommentToArray(name, comment);
    setTimeout(function () { getComments(); }, 125);
    commentSection.reset();
    count++;
});

function remove() {
    // console.log("inside remove: " + response.length)
    // for (i = 0; i < count; i++) {
    let del = document.getElementById("comments");
    del.removeChild(del.childNodes[0]);
    // }
}

getComments();