document.addEventListener('DOMContentLoaded', function() {
    var heading = document.getElementById('heading');
    var letters = heading.textContent.split('');
    heading.textContent = '';
    letters.forEach(function(letter, index) {
        var span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = index * 0.1 + 's';
        span.classList.add('animated-letter-h2');
        heading.appendChild(span);
    });
});

document.getElementById('revealButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        this.textContent = 'Ocultar';
    } else {
        message.classList.add('hidden');
        this.textContent = 'Revelar';
    }
});
