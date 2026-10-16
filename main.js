let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')
let inp3 = document.getElementById('inp3')
let btn = document.getElementById('btn')
let result = document.getElementById('result')
let span1 = document.getElementById("span1")
let span2 = document.getElementById("span2")
let span3 = document.getElementById("span3")
let contanier = document.getElementById("contanier");
let back = document.getElementById('back')
function h3text(){
    setTimeout(() => {
        h3.innerText ='';
    }, 1800);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = `Please ${inp1.placeholder}`;
        h3text();
        return;
    }
    if(inp2.value === ""){
        h3.innerText = `Please ${inp2.placeholder}`;
        h3text();
        return;
    }
    if(inp3.value === ''){
        h3.innerText = `Please ${inp3.placeholder}`;
        h3text();
        return;
    }   
    account();
}
function account(){
    let Monthlyinterest = Number(inp2.value) / 12/100;
    console.log(Monthlyinterest)
    let Totalmonths = Number(inp3.value) * 12;
    console.log(Totalmonths);
    let P = Number(inp1.value);
    let n = Totalmonths;
    let r = Monthlyinterest;
    let mathPart = Math.pow(1 + r, n);
    let M = P * (r * mathPart) / (mathPart - 1);
    console.log(M);
    let Totalamount = M * Totalmonths;
    console.log(Totalamount)
    let TotalInterest = Totalamount - Number(inp1.value);
    console.log(TotalInterest)
    result.style.display = 'block';
    contanier.style.display = 'none'
    span1.innerText = `Monthly Payment: ${Monthlyinterest.toFixed(2)}`;
    span2.innerText = `Total Interest: ${TotalInterest.toFixed(2)}`;
    span3.innerText = `Total Payment: ${Totalamount.toFixed(2)}`;
    back.style.display = 'block'
}
back.onclick = function(){
    location.reload();
}