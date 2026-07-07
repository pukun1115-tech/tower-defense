let pointerX = null;
let pointerY = null;
let isPointerDown = false;

window.addEventListener("resize", resize);

canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    isPointerDown = true;

    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;
})

canvas.addEventListener("pointermove", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    isPointerDown = true;
    
    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;
});

canvas.addEventListener("pointerup", (e) => {
    e.preventDefault();
    isPointerDown = false;

    switch (mode) {
        case "menu":
            break;
        case "kabe":
            placeKabeCheck();
            break;
        case "money":
            break;
    }
});
