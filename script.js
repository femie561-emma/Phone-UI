const switchBtn = document.querySelector('.switch');

const battery = document.querySelector('.battery');

const chargingText = document.querySelector('.charging-text');

let isCharging = false;

switchBtn.addEventListener("click", () =>{
    battery.classList.toggle('charging');
    if(battery.classList.contains('charging')){
        chargingText.style.display = 'block';
    } else{
        chargingText.style.display = ' none';
    }

    if (!isCharging){
        batteryfill.style.width = '100%';
        batteryfill.classList.add('charging');
        isCharging = 'true';
    }
    else{
        batteryfill.style.width = '0%';
        batteryfill.classList.remove('charging');
        isCharging = 'false';
    }
})

window.addEventListener('load', () =>{
    const fill = document.querySelector('.battery-fill');

    setTimeout(() =>{
        fill.style.width = '100%';
    }, 500);
});

const batteryfill = document.querySelector('.battery-fill');



