const { asyncLocalStorage } = require('./context');

function executarModuloA() {
  const store = asyncLocalStorage.getStore();
  console.log('[Módulo A] Contexto atual:', store);
}

module.exports = { executarModuloA };
