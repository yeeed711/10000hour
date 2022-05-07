// js file
const startBtn = document.querySelector(".start__btn");
const gogoBtn = document.querySelector(".gogo__btn");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal__btn");
const shareBtn = document.querySelector(".share__btn");

function startResult() {
    const fieldInput = document.getElementById("field-value");
    const timeInput = document.getElementById("time-value");
    let timeValueInt = Number(timeInput.value);
    const result = document.querySelector(".cont-result");
    const wantText = document.querySelector(".want-result");
    const timeText = document.querySelector(".time-result");
    const loding = document.querySelector(".loding__img");
    console.log(typeof timeValueInt);

    if (fieldInput.value == "") {
        alert("입력값이 없습니다.");
        fieldInput.focus();
        return;
    } else if (timeInput.value == "") {
        alert("시간을 입력해 주세요.");
        timeInput.focus();
        return;
    } else if (timeInput.value > 24 || timeInput.value <= 0) {
        alert("0이상 24이하의 값을 입력해 주세요.");
        return;
    } 

    loding.classList.remove("hidden");
    
    setTimeout(function(){
        loding.classList.add("hidden");
        result.classList.remove("hidden");
        wantText.innerText = fieldInput.value;
        timeText.innerText = parseInt((10000/timeValueInt), 10);
     },1500 );
}

function openModal() {
    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}

function copyUrl() {
    let dummy = document.createElement("input");
    let url = location.href;

    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    alert("URL이 복사되었습니다.")
}

startBtn.addEventListener("click", startResult);
modalBtn.addEventListener("click", closeModal);
gogoBtn.addEventListener("click", openModal);
shareBtn.addEventListener("click", copyUrl);
