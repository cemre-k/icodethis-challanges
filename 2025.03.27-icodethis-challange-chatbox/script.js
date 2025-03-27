//policy visibilty
const policy = document.querySelector(".policy");
const acceptBtn = document.getElementById("accept");

acceptBtn.addEventListener("click",function(){
    policy.style.display= "none";
})



const textIn = document.getElementById("text-input");
const textSendBtn = document.getElementById("send");
const sentMessages = document.querySelector(".message");
const contentDiv = document.querySelector(".content"); 

//cant send if empty

textSendBtn.disabled=true;
textIn.addEventListener("keyup", function () {
    if (textIn.value.trim().length > 0) { 
        textSendBtn.disabled = false;
    } else {
        textSendBtn.disabled = true;
    }
});
//pressing enter sends message
textIn.addEventListener("keydown",function(event){
if(event.key == "Enter" && textIn.value.trim().length > 0){
        textSendBtn.click();
    }
});
//clicking send sends message
textSendBtn.addEventListener("click",function(){
    const newMessage = document.createElement("div");
    newMessage.classList.add("message","sent");

    const newImg = document.createElement("img");
    newImg.src="https://ui-avatars.com/api/?name=D&size=40";
    newImg.alt="user pic"

    const messageText=document.createElement("p");
    messageText.textContent = textIn.value;

    newMessage.appendChild(newImg);
    newMessage.appendChild(messageText);

    contentDiv.appendChild(newMessage);
     
    textIn.value=""
    textSendBtn.disabled=true;

})

// message box toggle

const containerToggleButton = document.getElementById("container-toggle-btn");
const container=document.querySelector(".container");

containerToggleButton.addEventListener("click",function(){
    if(container.style.display!="none"){
        container.style.display="none";
        containerToggleButton.innerHTML = '<i class="fas fa-caret-up"></i>';
    }
    else{
        container.style.display="block";
        containerToggleButton.innerHTML = '<i class="fas fa-caret-down"></i>';
    }
})