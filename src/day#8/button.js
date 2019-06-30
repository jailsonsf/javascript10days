let btn = document.getElementById('btn');

let countClicks = 0;

btn.innerHTML = countClicks;

btn.onclick = () => {
    countClicks++;
    btn.innerHTML = countClicks;
}