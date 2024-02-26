document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    const hoverElement = document.querySelectorAll('.custom-hover');
    hoverElement.forEach(function(element) {
        element.addEventListener('mouseout', function() {
            cursor.style.backgroundImage = "url('custom-cursor.png')";
        });
    });
});
