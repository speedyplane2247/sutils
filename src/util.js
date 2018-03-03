function Sutils () {
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
  }
  
  var sutils = new Sutils ();
