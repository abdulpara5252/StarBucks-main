let imagem = document.querySelector(".starbucks")
let circular = document.querySelector(".circular")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor) {
    circular.style.background = cor
}
// Wait for the window to load
// Wait for the window to load
// window.onload = function() {
//     const loader = document.querySelector('.loader');
//     const fadeInElements = document.querySelectorAll('.fade-in'); // Select fade-in elements

//     // Set a timeout for the duration of the animation
//     setTimeout(() => {
//         loader.style.display = 'none'; // Hide the loader

//         // Trigger the fade-in effect
//         fadeInElements.forEach(element => {
//             element.style.animation = 'fadeIn 1s ease forwards'; // Add fade-in animation
//             element.style.opacity = '1'; // Set opacity to 1
//         });
//     }, 1500); // Match this with the duration of the CSS animation
// };

window.onload = function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(() => {
        loader.style.animation = 'fadeOut 3s forwards'; // Change to match CSS duration
    }, 1500); // Wait 1 second before starting fade out

    // Wait for the loader to fade out
    loader.addEventListener('animationend', () => {
        loader.style.display = 'none'; // Hide loader
        content.style.display = 'block'; // Show content
    });
};

