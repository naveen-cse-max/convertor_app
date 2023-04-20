

// let btn2=document.querySelector('.button2')
// let res2=document.querySelector('#sing')

// let btn3=document.querySelector('.button3')
// let res3=document.querySelector('#kuwait')

// let btn4=document.querySelector('.button4')
// let res4=document.querySelector('#malaysia')

function convertusd()
{
    // let btn1=document.querySelector('.button1')
    // let res1=document.querySelector('#amer')
    let inra=document.getElementById('inr').value;
    let usd=inra*0.86 . toFixed(2);
    //     document.body.addEventListener("keypress",(e)=>{
    //     if (e.key == 'Enter') {
    // document.getElementById('amer').innerHTML=("USD: "+usd)
    // } 
    // else{
    document.getElementById('amer').innerHTML=("USD: "+usd)
}
//     });
// }

//Enter key code
function convertusden(){


}
function convertsgd()
{
    let inrb=document.getElementById('inr1').value;
    let sgd=inrb*0.017 . toFixed(5);
    document.getElementById('sing').innerHTML = ("SGD: "+sgd);
}

//Enter key code
// function convertsgden(){

// document.body.addEventListener("keypress",(e)=>{
//     if (e.key == 'Enter') {
//         convertsgd();
//     } 
// });
// }

function convertkwd()
{
    let ind=document.getElementById('inr2').value;
    let kwd=ind*0.004 . toFixed(5);
    document.getElementById('kuwait').innerHTML = ("KWD: "+ kwd);
}
//Enter key code
// function convertkwden(){

// document.body.addEventListener("keypress",(e)=>{
//     if (e.key == 'Enter') {
//         convertkwd();
//     } 
// });
// }

function convertmyr()
{
    let indc=document.getElementById('inr3').value;
    let myr=indc* 0.057 . toFixed(3);
    document.getElementById('malaysia').innerHTML = ("MYR: "+ myr);
}

//Enter key code

// function convertmyren(){
// document.body.addEventListener("keypress",(e)=>{
//     if (e.key == 'Enter') {
//         convertmyr();
//     } 
// });
// }

function converteur()
{
    let indd=document.getElementById('inr4').value;
    let eur=indd*0.012. toFixed(3);
    document.getElementById('euro').innerHTML = ("EUR: "+ eur);
}

function convertlkr()
{
    let inde=document.getElementById('inr5').value;
    let lkr=inde*4.383. toFixed(3);
    document.getElementById('srilanka').innerHTML = ("LKR: "+ lkr);
}

// /Timer showing functions

timerefresh=()=>{
    var refresh=1000;
    liveTime=setTimeout('timeshow()',refresh);
}

timeshow=()=>{
    var dateTime=new Date()
    document.getElementById('time').innerHTML=dateTime
    timerefresh();
}