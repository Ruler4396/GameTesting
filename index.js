var Scissor = document.getElementById("Scissor"),
    Chopper = document.getElementById("Chopper"),
    Bamboo = document.getElementById("Bamboo"),
    BambooTube = document.getElementById("BambooTube"),
    Back = document.getElementById("Back");

function startDrag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);//拖动某个
}

Bamboo.ondragover = function(event) {
    event.preventDefault(); // 防止默认行为
}

Bamboo.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    if(data === "Chopper") {
        Bamboo.src = "image/Bamboo1.png";
        BambooTube.style.display = "block"; // 显示该元素
    }
}

Back.addEventListener("click",function(){
    Bamboo.src = "image/Bamboo.png";
    BambooTube.style.display = "none"; // 隐藏该元素
});