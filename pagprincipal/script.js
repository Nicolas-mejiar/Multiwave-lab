const selects = document.querySelectorAll("select");

selects.forEach(select => {

select.addEventListener("change", () => {

alert("Experimento seleccionado: " + select.value);

});

});

function draw() {
  background(20, 20, 40); // fondo oscuro bonito
  
  // === CÁLCULOS FÍSICOS ===
  let gravedad = 0.4;           // ¡puedes cambiar este valor!
  bola.vy += gravedad;         // acelera hacia abajo
  bola.y += bola.vy;            // mueve la bola
  
  // Rebote en el suelo
  if (bola.y + bola.radio > height) {
    bola.y = height - bola.radio;
    bola.vy = -bola.vy * 0.8;   // rebota y pierde un poco de energía
  }
  
  // === DIBUJO ===
  fill(bola.color);
  noStroke();
  circle(bola.x, bola.y, bola.radio * 2);
  
  // texto informativo
  fill(255);
  textSize(16);
  text(`Velocidad: ${bola.vy.toFixed(1)} px/frame`, 20, 30);
  text(`Altura: ${(height - bola.y).toFixed(0)} px`, 20, 55);
}

// Bonus: haz clic para lanzar la bola hacia arriba
function mousePressed() {
  bola.vy = -15;   // impulso hacia arriba
}