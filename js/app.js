const { fromEvent } = rxjs;
const { scan, debounceTime } = rxjs.operators;
// Obtener los elementos del DOM
const visitButton = document.getElementById("visit-button");
const visitCount = document.getElementById("visit-count");
// Crear el Observable para el clic en el botón
const buttonClicks$ = fromEvent(visitButton, "click").pipe(
  debounceTime(300), // Espera 300ms entre clics
  scan((acc) => acc + 1, 0) // Acumula el número de clics
);
// Suscribirse al Observable para actualizar el contador
buttonClicks$.subscribe((clickCount) => {
  visitCount.textContent = `Visitas: ${clickCount}`;
});
