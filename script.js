// Dark Mode
document.getElementById("darkToggle").addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

// Scroll Reveal
window.addEventListener("scroll",()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});

// Chat Function
function sendMessage(){
    const input=document.getElementById("chatInput");
    const body=document.getElementById("chatBody");

    if(input.value.trim()==="") return;

    const user=document.createElement("div");
    user.textContent="You: "+input.value;
    body.appendChild(user);

    const bot=document.createElement("div");
    bot.textContent="Mirai Bot: Thank you for your query. We will contact you soon!";
    body.appendChild(bot);

    input.value="";
    body.scrollTop=body.scrollHeight;
}