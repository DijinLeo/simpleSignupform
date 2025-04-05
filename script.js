function clickSubmitButton(event){
    event.preventDefault();
    const username=document.getElementById("username").value;
    const welcomeMessage= document.getElementById("welcome-message");
    welcomeMessage.textContent ="Welcome, your details have been saved";

    welcomeMessage.style.display="block";
}