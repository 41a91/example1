console.log("Example 1 ran");

const randomInteger = (min,max) => {
    const minCeil = Math.ceil(min);
    const maxCeil = Math.ceil(max);

    return Math.floor(Math.random() * (maxCeil - minCeil) + minCeil);
}

const randomRGBColor = () => {
    let r = randomInteger(0,256);
    let g = randomInteger(0,256);
    let b = randomInteger(0,256);
    
    return [r,g,b];
}

const startRandomColors = (maxLoop) => {
    let loopCount = 0;
    const title1 = document.getElementsByClassName("title1");

    const interval = setInterval(() => {
        //THis will run every 5 seconds
        const newRGB = randomRGBColor();
        title1[0].style.color = `rgb(${newRGB.join(",")})`;
        loopCount += 1;
        if(loopCount > maxLoop){
            clearInterval(interval);
        }
    },500);
}

document.getElementsByClassName("title1")[0].onclick = () => startRandomColors(5);

//This is a comment
/* 

multiline comment
*/