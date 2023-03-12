const boxes = document.querySelector(".boxes");

for (let i = 0; i < 200; i++) {
    const div = `<div class="box"></div>`
    boxes.innerHTML += div;
}

const box = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
    const triggerBotom = (window.innerHeight);

    box.forEach(e => {
        const boxTop = e.getBoundingClientRect().top
        const boxBottom = e.getBoundingClientRect().bottom

        if (0 < boxTop && boxTop < triggerBotom && boxBottom < triggerBotom) {
            e.classList.add("show")
        } else {
            e.classList.remove("show")
        }

    });
} checkBoxes();