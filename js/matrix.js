/* ================================================
   MATRIX RAIN EFFECT - Hacker Aesthetic
   ================================================ */

class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]<>/\\|;:=+-*&^%$#@!~';
        this.columns = [];
        this.fontSize = 14;
        this.drops = [];

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1).map(() => Math.random() * -100);
    }

    draw() {
        // Semi-transparent black overlay for trail effect
        this.ctx.fillStyle = 'rgba(10, 10, 15, 0.06)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = `${this.fontSize}px monospace`;

        for (let i = 0; i < this.drops.length; i++) {
            // Random character
            const char = this.characters[Math.floor(Math.random() * this.characters.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;

            // Vary the green color slightly
            const brightness = Math.random() * 50 + 100;
            const alpha = Math.random() * 0.3 + 0.05;

            // Cyan-purple themed rain matching the portfolio
            if (Math.random() > 0.7) {
                this.ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`;
            } else {
                this.ctx.fillStyle = `rgba(0, 212, 255, ${alpha * 0.7})`;
            }

            if (Math.random() > 0.95) {
                this.ctx.fillStyle = `rgba(0, 212, 255, 0.7)`;
                this.ctx.shadowColor = 'rgba(0, 212, 255, 0.4)';
                this.ctx.shadowBlur = 6;
            } else {
                this.ctx.shadowBlur = 0;
            }

            this.ctx.fillText(char, x, y);
            this.ctx.shadowBlur = 0;

            // Reset drops randomly
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.985) {
                this.drops[i] = 0;
            }

            this.drops[i] += 0.4 + Math.random() * 0.3;
        }
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize after DOM load
document.addEventListener('DOMContentLoaded', () => {
    const matrixCanvas = document.getElementById('matrixCanvas');
    if (matrixCanvas) {
        new MatrixRain(matrixCanvas);
    }
});
