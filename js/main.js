// Archivo principal de JS para interacciones ligeras

// Contadores animados simples
function animateCounters(){
  document.querySelectorAll('.stat').forEach(el=>{
    const target = +el.dataset.target || 0;
    let current = 0;
    const duration = 1400;
    const stepTime = Math.max(20, Math.floor(duration/Math.max(1,target)));
    const increment = Math.max(1, Math.floor(target/(duration/stepTime)));
    const timer = setInterval(()=>{
      current += increment;
      if(current>=target){ el.textContent = target; clearInterval(timer);} else el.textContent = current;
    }, stepTime);
  });
}

// Selector de colores
function setupColorSelector(){
  const colorButtons = document.querySelectorAll('.color-option');
  
  colorButtons.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      // Remover clase selected de todos los botones
      colorButtons.forEach(b => b.classList.remove('selected'));
      // Añadir clase selected al botón clicado
      this.classList.add('selected');
      // Log para debug (opcional)
      console.log('Color seleccionado:', this.dataset.color);
    });
  });
  
  // Seleccionar el primer color por defecto
  if(colorButtons.length > 0) {
    colorButtons[0].classList.add('selected');
  }
}

// Inicialización DOM
document.addEventListener('DOMContentLoaded', ()=>{
  animateCounters();
  setupColorSelector();
  // Placeholders para futuras interacciones: smooth scroll, lazy load, etc.
});

