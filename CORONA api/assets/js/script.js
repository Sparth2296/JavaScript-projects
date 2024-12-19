
let imagOfSteta = [
    {
    stet:"india",
    src :"./assets/image/in.svg"
    },
    {
    stet:"Aandra Pradesh",
    src :"./assets/image/aandra pradesh-.png"
    },
    {
    stet:"Arunachal Pradesh",
    src :"./assets/image/Arunachal_Pradesh.png"
    },
    {
    stet:"Assam",
    src :"./assets/image/Assam.png"
    },
    {
    stet:"Bihar",
    src :"./assets/image/bihar.png"
    },
    {
    stet:"Chhattisgarh",
    src :"./assets/image/Chhattisgarh.png"
    },
    {
    stet:"Delhi",
    src :"./assets/image/delhi.png"
    },
    {
    stet:"Gujarat",
    src :"./assets/image/Gujarat.png"
    },
    {
    stet:"himachal pradesh",
    src :"./assets/image/himachal pradesh.png"
    },
    {
    stet:"jammu kasmit",
    src :"./assets/image/jammu kasmit.png"
    },
    {
    stet:"Jharkhand",
    src :"./assets/image/Jharkhand.png"
    },
    {
    stet:"Karnataka",
    src :"./assets/image/Karnataka.png"
    },
    {
    stet:"Kerala",
    src :"./assets/image/Kerala.png"
    },
    {
    stet:"ladak",
    src :"./assets/image/ladak.png"
    },
    {
    stet:"Madhya Pradesh",
    src :"./assets/image/Madhya.png"
    },
    {
    stet:"Maharashtra",
    src :"./assets/image/Maharashtra.png"
    },
    {
    stet:"Manipur",
    src :"./assets/image/Manipur.png"
    },
    {
    stet:"Meghalaya ",
    src :"./assets/image/Meghalaya.png"
    },
    {
    stet:"Mizoram",
    src :"./assets/image/Mizoram.png"
    },
    {
    stet:"Nagaland",
    src :"./assets/image/MNagaland.png"
    },
    {
    stet:"Odisha",
    src :"./assets/image/Odisha.png"
    },
    {
    stet:"Panjab",
    src :"./assets/image/panjab.png"
    },
    {
    stet:"Panjab",
    src :"./assets/image/panjab.png"
    },
    {
    stet:"Rajasthan",
    src :"./assets/image/Rajasthan.png"
    },
    {
    stet:"Sikkim",
    src :"./assets/image/Sikkim.png"
    },
    {
    stet:"Tamil Nadu",
    src :"./assets/image/Tamil_Nadu.png"
    },
    {
    stet:"Tripura",
    src :"./assets/image/Tripura.png"
    },
    {
    stet:"Uttar Pradesh",
    src :"./assets/image/Uttar_Pradesh.png"
    },
    {
    stet:"Uttrakhand",
    src :"./assets/image/uttrakhand.png"
    },
    {
    stet:"West Bengal",
    src :"./assets/image/West_Bengal.png"
    },
    {
    stet:"lakshadweep",
    src :"./assets/image/lakshadweep-state-map-512x512.png"
    },
    {
    stet:"Andamanen Nikobaren",
    src :"./assets/image/Andamanen_&_Nikobaren.png"
    },
    {
    stet:"Puducherry",
    src :"./assets/image/Puducherry.png"
    },
    {
    stet:"Goa",
    src :"./assets/image/Goa.png"
    },
]

let search = document.querySelector('.search');

coronaUpdet()

async function coronaUpdet() {
    try{
    let res = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
    let final = await res.json()
    
    console.log(final.data);
    
    console.log(imagOfSteta.length);
    


    // let forComper = final.data.regional

    search.addEventListener("click",()=>{

            let userinput = document.querySelector('.userinput').value.toLowerCase();

            console.log(userinput);

            let result = final.data.regional.filter((val) =>
                val.loc.toLowerCase().includes(userinput)
              );
              
              if(result == 0){
                  alert('bhai aavu stet j nathi')
                }else{
                    document.querySelector('.foreingcase').textContent = `${result[0].confirmedCasesForeign}`
                    document.querySelector('.indCase').textContent = `${result[0].confirmedCasesIndian}`
                    document.querySelector('.deathCase').textContent = `${result[0].deaths}`
                    document.querySelector('.dischargeCase').textContent = `${result[0].discharged}`
                    document.querySelector('.totlaCase').textContent = `${result[0].totalConfirmed}`
                    
                    
                }
                
                let result2 = imagOfSteta.filter((val) =>
                    val.stet.toLowerCase().includes(userinput)
                  );

                  document.getElementById('image').src = `${result2[0].src}`
                  document.querySelector('.satatName').textContent = `${result2[0].stet},India`
              
              
    })

    
    }catch(e){
        console.log(e);
        
    }
}


    