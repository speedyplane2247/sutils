function Sutils () {
// 1.0.1, Stock. Remove if this is not from speedyplane2247/sutils!
    this.version = function ()
      {
          $alert.info("Sutils 1.0")
      }
    this.x3Detect = function (pass) 
    {
        if ($boot.daemon == "noX3") {
            var pass = "detected"
            return pass
        }
         else 
         {
var pass = "notdetected"
return pass
        }
    }
    this.credits = function () {
        $alert.info("Sutils 1.0 - Written by speedyplane2447 (c) speedyplane2247 2017-2018")
    }
    this.checkFor93inject = function (pass) {
        if ($boot.daemonArgs.indexOf("X3Substrate")) {
var pass = "detected"
return pass
        }
        else
        {
var pass = "notdetected"
return pass
        }
    }
  this.addToBootup = function() {
    try {
        $x3.newBootFunction()
    }
    catch(err) {
        $alert.error("An error was returned. You may not have X3 configured properly.")
    }
  }
  this.writeFile = function (path,file) {
    $store.set(path, file);
    // Doesn't require a reboot.
  }
  this.writeFileRaw = function (path,file) {
    localforage.setItem(path, file)
    // When used, ensure to create a dialog saying this will happen on reboot.
  }
  this.rebootStandard = function () {
      // runs the regular reboot command
      $exe("reboot")
  }
  this.rebootExpeirmental = function () {
      $sutils.eeXe("reboot")
      // highly expeirmental reboot, using the new open application execution engine.
  }
  this.rebootForced = function () {
      // forces a page reload (manual reboot)
      location.reload
  }
  this.eeXe = function (command) {
$alert.error("Not implemented yet.")
// will be implemented soon
  }
  this.safeBoot = function () {
      var safeBootInquire = "question"
      this.x3Detect(safeBootInquire)
      if (safeBootInquire == "detected") {
          this.disableX3()
          this.sleepMS(1000)
          this.rebootForced()
      }
      else
      {
          $alert.info("Your PC will be shut down in 30 seconds.")
          this.sleepMS(30000)
          this.rebootForced()
      }
  }
  this.sleepMS = function (ms) {
    ms = (+new Date) + ms * 1;
    while ((+new Date) < ms);
  }
  this.disableX3 = function () {
    try {
        $boot.X3Args = $boot.X3Args + "nextBootNoApp"
    }
    catch(err) {
        $alert.error("X3 may not be properly installed, disabling it failed.")
    }
      
}
  }
  var $sutils = new Sutils ();
