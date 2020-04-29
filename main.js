const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/sysinfo.png'});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file',
        slashes: true,
        nodeIntegration: true
    }));


    win.on('closed', () => {
        win = null;
    });
}

//create window
app.on('ready', createWindow)

//quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});