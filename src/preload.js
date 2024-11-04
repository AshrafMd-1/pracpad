const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("api", {
  toggleAlwaysOnTop: () => ipcRenderer.send("always-on-top"),
  windowCloseButton: () => ipcRenderer.send("window-close"),
  windowMinimizeButton: () => ipcRenderer.send("window-minimize"),
});
