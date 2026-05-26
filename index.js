const core = require('@actions/core');

try {
  // 1. Obtener los inputs
  const rawString = core.getInput('raw-string');

  // 2. Gestionar valores vacíos o inválidos
  if (!rawString || rawString.trim() === '') {
    throw new Error("El input 'raw-string' no puede estar vacío");
  }

  // 3. Procesar información (Normalizar el tag)
  const normalized = rawString
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-'); 
    
  // 4. Generar outputs reutilizables
  core.setOutput('normalized-tag', normalized);
  console.log(`Tag generado exitosamente: ${normalized}`);

} catch (error) {
  // 5. Gestión de errores controlados
  core.setFailed(`La acción falló: ${error.message}`);
}