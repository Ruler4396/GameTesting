// 从HTML文件中获取元素
function getElement(id) {
    return document.getElementById(id);
}
var Scissor = getElement("Scissor"),
    Chopper = getElement("Chopper"),
    Bamboo = getElement("Bamboo"),
    BambooTube = getElement("BambooTube"),
    Fabric = getElement("Fabric"),
    Silk = getElement("Silk"),
    Back = getElement("Back"),
    ArrowBamboo = getElement("ArrowBamboo"),
    ArrowFabric = getElement("ArrowFabric"),
    CutBamboo = getElement("CutBamboo"),
    CutFabric = getElement("CutFabric");

/**  
 * 防止拖动鼠标时的默认行为，
 * ondragover事件检测对象与另一个元素是否重合
 */
Bamboo.ondragover = function(event) {
    event.preventDefault(); 
}
Fabric.ondragover = function(event) {
    event.preventDefault(); 
}

// 获取拖动元素的ID，
function startDrag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

//检测元素是否重合、ID是否符合要求并行动
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

// 场景切换按钮
{
function switchScene(show, hide) {
  show.style.display = "block";
  hide.style.display = "none";
}
ArrowFabric.addEventListener("click", function() {
  switchScene(CutBamboo, CutFabric);
});
ArrowBamboo.addEventListener("click", function() {
  switchScene(CutFabric, CutBamboo);
});
}

// 调试用按钮，初始化
Back.addEventListener("click",function(){
    Bamboo.src = "image/Bamboo.png";
    Fabric.src = "image/Fabric.png";
    BambooTube.style.display = "none"; 
    Silk.style.display = "none";
    CutBamboo.style.display = "block";
    CutFabric.style.display = "none";
});