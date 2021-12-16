const bgMask = document.querySelector(".bg-mask");

document.addEventListener('pointermove', function (e) {
    bgMask.style.setProperty('--mouseX', e.clientX - 250);
    bgMask.style.setProperty('--mouseY', e.clientY - 250);
});