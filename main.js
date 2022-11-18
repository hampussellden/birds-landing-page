for(let idNum = 0; idNum < 4; idNum ++) {
    document.getElementById("question-" + idNum).addEventListener("click", function(){
        document.getElementById("answer-" + idNum).classList.toggle("hidden");
    });
}