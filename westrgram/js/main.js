const comments = document.querySelector("#comment_input");
const submitButton = document.querySelector(".btn span");

// 댓글 
submitButton.addEventListener("click", function() {
    const ulbox = document.querySelector(".comments_info.comment_list_ul")
    const liBox =  document.createElement("li");
    const pBox =  document.createElement("p");
    //const spanBox = document.createElement("span");

    pBox.setAttribute("class", "comment_tit");
   //spanBox.setAttribute("class", "user_id");

    //spanBox.innerHTML =user
    pBox.innerHTML = comments.value;
    //pBox.appendChild(spanBox);
    liBox.appendChild(pBox);
    ulbox.appendChild(liBox);

    comments.value = "";
    
});

// event 두개를 넣고 function을 따로 빼서 그걸 콜백으로 넣어준다.

//댓글 버튼 disabled
comments.addEventListener("keyup" , function(e) {
    let commentValue = comments.value;

    if(commentValue > 0) {
        submitButton.disabled = false;
        submitButton.style.cursor = "pointer";
        submitButton.style.color = "#1c7ed6";
    } else {
        submitButton.disabled = true;
        submitButton.style.cursor = "default";
        submitButton.style.color = "#bfdffd";
    }
});
