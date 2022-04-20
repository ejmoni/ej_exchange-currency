let currencyRatio={
    USD:{
        KRW:1234.48,
        USD:1,
        VND:22900.00,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00081,
        VND:18.55,
        unit:"원"
    },
    VND:{
        KRW:0.054,
        USD:0.000044,
        VND:1,
        unit:"동"
    }
}
//console.log(currencyRatio.USD.unit);

//console.log(currencyRatio['VND']['unit']);

let fromCurrency="USD";
let toCurrency="USD";


document.querySelectorAll("#from-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
     document.getElementById("from-button").textContent=this.textContent;

     fromCurrency = this.textContent;
     convert();
    })
);
document.querySelectorAll("#to-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
    document.getElementById("to-button").textContent=this.textContent;

    toCurrency = this.textContent;
    convert();
}));


function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount*currencyRatio[fromCurrency][toCurrency]
    
    document.getElementById("to-input").value = convertedAmount;
};


