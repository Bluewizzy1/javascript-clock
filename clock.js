const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle ,bx-moon");

toggle.addEventListener("change", () =>{
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className =="bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className =="bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
});



const showTime = () => {
    let date = new Date()
    console.log((date));

// array of the days of the week
    let weekday = [
        'Sunday',
        'Monday', 
        'Tuesday',
        'Wednessday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    // array of the months of the year
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = 'AM';


    let dayOfWeek = weekday[date.getDay()]
    let dayOfMonth = date.getDate()

    if (h <= 0){
        h = 12;
    }

    if (h > 12) {
        h = h -12;
        session = 'PM';
    };


// for output on the screen
let time = h + ':' + m + ':' + s + ' ' + session

document.querySelector('.clock').innerText = time
document.querySelector('.clock').textContent = time

document.querySelector('.day').innerHTML = 
months[date.getMonth()] + ' ' + dayOfMonth + ', ' + date.getFullYear()

document.querySelector('.dayOfWeek').innerHTML = dayOfWeek

setTimeout(showTime, 1000)
};

showTime()