function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    event.target.classList.add('active');
}

function openProduct(name, price) {
    showSection('product');
    document.getElementById('pname').innerText = name;
    document.getElementById('pprice').innerText = price;
}

/* BUY BUTTON */
document.addEventListener("click", function(e){
    if(e.target.classList.contains("buy")){
        alert("Redirecting to payment...");
    }
});

/* PARTICLES */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        d: Math.random() * 1
    });
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(0,255,255,0.5)";
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
    });
    particles.forEach(p=>{
        p.y += p.d;
        if(p.y > canvas.height){
            p.y = 0;
            p.x = Math.random()*canvas.width;
        }
    });
}

setInterval(draw,30);
