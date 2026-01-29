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

// Inicialización DOM
document.addEventListener('DOMContentLoaded', ()=>{
  animateCounters();
  // Placeholders para futuras interacciones: smooth scroll, lazy load, etc.
});
