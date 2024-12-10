function toggleAnimation() {
    let boxes = document.querySelectorAll('.inner_box_flex');
    let box1 = boxes[0];
    let box2 = boxes[1];
    let box3 = boxes[2];

    box2.classList.toggle('slide-up');

    if (box2.classList.contains('slide-up')) {
        console.log("hello");

        box2.style.transform = 'translateY(-100%) scale(1)';
        box2.style.opacity = '0.5';

        box3.style.transform = 'translateY(-100%) scale(1.2)';
        box3.style.opacity = '0.8';

        box1.style.transform = 'translateY(200%)';
        box1.style.opacity = '0.5';
        
        setTimeout(() => {
            box2.parentNode.insertBefore(box2, box1.nextSibling);
            box3.parentNode.insertBefore(box3, box2.nextSibling);
            
        }, 500);
    }
}