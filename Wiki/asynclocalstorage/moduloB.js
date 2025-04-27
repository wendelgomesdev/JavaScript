const { asyncLocalStorage } = require('./context');

function executarModuloB() {
  const store = asyncLocalStorage.getStore();
  console.log('[Módulo B] Contexto atual:', store);
}

module.exports = { executarModuloB };
