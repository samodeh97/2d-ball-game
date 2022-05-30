window.onload = function () {
    alert("Start Game\n")
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = innerWidth - 15;
    canvas.height = innerHeight - 200;
    var x = 50;
    var y = 50;
    var dx = 4;
    var dy = 4;
    var r = 20;
    var rx = 200;
    var s = 0;
    var ry = canvas.height - 10;
    var ri = document.getElementById("right");
    var le = document.getElementById("left");

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.fillRect(rx, ry, 110, 10);

        ctx.font = "20px arial";
        ctx.fillStyle = "white"
        ctx.fillText("Score : " + s, canvas.width - 150, 30);

        if (x + r > innerWidth - 50 || x - r < 0) {
            dx = -dx;
        }
        if (y - r < 0) {
            dy = -dy;
        }
        x = x + dx;
        y = y + dy;
        ri.onclick = function () {
            if (rx > canvas.width) {
                rx = -100;
            }
            rx = rx + 100;
        }
        le.onclick = function () {
            if (rx < 0) {
                rx = innerWidth;
            }
            rx = rx - 100;
        }
        if (y + dy > canvas.height - r) {
            if (x > rx && x < rx + 110) {
                dy = -dy;
                s = s + 10;
            }
        }
        if (y + r > canvas.height) {
            alert("Game Over!\n\nYour Scroe = " + s);
            x = 50;
            y = 50;
            s = 0;

            alert("Lets Try Again\n");
        }   
    }
    animate();
}