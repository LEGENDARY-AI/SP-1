let time; // Input time
let TC; // Time Cycle (AM or PM)
let Actual_time;

document.getElementById("MySubmit1").onclick=function(){
    time=document.getElementById("MyTime").value
    TC=document.getElementById("TC").value
    time=Number(time)
    if (TC === 'PM' && time <= 12) {
        Actual_time = time + 12; // Converts PM to 24-hour format
        console.log(`${Actual_time}:00 in 24-hour format`);
    } else if (TC === 'AM' && time === 12) {
        Actual_time = 0; // Midnight
        console.log(`${Actual_time}:00 in 24-hour format`);
    } else if (TC === 'AM') {
        Actual_time = time; // AM remains the same in 24-hour format
        console.log(`${Actual_time}:00 in 24-hour format`);
    } else {
        console.log("Invalid input");
    }


document.getElementById("vol").textContent=(`${Actual_time}:00 in 24-hour format`)
}
