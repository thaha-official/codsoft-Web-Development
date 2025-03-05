function likePost(button) {
    let span = button.querySelector("span");
    span.textContent = parseInt(span.textContent) + 1;
}

function toggleComments(button) {
    let comments = button.parentElement.nextElementSibling;
    comments.style.display = comments.style.display === 'none' ? 'block' : 'none';
}

function addComment(button) {
    let input = button.previousElementSibling;
    let commentList = button.nextElementSibling;
    if (input.value.trim() !== "") {
        let comment = document.createElement("p");
        comment.textContent = input.value;
        commentList.appendChild(comment);
        input.value = "";
    }
}