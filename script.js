let istatus = document.querySelector("h5");
let add = document.querySelector("#add");
let value = true;
add.addEventListener("click", function(){
    if(value === true){
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    add.innerHTML = "remove"
    add.style.color = "black";
    add.style.backgroundColor = "grey";
    value = false
    }else{
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    add.innerHTML = "Add Friend"
    add.style.color = "#fff";
    add.style.backgroundColor = "cadetblue";
    value = true
    }
})
