const { contextBridge, ipcRenderer } = require('electron');

console.log('✅ PRELOAD LOADED');

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  closeWindow: () => ipcRenderer.send('close-window')
});
