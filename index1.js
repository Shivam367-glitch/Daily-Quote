 let btn = document.getElementById('btn');
 btn.addEventListener('click', function() {
     const data = null;
     const xhr = new XMLHttpRequest();
     xhr.withCredentials = true;
     xhr.onload = function() {
         if (this.status == 200) {
             let json = JSON.parse(this.responseText);
             // console.log(this.responseText);
             document.getElementById('quote').innerHTML = json.quote;
             document.getElementById('author').innerHTML = json.author;
         } else {
             console.log("error");
         }
     }
     xhr.open("GET", "https://inspiring-quotes.p.rapidapi.com/random");
     xhr.setRequestHeader("X-RapidAPI-Host", "inspiring-quotes.p.rapidapi.com");
     xhr.setRequestHeader("X-RapidAPI-Key", "6768f1467dmsha5b4bf5fe991b66p127281jsn05cbbca44e50");
     xhr.send(data);
 });