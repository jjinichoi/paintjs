const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d');
//Context는 canvas 안에서 픽셀들을 컨트롤하는 역할
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");
const clear = document.getElementById("jsClear");

const INITIAL_COLOR = "2c2c2c";
const CANVAS_SIZE = 700;

// 픽셀을 다루는 윈도우의 크기를 입력
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

//처음 기본배경 설정(투명으로 할거면 삭제)
ctx.fillStyle = "#fff";
//처음 기본배경 설정(투명으로 할거면 삭제)
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 

ctx.strokeStyle = INITIAL_COLOR; // 선들의 기본 색을 지정
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5; //선 너비 지정 px 

let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){ //클릭하지 않고 마우스를 움직였을 떄 
        ctx.beginPath(); //선 경로 생성
        ctx.moveTo(x, y); //path를 만들면 마우스의 xy좌표로 path를 옮김
        /** 마우스를 움직이는 모든 순간에  path를 만드는 것임 
         * 그렇기에 클릭했을때 마우스가 있는 지점부터 생성이 가능한 것
         * (path의 시작점은 내 마우스가 있는 곳) */
    }else{ //이건 마우스를 움직이는 내내 발생한다.
        ctx.lineTo(x, y); //path의 이 전 위치에서 지금 위치까지 선을 만듬
        ctx.stroke();//현재의 sub-path를 현재의 stroke style로 획을 그음
    }
}


function handleColorClick(event){
    const bgColor = event.target.style.background;
    ctx.strokeStyle = bgColor;
    ctx.fillStyle = bgColor;
}

function handleRangeChange(event){
    const brushSize = event.target.value;
    ctx.lineWidth = brushSize;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint"
    }
}

function handleCanvasClick(){
    if(filling){
        //width와 height에 의해서 결정된 사이즈로 (x, y)위치에 색칠된 사각형을 그림
        //(x, y, width, height)
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 
    }
}

function handleResetClick() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function handleRightClick(event){
    event.preventDefault()
}

// event는 애드이벤터에서 함수를 사용할때만 입력

function handleSaveClick(){
    ctx.
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove); 
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting); //클릭을 때면 painting = false;
    canvas.addEventListener("mouseleave", stopPainting); //cavase에서 마우스가 벗어나면 painting = false;
    canvas.addEventListener("click", handleCanvasClick);//캔버스 색채우기
    canvas.addEventListener("contextmenu", handleRightClick);//우클릭방지
    
}

/**
 * 0. painting = false;
 * 1. 클릭전 mousemove의 if문 실행
 * 2. 클릭(mousedown)하면  startPainting이 실행되면서 
 * 3. painting = true;가 되면서 mousemove의 조건문은 false가 되면서  lineTo, stroke실행되고 선이 그어짐
 * 
 */


    Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColorClick)
);


if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick)
}
if(clear) {
    clear.addEventListener("click", handleResetClick);
}
if(save){
    save.addEventListener("click", handleSaveClick)
}