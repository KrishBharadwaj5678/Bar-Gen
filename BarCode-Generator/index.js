let search=document.querySelector("input.search-bar");

let search_btn=document.querySelector("button.barcode-btn");

search_btn.addEventListener("click",()=>{
        let data=search.value;
        if(data.length>=1){
            search.setAttribute("placeholder","");
            JsBarcode("#barcode", data,{
                width: 1.2,
                height: 100,
                displayValue: false
            })
        }
        else{
            search.setAttribute("placeholder","Please Enter Something..");
        }
})