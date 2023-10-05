const items = document.querySelectorAll('.item');
let offsetX, offsetY, isDragging = false;

items.forEach(item => {
  item.addEventListener('mousedown', (event) => {
    offsetX = event.clientX - item.getBoundingClientRect().left;
    offsetY = event.clientY - item.getBoundingClientRect().top;
    isDragging = true;

    // Set item styles while dragging
    item.style.position = 'absolute';
    item.style.zIndex = 1000;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function onMouseMove(event) {
    if (isDragging) {
      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;

      // Update item position
      item.style.left = x + 'px';
      item.style.top = y + 'px';
    }
  }

  function onMouseUp() {
    if (isDragging) {
      // Reset styles after dragging
      item.style.position = '';
      item.style.zIndex = '';
      isDragging = false;

      // Remove event listeners
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  }
});