const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("api", {
  toggleAlwaysOnTop: () => ipcRenderer.send("always-on-top"),
});
