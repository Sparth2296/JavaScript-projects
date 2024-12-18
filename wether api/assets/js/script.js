
//  

const countryCodes = {
    US: "United States",
    IN: "India",
    GB: "United Kingdom",
    CA: "Canada",
    AU: "Australia",
    FR: "France",
    DE: "Germany",
    JP: "Japan",
    CN: "China",
    IT: "Italy",
    ES: "Spain",
    BR: "Brazil",
    RU: "Russia",
    ZA: "South Africa",
    MX: "Mexico",
    KR: "South Korea",
    SE: "Sweden",
    NL: "Netherlands",
    CH: "Switzerland",
    SG: "Singapore",
    AE: "United Arab Emirates",
    AR: "Argentina",
    NZ: "New Zealand",
    SA: "Saudi Arabia",
    EG: "Egypt",
    NG: "Nigeria",
    PK: "Pakistan",
    BD: "Bangladesh",
    TH: "Thailand",
    VN: "Vietnam",
    PH: "Philippines",
    TR: "Turkey",
    MY: "Malaysia",
    ID: "Indonesia",
    KE: "Kenya",
    CO: "Colombia",
    PL: "Poland",
    IR: "Iran",
    CL: "Chile",
    PE: "Peru",
    GR: "Greece",
    PT: "Portugal",
    HU: "Hungary",
    AT: "Austria",
    FI: "Finland",
    NO: "Norway",
    DK: "Denmark",
    BE: "Belgium",
    CZ: "Czech Republic",
    SK: "Slovakia",
    RO: "Romania",
    BG: "Bulgaria",
};

// Function to get the full country name
function getCountryName(code) {
    // Convert the code to uppercase to make it case-insensitive
    code = code.toUpperCase();
    return countryCodes[code] || "Unknown country code";
}

let search = document.querySelector('.searchIcon');

wetherupdet()

search.addEventListener("click",()=>{
    wetherupdet()
})

async function wetherupdet() {
    let key = 'de17679922dc39285d62eb53b5ceddc9'
    let user = document.querySelector('.city').value

    try{

        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=${key}&units=metric`)

        let final = await res.json();

        console.log(final);

        console.log(final.weather[0].icon);
        

        document.querySelector('.temp').textContent= `${final.main.temp}`
        document.querySelector('.city-name').textContent = `${final.name}`
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${final.weather[0].icon}@2x.png`
        document.querySelector('.country').innerHTML = `<h2>${getCountryName(final.sys.country)}</h2>`
        document.querySelector('.wether-condition').textContent = `${final.weather[0].description}`;
        document.querySelector('.humidity-pr').textContent= `${final.main.humidity} %`;
        document.querySelector('.wind-pr').textContent= `${final.wind.speed}km/h`;
        document.querySelector('.pressure-pr').textContent= `${final.main.pressure}hPa`;

        console.log(final.wind.speed);
        

        
    }catch(e){
        console.log(e);
        
    }
}