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