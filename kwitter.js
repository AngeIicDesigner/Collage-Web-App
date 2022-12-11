function navigate()
{
    user_name=document.getElementById("textinput_user").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";

}