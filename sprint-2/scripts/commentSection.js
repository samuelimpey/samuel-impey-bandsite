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

const commentContainer = document.getElementsByClassName("comments-container");

const form = document.getElementById("comment-section");
form.addEventListener("submit", submitEvent => {
    // prevent page refresh
    submitEvent.preventDefault();

    let name = event.target.name.value;
    let comment = event.target.comment.value;







}