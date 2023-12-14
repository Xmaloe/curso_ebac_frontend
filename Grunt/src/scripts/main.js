document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;

    document.getElementById('click-button').addEventListener('click', function() {
        clickCount++;
        document.getElementById('click-count').innerText = `Contagem de cliques: ${clickCount}`;
    });
});
