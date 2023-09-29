const anim = lottie;
anim.loadAnimation({
    container: document.querySelector('#lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/MINES.json'
});


function redirectToLink() {
    setTimeout(function() {
        window.location.href = "http://sloterra.com";
    });
}

document.getElementById("registerButton").addEventListener("click", redirectToLink);