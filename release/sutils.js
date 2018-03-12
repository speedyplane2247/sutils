function Sutils()
{
	this.version = function ()
	{
		$alert.info("Sutils 1.0.2-hotfix1");
	}
	this.x3Detect = function (pass)
	{
		if ($boot.daemon == "noX3")
		{
			var pass = "detected";
			return pass;
		}
		else
		{
			var pass = "notdetected";
			return pass;
		}
	}
	this.credits = function ()
	{
		$alert.info("Sutils 1.0.2 - Written by speedyplane2447 (c) speedyplane2247 2017-2018");
	}
	this.checkFor93inject = function (pass)
	{
		if ($boot.daemonArgs.indexOf("X3Substrate"))
		{
			var pass = "detected";
			return pass;
		}
		else
		{
			var pass = "notdetected";
			return pass;
		}
	}
	this.addToBootup = function ()
	{
		try
		{
			$x3.newBootFunction();
		}
		catch (err)
		{
			$alert.error("An error was returned. You may not have X3 configured properly.\n" + err)
		}
	}
	this.writeFile = function (path, file)
	{
		$store.set(path, file);
		// Doesn't require a reboot.
	}
	this.writeFileRaw = function (path, file)
	{
		localforage.setItem(path, file);
		// When used, ensure to create a dialog saying this will happen on reboot.
	}
	this.rebootStandard = function ()
	{
		// runs the regular reboot command
		$exe("reboot");
	}
	this.rebootExpeirmental = function ()
	{
		$sutils.eeXe("reboot");
		// highly expeirmental reboot, using the new open application execution engine.
	}
	this.rebootForced = function ()
	{
		// forces a page reload (manual reboot)
		parent.location.reload;
	}
	this.eeXe = function (command)
	{
		$alert.error("Not implemented yet.");
		// will be implemented soon
	}
	this.safeBoot = function ()
	{
		var safeBootInquire = "question";
		this.x3Detect(safeBootInquire);
		if (safeBootInquire == "detected")
		{
			this.disableX3();
			this.sleepMS(1000);
			this.rebootForced();
		}
		else
		{
			$alert.info("Your PC will be shut down in 30 seconds.");
			this.sleepMS(30000);
			this.rebootForced();
		}
	}
	this.sleepMS = function (ms)
	{
		ms = (+new Date) + ms * 1;
		while ((+new Date) < ms);
	}
	this.disableX3 = function ()
	{
		try
		{
			$boot.X3Args = $boot.X3Args + "nextBootNoApp";
		}
		catch (err)
		{
			$alert.error("X3 may not be properly installed, disabling it failed.\n" + err);
		}
	}
	this.createApp = function (exe, name, desc, icon)
	{
		le._apps[name] = {
			"name": desc
			, "exec": exe
			, "icon": icon
		}
	}
	this.getCurrentVersion = function (returnTo)
	{
		returnTo = $boot.VERSION;
		return returnTo;
	}
	this.APTInstall = function (js, name, desc, icon, id)
	{
		localforage.getItem('/app.txt')
			.then(function (returnedString)
			{
				return returnedString;
			});
		this.writeFileRaw("/app.txt", returnedString + "\n" + js + name + desc + icon + id);
		this.createApp("js " + js, name, desc, icon);
		// this installs for that session, altough it writes an open standard for other apps to use, I'm not providing that because of malware.
	}
	this.APT = function ()
	{
		$alert.info("Altough Sutils includes an APT installer CLI, it is for installing a better APT, such as Draeco's 93APT. This doesn't have any repos or anything advanced, you just supply icons, executibles, names, and descriptions for the apps. They will be added to the start menu, and they are logged into /apps.txt. This is not restored on reboot, altough other APTs usually include an installiation script. If there is demand, I may make this into a proper APT, but for now it's good for use as another APT's installer.");
	}
	this.alert = function (type, body)
	{
		if (type == "error")
		{
			$alert.error(body);
		}
		if (type == "info")
		{
			$alert.info(body);
		}
	}
	this.notification = function (title, body)
	{
		$notif(title, body);
	}
	this.openHTML = function (url)
	{
		$window = url;
	}
	this.openHTMLAdvanced = function (name, url, title, icon, height, width)
	{
		var HTMLa = $window(
		{
			url: url
			, title: title
			, icon: icon
			, width: width
			, height: height
		});
	}
	this.getID = function (variable)
	{
		variable = $window.current.id;
	}
	this.windowAction = function (type)
	{
		if (type == "maximize")
		{
			$window.current.maximize();
		}
		if (type == "minimize")
		{
			$window.current.minimize();
		}
		if (type == "destroy")
		{
			$window.current.destroy();
		}
		if (type == "close")
		{
			$window.current.close();
		}
		if (type == "restore")
		{
			$window.current.restore();
		}
	}
	this.X3Enabler = function ()
	{
		$boot.X3("showBootMenu");
	}
}
var $sutils = new Sutils();
// 1.0.2 Hot Fix
