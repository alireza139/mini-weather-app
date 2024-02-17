let inp = document.querySelector("input")
let btn = document.querySelector("button")
let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '74783a466a3b0113492b21e3b267334e'
}
let week = ["SunDay", "MonDay", "TuesDay", "WednesDay", "ThursDay", "FriDay", "SaturDay"]
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let country = document.querySelector(".country")
let date = document.querySelector(".date")
let temperature = document.querySelector(".temperature")
let weathet = document.querySelector(".weathet")
let minAndMaxTemp = document.querySelector(".minAndMaxTemp")

inp.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        fetchFunc()
    }

})

btn.addEventListener("click" , fetchFunc)


function fetchFunc() {
    fetch(`${apiData.url}${inp.value}&appid=${apiData.key}`)
        .then(res => res.json())
        .then(data => {
            showData(data)
            inp.value = ""
        })
}

function showData(info) {
    country.innerHTML = `${info.sys.country} ، ${info.name}`;
    showDate()
    temperature.innerHTML = `${Math.floor(info.main.temp - 273.15)} °C`
    weathet.innerHTML = info.weather[0].main
    minAndMaxTemp.innerHTML = `MinTemp: ${Math.floor(info.main.temp_min - 273.15)}°C | MaxTemp: ${Math.floor(info.main.temp_max - 273.15)}°C`
}

function showDate() {
    week.forEach(day => {
        if (week.indexOf(day) == new Date().getDay()) {
            date.innerHTML = day
        }
    })

    date.innerHTML += ` ${new Date().getDate()}`

    month.forEach(mon => {
        if (month.indexOf(mon) == new Date().getMonth()) {
            date.innerHTML += ` ${mon} `
        }
    })

    date.innerHTML += new Date().getFullYear()
}
showDate()

// window.addEventListener("load", () => {
//     console.log(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(), new Date().getDate());
// })
