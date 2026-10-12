const { app, BrowserWindow } = require("electron");
const serverApp = require("./server");

let mainWindow;
let server;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadURL("http://127.0.0.1:3000");
}

app.whenReady().then(() => {
  server = serverApp.listen(3000, "127.0.0.1", () => {
    console.log("Electron server running on port 3000");
    createWindow();
  });
});

app.on("window-all-closed", () => {
  if (server) {
    server.close();
  }

  app.quit();
});

app.on("before-quit", () => {
  if (server) {
    server.close();
  }
});