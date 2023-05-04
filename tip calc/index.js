const calcu = document.querySelector("button");
const output = document.querySelector(".output")
calcu.addEventListener("click",function(){
    const tipamount = document.querySelector("input");
    console.log(tipamount.value * 0.15);
    let tip = (tipamount.value * 0.15).toFixed(2)
    ert = `<h4>You have to tip $${tip} on $${tipamount.value}</h4>`;
    output.innerHTML = ert;
   
})