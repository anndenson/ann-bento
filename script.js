const themeButton = document.getElementById("pandan_theme");
if (themeButton){
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("pandan");
});
}

const darkButton = document.getElementById("index_theme");
if (darkButton){
darkButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");
});
}


const cookButton = document.getElementById("cook");
const timerStatus = document.getElementById("timer_status");

if (cookButton && timerStatus){
cookButton.addEventListener("click", () => {
    timerStatus.innerText="Pouring batter...making waffle...";
    cookButton.disabled = true;
    setTimeout(() => {
        timerStatus.innerText="Ding! Your fresh waffle is ready:🧇";
        cookButton.disabled=false;
    },3000);
});
}

const waffleImage = document.getElementById("swap");
if (waffleImage){
    waffleImage.addEventListener("click", () =>{
        const originalImage = waffleImage.dataset.og;
        const alternateImage = waffleImage.dataset.alt;
        
        if (waffleImage.src===originalImage){
            waffleImage.src=alternateImage;
        } else{
            waffleImage.src=originalImage;
        }
    })

};
