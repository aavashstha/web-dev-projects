
document.getElementById("tasks").style.visibility = "hidden";


document.getElementById("add").onclick = function addTask(){
        let input = document.getElementById("input").value;
        input = input.trim();
        if(input !== ""){
                let task = document.createElement("p");
                task.textContent = "✗  " + input;
                task.classList.add("incomplete");
                document.getElementById("tasks").appendChild(task)
                document.getElementById("tasks").style.visibility = "visible";
                }
        document.getElementById("input").value = "";
}


document.getElementById("clearAll").onclick = function clearTasks(){
        document.getElementById("tasks").textContent = "";
}

document.getElementById("input").addEventListener("keydown", event => {
        if(event.key === "Enter"){
                let input = document.getElementById("input").value;
                input = input.trim();
                if(input !== ""){
                let task = document.createElement("p");
                task.textContent = "✗  " + input;
                task.classList.add("incomplete");
                document.getElementById("tasks").appendChild(task);
                document.getElementById("tasks").style.visibility = "visible";
                }
                document.getElementById("input").value = "";
        }
});     


function colorChange(){
        let paragraphs = document.querySelectorAll(".incomplete");
        paragraphs.forEach(paragraph => {
                paragraph.addEventListener("click", event => {
                        if(paragraph.classList.contains("incomplete")){
                                paragraph.textContent = "✔" + paragraph.textContent.slice(1);
                                paragraph.classList.replace("incomplete", "complete")
                        }
                        else if(paragraph.classList.contains("complete")){
                                paragraph.textContent = "✗" + paragraph.textContent.slice(1);
                                paragraph.classList.replace("complete", "incomplete")
                         }

                })
        })
}

setInterval(colorChange, 100);
