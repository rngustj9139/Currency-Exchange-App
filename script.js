let currencyRatio = { // 환율 정보 객체 (USD TO KRW으로 구글 검색하기)
    USD : {
        KRW : 1303.28,
        USD : 1,
        VND : 23340.00,
        unit : "달러"
    },
    KRW : {
        KRW : 1,
        USD : 0.00077,
        VND : 17.91,
        unit : "원"
    },
    VND : {
        KRW : 0.056,
        USD : 0.000043,
        VND : 1,
        unit : "동"            
    }
};

// console.log(currencyRatio.USD.unit);
// console.log(currencyRatio['USD']['unit']);

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a")
            .forEach(menu => menu.addEventListener("click", function() {
                document.getElementById("from-button").textContent = this.textContent; // this는 드롭박스 메뉴중 내가 선택한 것을 말한다 ex) KRW               
                
                fromCurrency = this.textContent; 
                convert(); // USD => KRW을 이용하다가 VND => KRW으로 바뀌면 환전을 다시 한다.
            })); // querySelectorAll : HTML 요소들을 가지고오는 선택자

document.querySelectorAll("#to-currency-list a")
            .forEach(menu => menu.addEventListener("click", function() {
                document.getElementById("to-button").textContent = this.textContent; // this는 드롭박스 메뉴중 내가 선택한 것을 말한다 ex) KRW               
    
                toCurrency = this.textContent;
                convert(); // USD => KRW을 이용하다가 USD => VND으로 바뀌면 환전을 다시 한다.
            })); // querySelectorAll : HTML 요소들을 가지고오는 선택자

function convert() {
    // 환전 => 1.얼마를 환전? 2.가지고 있는 돈이 어느나라 돈인지? 3.바꾸고자 하는 돈이 어느나라 돈인지?
    // 지금 가지고 있는 돈 * 환율 === 환전금액
    let amount = document.getElementById("from-input").value; // input 요소에 얼마를 입력했는지 값을 가져온다.
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    
    console.log(`환전결과: ${convertedAmount}`);
    document.getElementById("to-input").value = convertedAmount;
}


