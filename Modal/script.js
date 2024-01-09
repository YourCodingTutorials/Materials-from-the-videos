document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == this.document.getElementById('modal')) {
        this.document.getElementById('modal').style.display = 'none';
    }
});
