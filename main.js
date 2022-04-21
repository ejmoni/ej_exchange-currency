let currencyRatio={
    USD:{
        KRW:1234.48,
        USD:1,
        VND:22900.00,
        unit:"달러",
        img:"https://cdn-icons-png.flaticon.com/512/555/555526.png",
    },
    KRW:{
        KRW:1,
        USD:0.00081,
        VND:18.55,
        unit:"원",
        img:"https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
    },
    VND:{
        KRW:0.054,
        USD:0.000044,
        VND:1,
        unit:"동",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
    },
};
//console.log(currencyRatio.USD.unit);

//console.log(currencyRatio['VND']['unit']);

let unitWords = ["", "만", "억", "조", "경"];
let splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let fromCurrency="USD";
let toCurrency="USD";


//document.querySelectorAll("#from-currency-list li").forEach(menu=>menu.addEventListener("click",function(){
     //document.getElementById("from-button").textContent=this.textContent;

//      fromCurrency = this.textContent;
//      fromButton.innerHTML = `<img class="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
//      convert();
//     });
// );
document.querySelectorAll("#from-currency-list li").forEach(function(item){
    item.addEventListener("click",function(){
        fromCurrency = this.id;
        fromButton.innerHTML = `<img class ="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
        convert("from");
    });
});

// document.querySelectorAll("#to-currency-list li").forEach(menu=>menu.addEventListener("click",function(){
//     document.getElementById("to-button").textContent=this.textContent;

//     toCurrency = this.textContent;
//     convert();
// }));

document.querySelectorAll("#to-currency-list li").forEach(function(item){
    item.addEventListener("click",function(){
        toCurrency = this.id;
        toButton.innerHTML = `<img class ="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
        convert("from");
    });
});

// function convert(){
//     let amount = document.getElementById("from-input").value;
//     let convertedAmount = amount*currencyRatio[fromCurrency][toCurrency]
    
//     document.getElementById("to-input").value = convertedAmount;
// };


function convert(type){
    console.log("here");
    let amount = 0;
    if(type == "from"){
       // amount = document.getElementById("from-input").value;
       amount = document.getElementById("fromAmount").value;
    let convertedAmount = amount*currencyRatio[fromCurrency][toCurrency];
        
    //document.getElementById("to-input").value = convertedAmount;
    document.getElementById("toAmount").value = convertedAmount;
    renderKoreanNumber(amount, convertedAmount);
    }else {
       // amount = document.getElementById("to-input").value;
       amount = document.getElementById("toAmount").value;
    let convertedAmount = amount*currencyRatio[toCurrency][fromCurrency];
    //document.getElementById("from-input").value = convertedAmount;
    document.getElementById("fromAmount").value = convertedAmount;
    
    renderKoreanNumber(convertedAmount,amount);
    }
};

function renderKoreanNumber(from,to){
    document.getElementById("fromNumToKorea").textContent = readNum(from)+currencyRatio[fromCurrency].unit;
    document.getElementById("toNumToKorea").textContent = readNum(to)+currencyRatio[toCurrency].unit;
}
function readNum(num){
    let resultString = "";
    let resultArray = [];
    for(let i = 0;i<unitWords.length; i++){
        let unitResult = 
        (num %Math.pow(splitUnit,i +1))/Math.pow(splitUnit,i);
        unitResult =  Math.floor(unitResult);
        if(unitResult>0){
            resultArray[i] = unitResult;
        }
    }
    for(let i = 0; i<resultArray.length; i++){
        if(!resultArray[i]) continue;
        resultString = String(resultArray[i])+unitWords[i]+resultString;
    }
    return resultString;
}