const main = document.querySelector("main");
const inp = document.querySelector(".inp");
const icon = document.querySelector(".bi-search");
const week = document.querySelector(".week");
const footer = document.querySelector("#footer");
const fig = document.querySelector("#fig");
icon.addEventListener("click", () => {
  let city = inp.value;
  getData();
  async function getData() {
    let x = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        city +
        "/?key=D9YKA5F6EAZSS78MM6CFDFVTL&include=days"
    );
    let data = await x.json();
    data.days.map((val, i) => {
      if (i == 0) {
        const deg = document.querySelector(".deg");
        let deg1 = Math.round(val.temp % 5.9);
        let deg2 = Math.round(val.tempmax % 5.9);
        let deg3 = Math.round(val.tempmin % 5.9);
        let deg4 = new Date(val.datetime).getDay();

        deg.innerHTML = `
            <div>
                <span>${deg1 + "°"}</span>
                <span>${val.conditions}</span>
                <span>${data.resolvedAddress}</span>
                <span>${deg2 + "°" + "/" + deg3 + "°"}</span>
                <span class="day"></span>
                
            </div>
            <div>
            <div class="pic"></div>
            </div>
            `;

        if (deg4 == 6) {
          const day1 = document.querySelector(".day");
          day1.innerText = "Saturday";
        } else if (deg4 == 0) {
          const day1 = document.querySelector(".day");
          day1.innerText = "Sunday";
        } else if (deg4 == 1) {
          const day1 = document.querySelector(".day");
          day1.innerText = "Monday";
        } else if (deg4 == 2) {
          const day1 = document.querySelector(".day");
          day1.innerText = "Tuesday";
        } else if (deg4 == 3) {
          const day1 = document.querySelector(".day");
          day1.innerText = "Wednesday";
        } else if (deg4 == 4) {
          const day1 = document.querySelector(".day");
          day1.innerText = "Thursday";
        } else if (deg4 == 5) {
          const day1 = document.querySelector(".day");
          day1.innerText = "Friday";
        }
        if (val.conditions == "Clear") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic1");
        } else if (val.conditions == "Partially cloudy") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic3");
        } else if (val.conditions == "Rain, Partially cloudy") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic2");
        } else if (val.conditions == "Rain, Overcast") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic2");
        } else if (val.conditions == "Rain") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic2");
        } else if (val.conditions == "Overcast") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic3");
        } else if (val.conditions == "Snow, Partially cloudy") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic4");
        } else if (val.conditions == "Snow, Rain, Partially cloudy") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic4");
        } else if (val.conditions == "Snow, Rain, Overcast") {
          const pic = document.querySelector(".pic");
          pic.classList.add("pic4");
        }
      }

      if (i == 1) {
        let deg21 = Math.round(data.days[1].tempmax % 5.9);
        let deg31 = Math.round(data.days[1].tempmin % 5.9);
        let deg41 = new Date(data.days[1].datetime).getDay();
        let deg22 = Math.round(data.days[2].tempmax % 5.9);
        let deg32 = Math.round(data.days[2].tempmin % 5.9);
        let deg42 = new Date(data.days[2].datetime).getDay();
        let deg23 = Math.round(data.days[3].tempmax % 5.9);
        let deg33 = Math.round(data.days[3].tempmin % 5.9);
        let deg43 = new Date(data.days[3].datetime).getDay();
        let deg24 = Math.round(data.days[4].tempmax % 5.9);
        let deg34 = Math.round(data.days[4].tempmin % 5.9);
        let deg44 = new Date(data.days[4].datetime).getDay();
        let deg25 = Math.round(data.days[5].tempmax % 5.9);
        let deg35 = Math.round(data.days[5].tempmin % 5.9);
        let deg45 = new Date(data.days[5].datetime).getDay();
        let deg26 = Math.round(data.days[6].tempmax % 5.9);
        let deg36 = Math.round(data.days[6].tempmin % 5.9);
        let deg46 = new Date(data.days[6].datetime).getDay();
        let deg27 = Math.round(data.days[7].tempmax % 5.9);
        let deg37 = Math.round(data.days[7].tempmin % 5.9);
        let deg47 = new Date(data.days[7].datetime).getDay();
        week.innerHTML = `
        <div>
        <div class="pic1"></div>
        <span>${deg21 + "°"}</span>
        <span>${deg31 + "°"}</span>
        <span class="day1"></span>
        </div>
        <div>
        <div class="pic2"></div>
        <span>${deg22 + "°"}</span>
        <span>${deg32 + "°"}</span>
        <span class="day2"></span>
        </div>
        <div>
        <div class="pic2"></div>
        <span>${deg23 + "°"}</span>
        <span>${deg33 + "°"}</span>
        <span class="day3"></span>
        </div>
        <div>
        <div class="pic2"></div>
        <span>${deg24 + "°"}</span>
        <span>${deg34 + "°"}</span>
        <span class="day4"></span>
        </div>
        <div>
        <div class="pic2"></div>
        <span>${deg25 + "°"}</span>
        <span>${deg35 + "°"}</span>
        <span class="day5"></span>
        </div>
        <div>
        <div class="pic2"></div>
        <span>${deg26 + "°"}</span>
        <span>${deg36 + "°"}</span>
        <span class="day6"></span>
        </div>
        <div>
        <div class="pic2"></div>
        <span>${deg27 + "°"}</span>
        <span>${deg37 + "°"}</span>
        <span class="day7"></span>
        </div>
        
        
        `;
        if (deg41 == 6) {
          const day11 = document.querySelector(".day1");
          day11.innerText = "Saturday";
        } else if (deg41 == 0) {
          const day11 = document.querySelector(".day1");
          day11.innerText = "Sunday";
        } else if (deg41 == 1) {
          const day11 = document.querySelector(".day1");
          day11.innerText = "Monday";
        } else if (deg41 == 2) {
          const day11 = document.querySelector(".day1");
          day11.innerText = "Tuesday";
        } else if (deg41 == 3) {
          const day11 = document.querySelector(".day1");
          day11.innerText = "Wednesday";
        } else if (deg41 == 4) {
          const day11 = document.querySelector(".day1");
          day11.innerText = "Thursday";
        } else if (deg41 == 5) {
          const day11 = document.querySelector(".day1");
          day11.innerText = "Friday";
        }
        if (val.conditions == "Clear") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic1");
        } else if (val.conditions == "Partially cloudy") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic3");
        } else if (val.conditions == "Rain, Partially cloudy") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic2");
        } else if (val.conditions == "Rain, Overcast") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic2");
        } else if (val.conditions == "Rain") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic2");
        } else if (val.conditions == "Overcast") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic3");
        } else if (val.conditions == "Snow, Partially cloudy") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic4");
        } else if (val.conditions == "Snow, Rain, Partially cloudy") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic4");
        } else if (val.conditions == "Snow, Rain, Overcast") {
          const pic1 = document.querySelector(".pic1");
          pic1.classList.add("pic4");
        }

        if (deg42 == 6) {
          const day12 = document.querySelector(".day2");
          day12.innerText = "Saturday";
        } else if (deg42 == 0) {
          const day12 = document.querySelector(".day2");
          day12.innerText = "Sunday";
        } else if (deg42 == 1) {
          const day12 = document.querySelector(".day2");
          day12.innerText = "Monday";
        } else if (deg42 == 2) {
          const day12 = document.querySelector(".day2");
          day12.innerText = "Tuesday";
        } else if (deg42 == 3) {
          const day12 = document.querySelector(".day2");
          day12.innerText = "Wednesday";
        } else if (deg42 == 4) {
          const day12 = document.querySelector(".day2");
          day12.innerText = "Thursday";
        } else if (deg42 == 5) {
          const day12 = document.querySelector(".day2");
          day12.innerText = "Friday";
        }
        if (deg43 == 6) {
          const day13 = document.querySelector(".day3");
          day13.innerText = "Saturday";
        } else if (deg43 == 0) {
          const day13 = document.querySelector(".day3");
          day13.innerText = "Sunday";
        } else if (deg43 == 1) {
          const day13 = document.querySelector(".day3");
          day13.innerText = "Monday";
        } else if (deg43 == 2) {
          const day13 = document.querySelector(".day3");
          day13.innerText = "Tuesday";
        } else if (deg43 == 3) {
          const day13 = document.querySelector(".day3");
          day13.innerText = "Wednesday";
        } else if (deg43 == 4) {
          const day13 = document.querySelector(".day3");
          day13.innerText = "Thursday";
        } else if (deg43 == 5) {
          const day13 = document.querySelector(".day3");
          day13.innerText = "Friday";
        }
        if (deg44 == 6) {
          const day14 = document.querySelector(".day4");
          day14.innerText = "Saturday";
        } else if (deg44 == 0) {
          const day14 = document.querySelector(".day4");
          day14.innerText = "Sunday";
        } else if (deg44 == 1) {
          const day14 = document.querySelector(".day4");
          day14.innerText = "Monday";
        } else if (deg44 == 2) {
          const day14 = document.querySelector(".day4");
          day14.innerText = "Tuesday";
        } else if (deg44 == 3) {
          const day14 = document.querySelector(".day4");
          day14.innerText = "Wednesday";
        } else if (deg44 == 4) {
          const day14 = document.querySelector(".day4");
          day14.innerText = "Thursday";
        } else if (deg44 == 5) {
          const day14 = document.querySelector(".day4");
          day14.innerText = "Friday";
        }
        if (deg45 == 6) {
          const day15 = document.querySelector(".day5");
          day15.innerText = "Saturday";
        } else if (deg45 == 0) {
          const day15 = document.querySelector(".day5");
          day15.innerText = "Sunday";
        } else if (deg45 == 1) {
          const day15 = document.querySelector(".day5");
          day15.innerText = "Monday";
        } else if (deg45 == 2) {
          const day15 = document.querySelector(".day5");
          day15.innerText = "Tuesday";
        } else if (deg45 == 3) {
          const day15 = document.querySelector(".day5");
          day15.innerText = "Wednesday";
        } else if (deg45 == 4) {
          const day15 = document.querySelector(".day5");
          day15.innerText = "Thursday";
        } else if (deg45 == 5) {
          const day15 = document.querySelector(".day5");
          day15.innerText = "Friday";
        }
        if (deg46 == 6) {
          const day16 = document.querySelector(".day6");
          day16.innerText = "Saturday";
        } else if (deg46 == 0) {
          const day16 = document.querySelector(".day6");
          day16.innerText = "Sunday";
        } else if (deg46 == 1) {
          const day16 = document.querySelector(".day6");
          day16.innerText = "Monday";
        } else if (deg46 == 2) {
          const day16 = document.querySelector(".day6");
          day16.innerText = "Tuesday";
        } else if (deg46 == 3) {
          const day16 = document.querySelector(".day6");
          day16.innerText = "Wednesday";
        } else if (deg46 == 4) {
          const day16 = document.querySelector(".day6");
          day16.innerText = "Thursday";
        } else if (deg46 == 5) {
          const day16 = document.querySelector(".day6");
          day16.innerText = "Friday";
        }
        if (deg47 == 6) {
          const day17 = document.querySelector(".day7");
          day17.innerText = "Saturday";
        } else if (deg47 == 0) {
          const day17 = document.querySelector(".day7");
          day17.innerText = "Sunday";
        } else if (deg47 == 1) {
          const day17 = document.querySelector(".day7");
          day17.innerText = "Monday";
        } else if (deg47 == 2) {
          const day17 = document.querySelector(".day7");
          day17.innerText = "Tuesday";
        } else if (deg47 == 3) {
          const day17 = document.querySelector(".day7");
          day17.innerText = "Wednesday";
        } else if (deg47 == 4) {
          const day17 = document.querySelector(".day7");
          day17.innerText = "Thursday";
        } else if (deg47 == 5) {
          const day17 = document.querySelector(".day7");
          day17.innerText = "Friday";
        }
      }
    });
  }
});

footer.addEventListener("click", () => {
  fig.classList.toggle("high");
});
