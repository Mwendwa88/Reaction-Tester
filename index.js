let start = new Date().getTime();

function makeShapeAppear() {
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = (Math.random() * 200) + 100;
    let height = Math.random() * 400;

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else[

        document.getElementById("shape").style.borderRadius = "0%"
        //function to chane shape to circle
    ]

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        //function togenerate random color
    }
    

    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = height +"px";
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    //set different colr and shapes 
    
    start = new Date().getTime();
}

function apperAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() + 2000);
    //function tomake shaape appear after set time
}

apperAfterDelay();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";

    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;

    document.getElementById("timeTaken").innerHTML= timeTaken + "s";

    apperAfterDelay();
    //set shape diplay to apper after set time and set time taken
}