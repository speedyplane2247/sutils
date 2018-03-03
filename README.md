# sutils
Standard Open-Source Utility Pack for Windows 93.
## Branches
As you can see, this is only 1 branch. The /src/ is the latest beta, and not really ready for use. The /release/sutils.js is the latest stable release's source. The /release/sutils.min.js is the latest stable release for use. It's functionally the same as sutils.js, yet smaller.
## Commands
More commands are coming soon, and anyone can contribute!
### Usage
$sutils.version() : Displays the current version.

$sutils.credits() : Displays the version and copyright info.

$sutils.x3Detect() : Detects whether noX3 is running. ("detected" is returned if so.)

$sutils.checkFor93Inject() : Checks for noX3's substrate layer, allowing better theming.

$sutils.addToBootup() : Opens the noX3 Boot settings.

$sutils.writeFile(path, contents) : Writes the file regularly.

$sutils.writeFileRaw(path, contents) : Write the file, but uses localforage.

$sutils.rebootStandard() : Executes the reboot command.

$sutils.rebootExpeirmental() : Executes the reboot command using eeXe.

$sutils.rebootForced() : Forces a reboot.

$sutils.eeXe() : Currently throws not implemented, altough its an open-source alternative to $exe.

$sutils.safeBoot() : Allows you to run a clean no-boot item bootup.

$sutils.sleepMS() : Sleeps for an amount of milliseconds.

$sutils.createApp() : Creates an app to the start menu and terminal.

$sutils.APTInstall() : APT installer

$sutils.APT() : Displays a message

$sutils.alert(type, message) : Displays a dialog.
Types: error and info.

$sutils.notification(title, body) : Displays a notification.

$sutils.openHTML(url) : Opens a URL.

$sutils.openHTMLAdvanced(name,url,title,icon,height,width) : Sames as openHTML, with more options.

$sutils.getID() : Gets the ID of the current app.

$sutils.windowAction(type) : Does a specific action.
Maximize: Expands the window.
Restore: Restores it to stock size.
Minimize: Hides the program.
Close: Closes the progam with an animation.
Destroy: Instanly removes application.

$sutils.X3Enabler() : Enable noX3
