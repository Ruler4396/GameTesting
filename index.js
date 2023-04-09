var Scissor = document.getElementById("Scissor"),
    Chopper = document.getElementById("Chopper"),
    Bamboo = document.getElementById("Bamboo"),
    BambooTube = document.getElementById("BambooTube"),
    Back = document.getElementById("Back");
//从HTML获取对应ID的全局按钮元素

function startDrag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}
// 拖动某个

Bamboo.ondragover = function(event) {
    event.preventDefault(); 
}
Fabric.ondragover = function(event) {
    event.preventDefault(); 
}
// 防止拖动鼠标时的默认行为

Bamboo.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    if(data === "Chopper") {
        Bamboo.src = "image/Bamboo1.png";
        BambooTube.style.display = "block"; // 显示该元素
    }
}

Fabric.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    if(data === "Scissor") {
        Fabric.src = "image/Fabric1.png";
        Silk.style.display = "block"; // 显示该元素
    }
}

// 场景切换
{
var ArrowBamboo = document.getElementById("ArrowBamboo");
var ArrowFabric = document.getElementById("ArrowFabric");
var CutBamboo = document.getElementById("CutBamboo");
var CutFabric = document.getElementById("CutFabric");

ArrowFabric.addEventListener("click",function(){
    CutBamboo.style.display = "block";
    CutFabric.style.display = "none";
});

ArrowBamboo.addEventListener("click",function(){
    CutBamboo.style.display = "none";
    CutFabric.style.display = "block";
});
}

// 调试用，初始化
Back.addEventListener("click",function(){
    Bamboo.src = "image/Bamboo.png";
    BambooTube.style.display = "none"; 
    Silk.style.display = "none";
    CutBamboo.style.display = "block";
    CutFabric.style.display = "none";
});