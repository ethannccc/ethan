function runaway(id) {
    id.style.top = Math.round(Math.random() * 150) - 100 + 'px';
    id.style.left = Math.round(Math.random() * 150) - 200 + 'px';
}

let noButton = document.getElementById("no");
noButton.addEventListener("click", function() {
    let image = document.querySelector("img");
    let text = document.querySelector("h1");
    image.src = "https://media2.giphy.com/media/mAJj3GMb0urNTj18tT/source.gif";
    text.textContent = "YOU HATE ME! :(";
});