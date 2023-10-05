const items = document.querySelector('.items');
let isMouseDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - items.offsetLeft;
    scrollLeft = items.scrollLeft;
});

items.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

items.addEventListener('mouseup', () => {
    isMouseDown = false;
});

items.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - items.offsetLeft;
    const walk = (x - startX) * 2;
    items.scrollLeft = scrollLeft - walk;
});
