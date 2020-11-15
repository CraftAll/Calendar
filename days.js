const days = document.getElementsByClassName('days');
const today =new Date();
for(i=0;i<30;i++){
    days[i].innerHTML= i+1;
}
console.log(today);
days[today.getDate()].setAttribute('style',"background-color: blue")