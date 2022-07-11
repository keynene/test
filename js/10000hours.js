// 쿼리셀렉터로 가져오기
const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

// 각각의 클릭햇을 때의 함수
function calculato() {
    const fieldValue = document.querySelector("#field_value"); //필드 선언(입력값)
    let timeValue = document.querySelector("#time_value"); //시간 선언(입력값)
    let timeValue_int = Number(timeValue.value); // 위에 입력받은 시간을 정수로 바꿈

    const fieldResult = document.querySelector(".field_result"); // 필드 결과값
    const timeResult = document.querySelector(".time_result"); // 시간 결과값

    //예외처리 = 값을 빈공간으로 두거나, 시간값을 24시간 이상으로 줬을 경우
    if(fieldValue.value == "") {
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if (timeValue.value== "") {
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if (timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    // 정확한 값을 넣었을 때
    setTimeout(function() {  //setTimeout(일정시간 뒤 실행할 함수, 딜레이 할 시간)
        loading.style.display = 'none'; //로딩화면 없앰
        result.style.display = 'flex'; //결과화면 띄움
        fieldResult.innerText = fieldValue.value; //필드결과에 텍스트값을 넣겠다(innerText), 위에서 입력받은 값
        timeResult.innerText = parseInt((10000/timeValue_int),10); //시간값도 마찬가지 , 값을 10000으로 나누고, 10진수로
    }, 1800); //1.8초 뒤에 실행

}

//모달클릭
function openModal() {
    modal.style.display = 'flex';
}

//모달을 닫으면
function closeModal() {
    modal.style.display = 'none';
}

//모달 바깥을 클릭해도 모달이 닫히게 할꺼임
window.onclick = function (event) { //클릭했을 때
    if(event.target == modal) { // 모달 창이 아닌 곳을
        closeModal(); //위 모달 닫는 함수 실행
    }
}

//
function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input'); // tmp값을 가상의 element로 만들고

    
    document.body.appendChild(tmp); // 바디에 추가
    tmp.value = url; // 바디에 url 값을 넣고
    tmp.select(); // 그것을 선택하게 해서
    document.execCommand("copy"); // 카피함
    document.body.removeChild(tmp); //사용했으니 지움

    alert("URL이 복사되었습니다"); 
}


// 쿼리셀렉터로 가져온 것을 클릭햇을 때의 이벤트
shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculato);