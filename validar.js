/**
 * Función que se ejecuta al hacer clic en el botón "Aceptar" del formulario 
 * de inicio de sesión (inicio_sesion.html).
 * * Configura credenciales de prueba y verifica la entrada del usuario.
 */
function cargar() {
    // ===============================================
    // 1. CONFIGURACIÓN DE CREDENCIALES DE PRUEBA
    // ===============================================
    const CORREO_PRUEBA = "nataly.beltran@cun.edu.co";
    const CONTRASENA_PRUEBA = "12345";
    
    // ===============================================
    // 2. OBTENER LOS VALORES INGRESADOS
    // ===============================================
    const correoIngresado = document.getElementById("correo").value;
    const contrasenaIngresada = document.getElementById("contraseña").value;

    // ===============================================
    // 3. REALIZAR LA VALIDACIÓN ESTÁTICA
    // ===============================================
    if (correoIngresado === CORREO_PRUEBA && contrasenaIngresada === CONTRASENA_PRUEBA) {
        // --- INICIO DE SESIÓN EXITOSO ---
        alert("¡Inicio de sesión exitoso! Bienvenido.");
        
        // Redirige al usuario a la página principal
        window.location.href = "index.html"; 
    } else {
        // --- INICIO DE SESIÓN FALLIDO ---
        alert("Error: Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
}
