function myWatch() {
    var mydate = new Date();
    
    // Corrected to include 'var' keyword and properly assign hours
    var hr, min, sec;

    // Corrected syntax for getting hours and minutes
    min = (mydate.getMinutes() < 10) ? "0" + mydate.getMinutes() : mydate.getMinutes();
    sec = (mydate.getSeconds() < 10) ? "0" + mydate.getSeconds() : mydate.getSeconds();
    
    // Corrected syntax for getting AM/PM
    var M = (mydate.getHours() >= 12) ? "PM" : "AM";

    // Calculate the hour in 12-hour format
    if (mydate.getHours() === 0) {
        hr = 12;
    } else if (mydate.getHours() > 12) {
        hr = mydate.getHours() - 12;
    } else {
        hr = mydate.getHours();
    }

    // Construct the time string
    var current_time = hr + ":" + min + ":" + sec+ " ";
    
    // Update the time in the HTML element
    document.getElementsByClassName("H-M-S")[0].innerHTML = current_time;
    document.getElementsByClassName("formate")[0].innerHTML = M; // Added [0] to access the first element

    // Get the current day and month names
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    var day = mydate.getDate();

    // Construct the date string
    var current_date = dayNames[mydate.getDay()] + ", " + monthNames[mydate.getMonth()] + " " + day;

    // Update the date in the HTML element
    document.getElementsByClassName("Date")[0].innerHTML = current_date;
}

// Call the function initially
myWatch();

// Update the time and date every second
setInterval(myWatch, 1000);