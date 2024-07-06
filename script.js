const roll = () => {
    let num = Math.random();
    let play1 = document.querySelector("img")[2];
    let val = Math.floor(num*6+1);

    if (val === 1) {
        play1.setAttribute("src","refresh-and-roll/src/dice-1.png");
    }
    else
    {
        play1.setAttribute("src","/src/dice-2.png");
    }
}