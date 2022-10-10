function convertusd()
{
    let inr=document.getElementById('inr').value;
    let usd=inr*0.86. toFixed(2);
    document.getElementById('amer').innerHTML=("USD: "+usd)
}
function convertsgd()
{
    let inr=document.getElementById('inr1').value;
    let sgd=inr*0.017.toFixed(3);
    document.getElementById('sing').innerHTML = ("SGD: "+sgd);
}
function convertkwd()
{
    let ind=document.getElementById('inr2').value;
    let kwd=ind*0.004.toFixed(3);
    document.getElementById('kuwait').innerHTML = ("KWD: "+ kwd);
}