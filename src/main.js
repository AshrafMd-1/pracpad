const {app, BrowserWindow, screen, ipcMain} = require('electron');
const path = require('node:path');
import started from 'electron-squirrel-startup';

if (started) {
  app.quit();
}

const createWindow = () => {
  const {width: screenWidth, height: screenHeight} = screen.getPrimaryDisplay().workAreaSize;
  const windowWidth = 300;
  const windowHeight = 200;

  const x = screenWidth - windowWidth;
  const y = screenHeight - windowHeight;
  const mainWindow = new BrowserWindow({
    minWidth: 250,
    minHeight: 130,
    frame: false,
    icon: path.join(__dirname, 'icon.ico'),
    width: windowWidth,
    height: windowHeight,
    x: x,
    y: y,
    autoHideMenuBar: true,
    nodeIntegration: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  ipcMain.on("always-on-top", () => {
    mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop(), "screen");
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('window-close', () => {
  const activeWindow = BrowserWindow.getFocusedWindow();
  if (activeWindow) {
    activeWindow.close();
  }
});

ipcMain.on('window-minimize', () => {
  const activeWindow = BrowserWindow.getFocusedWindow();
  if (activeWindow) {
    activeWindow.minimize();
  }
});
