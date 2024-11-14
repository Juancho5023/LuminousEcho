// Handle character hover/click descriptions
const characters = document.querySelectorAll('.character');
const description = document.getElementById('description');

characters.forEach(character => {
    character.addEventListener('mouseover', () => {
        description.textContent = character.getAttribute('data-description');
    });

    character.addEventListener('mouseout', () => {
        description.textContent = '';
    });

    character.addEventListener('click', () => {
        description.textContent = character.getAttribute('data-description');
    });
});
// Contenido de cada semana
const logs = {
    week1: `
        <strong>8-14 Septiembre</strong><br>
        - Organización del trabajo con SCRUM: Equipos y tareas estructurados.<br>
        - Menú Principal: Creación del menú intuitivo.<br>
        - Paleta de colores y tipografía: Dualidad luz/oscuridad.<br>
        - Narrativa y diseño del Primer Nivel en el Bosque de Elarion.
    `,
    week2: `
        <strong>15-21 Septiembre</strong><br>
        - Efectos Visuales y Sonido: Combate y ambiente del Bosque de Elarion.<br>
        - Mapa de Baja Fidelidad: Primer bosquejo del nivel inicial.<br>
        - Colores de la UI: Estética de luz y oscuridad.
    `,
    week3: `
        <strong>22-28 Septiembre</strong><br>
        - Teaser del Juego: Introducción al mundo de Eldoria.<br>
        - Diseño de Personajes: Conceptos visuales y biografías.<br>
        - Música del Bosque de Elarion y Sistema de Combate.
    `,
    week4: `
        <strong>29 Septiembre - 5 Octubre</strong><br>
        - Narrativa Inicial: Introducción al viaje de Elyon.<br>
        - Historia del Guardián de la Luz y la Orden de los Ancestros.<br>
        - Preparación del primer nivel en el Bosque de Elarion.
    `,
    week5: `
        <strong>6-12 Octubre</strong><br>
        - Interfaz gráfica: Desarrollo e implementación.<br>
        - Narrativa: Ajustes e introducción al juego.<br>
        - Mecánicas básicas de juego.
    `,
    week6: `
        <strong>13-19 Octubre</strong><br>
        - Sistema de combate por turnos: Integración completa.<br>
        - Interacción con NPCs: Implementación del sistema.<br>
        - Elementos de UI: Mejoras para facilitar el entendimiento del juego.<br>
        - Nuevo diseño del mapa: Inclusión de elementos visuales adicionales.
    `,
    week7: `
        <strong>20-26 Octubre</strong><br>
        - Método de combate con dado.<br>
        - Nuevos enemigos en el mapa.<br>
        - Acomodo final de la página web del videojuego.<br>
        - Ajustes finales en la cinemática.
    `
};

// Función para mostrar el contenido de cada semana
function showLog(week) {
    const logContent = document.getElementById('logContent');
    logContent.innerHTML = logs[week] || "Contenido no disponible.";
}
