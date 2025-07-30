function showImages() {
    var button = document.getElementById('open');
    var form = document.getElementById('form');
    form.style.display = 'block';
    button.style.display = 'none';
}

document.getElementById('open').addEventListener('click', showImages);
document.getElementById('open').addEventListener('click', function () {
   
    var placesSection = document.getElementById('places-to-visit');
    placesSection.style.display = 'block';

    var button = document.getElementById('open');
    button.style.display = 'none';
});

let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";

    // 3秒ごとに次のスライドを表示
    setTimeout(showSlides, 3500);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});
