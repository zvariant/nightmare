/*var iframeui = new Nightmare({
    "title": "IFrame",
    "type": "js",
    "js": "https://raw.githubusercontent.com/Avad3/bookmarklets/main/app.js",
    "width": 600,
    "height": 400,
    "theme": "dark"
    })
    
    async function injectnightmare() {
    var NightmareWindows = await fetch("https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.min.js")
    var NightmareCode = await NightmareWindows.text()
    NightmareCode = NightmareCode.replaceAll("<br>", ";")
    var cdn1 = document.createElement("script")
    cdn1.innerHTML = NightmareCode  + "\n\n" + "eval(" + iframeui + ")"
    document.getElementsByTagName("html")[0].appendChild(cdn1)
    }
    
    var cdn2 = document.createElement("link")
    cdn2.setAttribute("rel", "stylesheet")
    cdn2.href = "https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.css"
    document.getElementsByTagName("html")[0].appendChild(cdn2)
    
    var ncdn3 = document.createElement("script")
    ncdn3.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
    document.getElementsByTagName("html")[0].appendChild(ncdn3)
    
    var ncdn4 = document.createElement("script")
    ncdn4.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"
    document.getElementsByTagName("html")[0].appendChild(ncdn4)
    
    var ncdn5 = document.createElement("link")
    ncdn5.rel = "stylesheet"
    ncdn5.href = "https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"
    document.getElementsByTagName("html")[0].appendChild(ncdn5)
    
    
injectnightmare()*/

var cdn1 = document.createElement("script")
cdn1.src = "https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.min.js"
document.getElementsByTagName("html")[0].appendChild(cdn1)

var cdn2 = document.createElement("link")
cdn2.setAttribute("rel", "stylesheet")
cdn2.href = "https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.css"
document.getElementsByTagName("html")[0].appendChild(cdn2)

var ncdn3 = document.createElement("script")
ncdn3.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
document.getElementsByTagName("html")[0].appendChild(ncdn3)

var ncdn4 = document.createElement("script")
ncdn4.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"
document.getElementsByTagName("html")[0].appendChild(ncdn4)

var ncdn5 = document.createElement("link")
ncdn5.rel = "stylesheet"
ncdn5.href = "https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"
document.getElementsByTagName("html")[0].appendChild(ncdn5)

new Nightmare({
    "title": "Example", //Window Title - Required
    "type": "js", //URL, Html or Js - Required
    "url": "https://example.com", //For url
    "html": "<button>hi</button>", //For html
    "js": "https://raw.githubusercontent.com/vega79/bh-files/main/nightmaresrc.js?token=GHSAT0AAAAAABTXO66PRPN7YGSQ4C53SI2WYTIWQMQ", //For js url
    "width": 800, //Width - No quotes
    "height": 600, //Height - No quotes
    "theme": "dark" //Light or Dark
})

