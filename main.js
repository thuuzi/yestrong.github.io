let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jay.png') {
      myImage.setAttribute('src', 'images/jay2.png');
    } else {
      myImage.setAttribute('src', 'images/jay.png');
    }
}
let mybutton= document.querySelector('button');
let myheading=document.querySelector('h1');
function setname(){
    let myname=prompt('输入您的名字');
    localStorage.setItem('name',myname);
    myheading.textContent='欢迎'+myname;
}
if(!localStorage.getItem('name')) {
    setname();
  } else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = '再次欢迎' + storedName;
  }
  mybutton.onclick=setname;