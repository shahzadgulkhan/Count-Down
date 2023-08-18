const endDate = "05-Sepetember-2023 09:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock() {
    const now = new Date();
    const end = new Date(endDate);
    const diff = (end - now) / 1000;

    if(diff <0)return;
    // for Days 
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // for hours 
    inputs[1].value = (Math.floor(diff / 360) % 24)
    // for minutes 
    inputs[2].value = (Math.floor(diff / 60) % 60)
    // for seconds 
    inputs[3].value = (Math.floor(diff) % 60)



}
clock()

// for each and every seconds 
setInterval(
    () => {
        clock()
    },
        1000
)