// Basic init
const electron = require('electron')
const { app, BrowserWindow, Menu, MenuItem, dialog, globalShortcut } = electron
const path = require('path')

// Let electron reloads by itself when webpack watches changes in ./src/
require('electron-reload')(__dirname)


// production settings
// process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'debug';


// To avoid being garbage collected
var mainWindow = null;

// app.on('ready', () => {

//     let mainWindow = new BrowserWindow({width: 800, height: 600})

//     mainWindow.loadURL(`file://${__dirname}/app/index.html`)

// })
// main window function
function createMainWindow(){
    mainWindow = new BrowserWindow({
        // width, 
        // height,
        minWidth: 600,
        minHeight: 550,
        icon: path.join(__dirname, './app/src/assets/icon.ico'),
        frame: false,
        show: false,
        backgroundColor: '#303030'
    });

    // clear the cache of the browser
    mainWindow.webContents.session.clearCache(function() {
    });

    // Load Url to main window
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    // url.format({
    //     pathname: path.join(__dirname, './src/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    //   }))

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Open the DevTools.
    if(process.env.NODE_ENV === "debug"){
        globalShortcut.register('CommandOrControl+I', () => {
            mainWindow.openDevTools({
                detach: true
            });
        });
        globalShortcut.register('CommandOrControl+R', ()=> {
            mainWindow.reload();
        });
    } else {

    // return false;
        mainWindow.onbeforeunload = (e) => {
        // Prevent Command-R from unloading the window contents.
            e.returnValue = false
        };
    };
    // context menu 
    const contxMenu = new Menu();
    contxMenu.append(new MenuItem({
        label: "Hello",
        click: function(){
            console.log("Its working")
        }
    }));
    
    contxMenu.append(new MenuItem({
        label: "second",
        click: function(){
            console.log("Second menu")
        }
    }));
    contxMenu.append(new MenuItem({
        label: 'Open',
        
        click: () => {
            dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]})
          },
        accelerator: 'CmdOrCtrl + Shift + O',
    }));

    mainWindow.webContents.on('context-menu', function(e, params){
        contxMenu.popup(mainWindow, params.x, params.y);
    });
    
    // Quit app when close
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
}

// on ready
app.on('ready', createMainWindow);

// on activate
app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    };
});

// on quit
app.on('quit', function() {
	// kill any server running
//   child.kill('SIGINT');
});

//on window all closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    };
});

// disable menu
app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
    // custom right click menu attach here 

});

// will quit // Shortcuts unregistering on quit
app.on('will-quit', () => {
    if(process.env.NODE_ENV === "debug"){
        // Unregister a shortcut.
        globalShortcut.unregister('CommandOrControl+I');
        globalShortcut.unregister('CommandOrControl+R');
        // Unregister all shortcuts.
        globalShortcut.unregisterAll();
    } else {
        return false;
    };
});
