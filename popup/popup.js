const button = document.querySelector("button");
const wrong = document.getElementById("wrong");
const popup1 = document.getElementById("popup1");

button.addEventListener('click', function(){
    popup1.style.display="block";
});

wrong.addEventListener('click', function(){
    popup1.style.display="none";
}); 