const days = document.getElementsByClassName('days');
const today = new Date();
const month = document.getElementById(`calendarHead`);
for(i=0;i<30;i++){
    days[i].innerHTML= i+1;
    days[i].setAttribute(`id`,`day${i}`)
}

days[today.getDate()-1].setAttribute('style',`background-color: #eef;`);

const newDate = (date) => {
    const day = new Date(date)
    days[day.getDate()-1].setAttribute('style','border:solid 4px red !important;')
}