const commentForm = document.querySelector('.comments_form');
const comments = document.querySelector("#comment_input");
const submitButton = document.querySelector(".btn span");

function commentUpdate() {
        const ulbox = document.querySelector(".comments_info.comment_list_ul")
        const liBox =  document.createElement("li");
        const pBox =  document.createElement("p");
        
        pBox.setAttribute("class", "comment_tit");
        pBox.innerHTML = comments.value;
        liBox.appendChild(pBox);
        ulbox.appendChild(liBox);
        comments.value = "";
};


// keydown시 page reload stop
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
});

submitButton.addEventListener("click",commentUpdate);
comments.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        const ulbox = document.querySelector(".comments_info.comment_list_ul")
        const liBox =  document.createElement("li");
        const pBox =  document.createElement("p");
        
        pBox.setAttribute("class", "comment_tit");
        pBox.innerHTML = comments.value;
        liBox.appendChild(pBox);
        ulbox.appendChild(liBox);
    
        comments.value = "";
    }
});

//댓글 버튼 disabled
comments.addEventListener("keyup" , function(e) {
    let commentValue = comments.value;

    if(commentValue.length > 0) {
        submitButton.disabled = false;
        submitButton.style.cursor = "pointer";
        submitButton.style.color = "#1c7ed6";
    } else {
        submitButton.disabled = true;
        submitButton.style.cursor = "default";
        submitButton.style.color = "#bfdffd";
    }
});
