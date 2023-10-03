// Your code here.
 let isDragging = false;
 let offsetX, offsetY;

        document.querySelectorAll('.item').forEach(item => {
            item.addEventListener('mousedown', startDragging);
            item.addEventListener('mousemove', drag);
            item.addEventListener('mouseup', stopDragging);
        });

        function startDragging(event) {
            isDragging = true;
            let rect = event.target.getBoundingClientRect();
            offsetX = event.clientX - rect.left;
            offsetY = event.clientY - rect.top;
        }

        function drag(event) {
            if (isDragging) {
                let x = event.clientX - offsetX;
                let y = event.clientY - offsetY;
                event.target.style.transform = `translate(${x}px, ${y}px)`;
            }
        }

        function stopDragging() {
            isDragging = false;
        }