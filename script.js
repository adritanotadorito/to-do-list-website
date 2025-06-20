const input = document.getElementById("input");
const output= document.getElementById("output");

input.addEventListener("keydown", (event_) =>{
    if(event_.key === "Enter"){
        const text = input.value.trim();
        if(text !== ""){
            let strikeButton = document.createElement("button");
            strikeButton.textContent = "✅";
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            let editButton = document.createElement("button");
            editButton.textContent = "📝";

            const newLine = document.createElement("li");
            newLine.textContent = text;

            //Adding new tasks
            output.appendChild(newLine);
            newLine.append(" ", strikeButton, " ", deleteButton, " ", editButton);
            input.value = ""; //clear input


            //Striking through tasks that have been completed
            let currMode = "none"
            strikeButton.addEventListener("click", (e)=>{
                if(currMode === "none"){
                    currMode = "line-through";
                    e.target.parentElement.style.textDecoration = "line-through";
                }else {
                    currMode = "none";
                    e.target.parentElement.style.textDecoration = "none";
                }
            });

            //Deleting Tasks
            deleteButton.addEventListener("click", (e)=>{
                e.target.parentElement.remove();
            });

            //Editing Tasks
            editButton.addEventListener("click", (e)=>{
                let parentElement = e.target.parentElement;
                let userprompt = prompt("edit task:");
                if(userprompt !== ""){
                    parentElement.childNodes[0].nodeValue = userprompt;

                    e.target.parentElement.appendChild(strikeButton);
                    e.target.parentElement.appendChild(deleteButton);
                    e.target.parentElement.appendChild(editButton);
                }

            });

        }
    }
});

//Deleting all tasks
let body = document.querySelector("body");
let deleteAllButton = document.createElement("button");
deleteAllButton.innerText= "Clear All !!";
deleteAllButton.classList.add("button")
body.appendChild(deleteAllButton);
deleteAllButton.addEventListener("click", (event__)=>{
    output.remove();
});

