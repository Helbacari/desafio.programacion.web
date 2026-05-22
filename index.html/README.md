# Desafío Técnico: Simuladores Interactivos con Lógica Matemática

Este proyecto web interactivo contiene y resuelve de forma óptima dos casos prácticos utilizando lógica matemática, programación estructurada y maquetación responsiva con CSS puro. Desarrollado como parte del desafío técnico de programación frontend.

## 🚀 Ejercicios Desarrollados

### 1. Simulador de Transferencia de Calor (Ley de Enfriamiento)
Calcula la temperatura final de un objeto tras transcurrir un tiempo determinado ($t$) dentro de una atmósfera o entorno a temperatura constante.
* **Fórmula utilizada:** $T = T_s + (T_0 - T_s) \cdot e^{-k \cdot t}$
* **Procesamiento:** Implementado mediante `Math.exp()` para el cálculo exponencial y redondeado al entero más cercano con `Math.round()`.

### 2. Calculador de Combinaciones Complejas (Caso Sorteo)
Calcula el total de combinaciones posibles para un sorteo de selección simultánea en dos grupos independientes y efectúa el producto total de ambos.
* **Fórmula utilizada:** $C(n,r) = \frac{n!}{r! \cdot (n-r)!}$
* **Algoritmia:** Diseñado obligatoriamente mediante una función iterativa propia para el cálculo de factoriales ($!$) sin el uso de librerías externas.
* **Validación:** Control de consistencia lógica para evitar desbordamientos numéricos o combinaciones incompatibles donde $r > n$.

## 🛠️ Requisitos Técnicos Cumplidos

* **HTML5 Semántico:** Uso mandatorio de etiquetas estructurales y de formulario (`<form>`, `<input>`, `<label>`, `<button>`) junto con validaciones nativas.
* **JavaScript Limpio (Vanilla JS):** Captura limpia de datos mediante `document.getElementById().value` y manipulación dinámica del DOM para renderizar las respuestas.
* **Estilos y Presentación (CSS):** Control riguroso y estructurado del Box Model estándar (márgenes, rellenos, bordes), alineación prolija de formularios y realce visual estético mediante efectos modernos de desenfoque de fondo (*glassmorphism*).

## 📁 Estructura del Proyecto

```text
├── index.html   # Estructura semántica y formularios de captura
├── style.css    # Diseño de la interfaz, animaciones y Box Model
├── script.js    # Lógica matemática, algoritmos y control del DOM
└── README.md    # Documentación explicativa del proyecto