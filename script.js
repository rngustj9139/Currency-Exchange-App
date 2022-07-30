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
            })); // querySelectorAll : HTML 요소들을 가지고오는 선택자


document.querySelectorAll("#to-currency-list a")
.forEach(menu => menu.addEventListener("click", function() {
    document.getElementById("to-button").textContent = this.textContent; // this는 드롭박스 메뉴중 내가 선택한 것을 말한다 ex) KRW               
    
    toCurrency = this.textContent;
})); // querySelectorAll : HTML 요소들을 가지고오는 선택자