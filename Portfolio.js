const text = " Aspiring Software Engineer | Problem Solver";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}
typing();


const projects = [
{
title:"Microfinance Web App",
desc:"Full system using Java MVC & REST API.",
img:"https://picsum.photos/300/200?1",
link:"#"
},
{
title:"Sorting Visualizer",
desc:"Visualizes sorting algorithms step by step.",
img:"https://picsum.photos/300/200?2",
link:"#"
},
{
title:"Portfolio Website",
desc:"Personal responsive portfolio using HTML, CSS, JS.",
img:"https://picsum.photos/300/200?3",
link:"#"
}
];

const container = document.getElementById("projectContainer");

projects.forEach(p => {
let card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<img src="${p.img}">
<h3>${p.title}</h3>
<p>${p.desc}</p>
<a href="${p.link}">View Project</a>
`;

container.appendChild(card);
});


document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let subject = document.getElementById("subject").value.trim();
let message = document.getElementById("message").value.trim();

let valid = true;

if(name === ""){
document.getElementById("nameError").innerText="Name required";
valid=false;
}else document.getElementById("nameError").innerText="";

if(email === "" || !email.includes("@")){
document.getElementById("emailError").innerText="Valid email required";
valid=false;
}else document.getElementById("emailError").innerText="";

if(subject === ""){
document.getElementById("subjectError").innerText="Subject required";
valid=false;
}else document.getElementById("subjectError").innerText="";

if(message === ""){
document.getElementById("messageError").innerText="Message required";
valid=false;
}else document.getElementById("messageError").innerText="";

if(valid){
alert("Message sent successfully!");
}
});


const toggle = document.getElementById("modeToggle");

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
}

toggle.onclick = function(){
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}
};


const topBtn = document.getElementById("scrollTop");

window.onscroll = function(){
if(document.documentElement.scrollTop > 200){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
};

topBtn.onclick = function(){
window.scrollTo({top:0, behavior:"smooth"});
};