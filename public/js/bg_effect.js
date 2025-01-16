// reference
// youtube => https://www.youtube.com/watch?v=Djbg_ry-CrA
//


let banner = document.querySelector('.banner');
let canvas = document.getElementById('dotsCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');

let dots = [];
<<<<<<< HEAD
let arrayColors = ["#51abb2", "#795833", "#e16539", "#303030", "#ffb1a5"]
=======
let arrayColors = ["#013953", "#045174", "#3b769b", "#af5b00", "#e87a00", "#f8dcbf"]
>>>>>>> 2b05a9d (Adding About Page)
for (let index = 0; index < 50; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
<<<<<<< HEAD
        color: arrayColors[Math.floor(Math.random() * 5)]
=======
        color: arrayColors[Math.floor(Math.random() * 6)]
>>>>>>> 2b05a9d (Adding About Page)
    });
}
console.log(dots)

const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        ctx.fill();
    })
}

drawDots();
banner.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
    }
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if(distance < 200) {
            ctx.strokeStyle = dot.color;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})

banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
<<<<<<< HEAD
})
=======
})


>>>>>>> 2b05a9d (Adding About Page)
