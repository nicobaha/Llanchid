/* funcion abrir y cerrar modal galería massony */
function openModal(element) {
    console.log("Modal abierto"); // Agregar este mensaje para verificar
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = element.src;
    caption.textContent = element.alt;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};