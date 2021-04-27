function showDateTime() {
    var myDiv = document.getElementById("time");

    var date = new Date();
    var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName}, ${date.getDate()} ${monthName}, ${date.getFullYear()}`;

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var time = hour + ":" + min + ":" + sec;
    myDiv.innerText = `${today}`;
  }
  setInterval(showDateTime, 1000);

  console.log("yo")