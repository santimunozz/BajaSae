const getCountdown = () => {
    // Fecha objetivo: 20 de Noviembre de 2026
    const countDate = new Date("Nov 20, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Cálculos
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Si la fecha ya pasó
    if (gap <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        return;
    }

    // Calcular faltante
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);

    // Escribir en el HTML
    document.getElementById("days").innerText = textDay.toString().padStart(2, '0');
    document.getElementById("hours").innerText = textHour.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = textMinute.toString().padStart(2, '0');
};








window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 80) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// 2. Control de Aparición (Secciones que se deslizan)
const revealSections = () => {
    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 150;
        if (sectionTop < triggerPoint) {
            section.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealSections);
// Ejecutar una vez al cargar por si el usuario ya está a mitad de página
window.addEventListener('load', revealSections);






function flipCard(card) {
    // Alterna la clase 'flipped' al hacer clic
    card.classList.toggle('flipped');
}

// Opcional: Si quieres que solo se pueda tener una tarjeta volteada a la vez
// puedes añadir lógica aquí para cerrar las demás.





// Ejecutar cada segundo
setInterval(getCountdown, 1000);
getCountdown();