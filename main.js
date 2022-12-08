for(let idNum = 0; idNum < 4; idNum ++) {
    document.getElementById("question-" + idNum).addEventListener("click", function(){
        document.getElementById("answer-" + idNum).classList.toggle("hidden");
        document.getElementById("plus-" + idNum).classList.toggle("hidden");
        document.getElementById("minus-" + idNum).classList.toggle("hidden");
    });

}

