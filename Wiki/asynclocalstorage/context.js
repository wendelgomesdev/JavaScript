const { AsyncLocalStorage } = require('node:async_hooks');

// Criamos a instância
const asyncLocalStorage = new AsyncLocalStorage();

module.exports = {
    asyncLocalStorage,
  };