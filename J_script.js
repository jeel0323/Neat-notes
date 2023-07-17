let submit = document.getElementsByClassName("sub-btn")[0];
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let i = 0;

submit.addEventListener("click", (e) => {
        e.preventDefault();
        if (title.value == "" || description.value == "") {
            alert("Please enter Title and Description both");
        }

        else {
            document.getElementById("your-notes").innerHTML += `<div class="box">
                    <h3 id="title">${title.value}</h3>
                    <p id="description">${description.value}</p>
                    <button id="${i}" class="dlt-btn" onclick="Delete(this.id)" >Delete</button>
                </div>`;
            
            title.value = "";
            description.value = "";
        }
        i++;

});

function Delete(i){
    let deletecard = document.getElementsByClassName("box")[i];
    deletecard.style.display = "none";
}
