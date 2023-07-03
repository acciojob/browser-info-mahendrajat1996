//your JS code here. If required.
function getBrowserInfo() {
        const browserInfoElement = document.getElementById("browser-info");
        const browserName = navigator.appName;
        const version = navigator.appVersion;
        const message = "You are using " + browserName + " version " + version;
        browserInfoElement.textContent = message;
      }

      // Call the function to get and display the browser information
      getBrowserInfo();