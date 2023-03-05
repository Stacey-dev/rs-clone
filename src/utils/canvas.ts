export function messageAfterTcketBuying(canvas: HTMLCanvasElement) {

    const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
    let widthCanvas = (canvas.width = window.innerWidth);
    let heightCanvas = (canvas.height = window.innerHeight);
    let startSpeed = 0;
    const lineLength = 900;

    let numOfCircles: number;
    let x, y, _x, _y;
    const speed = 1 / 250;

    const anim = function () {
        ctx.fillStyle = 'hsla(205, 49%, 92%, 0.1)';
        ctx.fillRect(0, 0, widthCanvas, heightCanvas);
        for (let i = 0; i < 1; i++) {
            x = 0;
            ctx.beginPath();
            for (let j = 0; j < lineLength; j++) {
                x -= 1.3 * Math.cos(4);
                y = (x * Math.sin(i + 4.0 * startSpeed + x / 70)) / 7;
                _x = x * Math.cos(i) - y * Math.sin(numOfCircles);
                _y = x * Math.sin(i) + y * Math.cos(numOfCircles);
                numOfCircles = (j * Math.PI) / 200;
                ctx.lineWidth = 1;
                ctx.lineTo(widthCanvas / 4 + _x, heightCanvas / 1.7 - _y);
            }
            ctx.strokeStyle = 'hsl(205, 49%, 49%)';
            ctx.stroke();
        }
        startSpeed += speed;
        window.requestAnimationFrame(anim);
        txt();
    };
    anim();

    function txt() {
        const text = "Thanks".split('').join(String.fromCharCode(0x2006));
        ctx.font = '4em Marck Script';
        ctx.fillStyle = 'hsl(205, 49%, 49%)';
        ctx.fillText(text, (canvas.width - ctx.measureText(text).width / 0.5051) * 0.6, canvas.height * 0.502);
    }
    window.addEventListener(
        'resize',
        function () {
            canvas.width = widthCanvas = window.innerWidth;
            canvas.height = heightCanvas = window.innerHeight;
        },
        false
    );
}
