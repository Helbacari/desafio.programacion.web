// --- EJERCICIO 1: TRANSFERENCIA DE CALOR ---
function calcularCalor() {
    // Captura mediante document.getElementById
    const t0 = parseFloat(document.getElementById('t0').value);
    const ts = parseFloat(document.getElementById('ts').value);
    const k = parseFloat(document.getElementById('k').value);
    const t = parseFloat(document.getElementById('t_time').value);
    const contenedor = document.getElementById('resultado-calor');

    // Procesamiento con Math.exp y redondeo con Math.round
    const tFinal = ts + (t0 - ts) * Math.exp(-k * t);
    const resultadoRedondeado = Math.round(tFinal);

    // Renderizado dinámico
    contenedor.innerHTML = `Temperatura Final: ${resultadoRedondeado}°C`;
    contenedor.className = "result-box result-success";
}

// --- EJERCICIO 2: CALCULADOR DE COMBINACIONES ---

// Función propia iterativa para el cálculo del factorial
function calcularFactorial(num) {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

// Aplicación de la ecuación estándar C(n, r)
function obtenerCombinaciones(n, r) {
    if (r > n) return 0; // Validación lógica
    return calcularFactorial(n) / (calcularFactorial(r) * calcularFactorial(n - r));
}

function calcularCombinacionesTotales() {
    // Captura de datos
    const n1 = parseInt(document.getElementById('n1').value);
    const r1 = parseInt(document.getElementById('r1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const r2 = parseInt(document.getElementById('r2').value);
    const contenedor = document.getElementById('resultado-combinaciones');

    // Validación obligatoria para evitar incompatibilidades (r > n)
    if (r1 > n1 || r2 > n2) {
        contenedor.innerHTML = "Error: El valor de seleccionados (r) no puede ser mayor que el total (n).";
        contenedor.className = "result-box result-error";
        return;
    }

    // Cálculo y producto total de ambos grupos
    const totalGrupo1 = obtenerCombinaciones(n1, r1);
    const totalGrupo2 = obtenerCombinaciones(n2, r2);
    const productoTotal = totalGrupo1 * totalGrupo2;

    // Renderizado dinámico estructurado
    contenedor.innerHTML = `Total de Combinaciones: ${productoTotal.toLocaleString('es-ES')}`;
    contenedor.className = "result-box result-success";
}