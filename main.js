const {app,Tray} = require('electron');
const path = require('path');
const exec = require('child_process').exec;

app.dock.hide();

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('ready', function () {

    const trayIcon = path.join(__dirname, 'app/img', 'icon_tray.png');
    const appIcon = new Tray(trayIcon);
    const schwein = path.join(__dirname, 'app/sounds', 'du_schwein.mp3');

    appIcon.on(
        'click', function(){
            exec('afplay ' + schwein);
        }
    );

    appIcon.setToolTip('Klick. Klick. Klick.');
});


