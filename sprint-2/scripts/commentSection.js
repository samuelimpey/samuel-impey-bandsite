let comments = [
    {
        name: "Micheal Lyons",
        comment:
            "They blew the roof off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed";
        date: "12/18/2018"
    },
    {
        name: "Gary Wong",
        comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I could ride like him one day so I can really enjoy myself"
    },
    {
        name: "Theodore Duncan",
        comment:
            "How can someone be soo good!!! You can tell he lives for this and loves to do it everyday.Every time I see him I get instantly happy! He’s definitely my favorite ever"
    }
];

const commentSection = document.getElementsByID("comment-section")
const commentContainer = document.getElementsByClassName("comments-container");
// const formInput = comment - section.getelementByTagName('input["type = text"]').value;
let count = 0;

function createComments() {
    while (count < comments.length) {
        let newCommentContainer = document.createElement("div");
        let head = document.createElement("h3");
        let userComment = document.createElement('p');
        // let commentDate = document.createElement('p');

        let text = document.createTextNode(comments[count].name);
        head.appendChild(text);
        newCommentContainer.appendChild(head);
        let user = document.createTextNode(comments[count].comment);
        userComment.appendChild(user);
        newCommentContainer.appendChild(userComment);
        commentContainer.appendChild(newCommentContainer);
        count++;

    }
}

createComments();

commentSection.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let comment = event.target.comment.value;
    // let date = 

    function addCommentToArray(name, comment) {
        let x = new Object();
        x.name = name;
        x.comment = comment;
        comments.push(x);
    }
    addCommentToArray(name, comment);
    createComments();
});