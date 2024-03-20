

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;


$(window).load(function(){
    const canvasElement = document.getElementById('canvas1');
    const context = canvasElement.getContext('2d');
    canvasElement.addEventListener('mousemove', function(e) {
        let mousePos = getMousePosition(e, canvasElement);
        redrawCanvas(mousePos);
    }, false);
    function redrawCanvas(mousePos) {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        console.log('a');
        canvasElement.width = canvasElement.width;
        context.globalAlpha = 1;
        context.drawImage(image, 0, 0, screenWidth, screenHeight);
        context.beginPath();
        context.rect(0,0,screenWidth,screenHeight);
        context.arc(mousePos.x, mousePos.y, 150, 0, Math.PI*2, true)
        context.clip();
        context.fillRect(0,0,screenWidth,screenHeight);
    }



    const image = new Image();
    image.onload = function() {
        redrawCanvas({x: -screenWidth, y: -screenHeight})
    }
    image.src = 'img/dark-room.jpeg';


    function getMousePosition(e, canvas) {
        let element = canvas,
            offsetX = 0,
            offsetY = 0,
            mx, my;
        if (element.offsetParent !== undefined) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element = element.offsetParent));
        }
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
        return {
            x: mx,
            y: my
        };
    }
});
