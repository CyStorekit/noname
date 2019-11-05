window.onload = function() {
	var currentTheme = localStorage.getItem("theme");
	
	document.body.style.setProperty("--trans-time", "0.2s");
	if(currentTheme === 'Dark Theme') {
		
		//Dark Theme
		document.body.style.setProperty("--bg-color", "#1f1f1f");
		document.body.style.setProperty("--title-color", "rgba(45,51,59, 0.5)");
		document.body.style.setProperty("--field-color", "#1f1f1f");
		document.body.style.setProperty("--button-color", "#e0e0e0");
		document.body.style.setProperty("--button-text", "#1f1f1f");
		document.body.style.setProperty("--label-color", "#9e9e9e");
		document.body.style.setProperty("--font-color", "#e0e0e0");
		document.body.style.setProperty("--tap-color", "#e0e0e0");
		document.body.style.setProperty("--hype-color", "#00adff");
		document.getElementById("ThemeButton").innerText = 'Light Theme';
		
	} else {
		
		//Light Theme
		document.body.style.setProperty("--bg-color", "#fdfdfd");
		document.body.style.setProperty("--title-color", "rgba(204, 204, 204, 0.5)");
		document.body.style.setProperty("--field-color", "#f5f5f5");
		document.body.style.setProperty("--button-color", "#2d2d2d");
		document.body.style.setProperty("--button-text", "#f1f1f1");
		document.body.style.setProperty("--label-color", "#6d6d72");
		document.body.style.setProperty("--font-color", "#000000");
		document.body.style.setProperty("--tap-color", "rgba(0, 0, 0, .5)");
		document.body.style.setProperty("--hype-color", "#0b6dff");
		document.getElementById("ThemeButton").innerText = 'Dark Theme';

	}	
}

function switchTheme() {
	
	currentTheme = document.getElementById("ThemeButton").innerText;
	document.body.style.setProperty("--trans-time", "0.2s");
	
	if(currentTheme === 'Dark Theme') {
		
		//Dark Theme
		document.body.style.setProperty("--bg-color", "#1f1f1f");
		document.body.style.setProperty("--title-color", "rgba(45,51,59, 0.5)");
		document.body.style.setProperty("--field-color", "#1f1f1f");
		document.body.style.setProperty("--button-color", "#e0e0e0");
		document.body.style.setProperty("--button-text", "#1f1f1f");
		document.body.style.setProperty("--label-color", "#9e9e9e");
		document.body.style.setProperty("--font-color", "#e0e0e0");
		document.body.style.setProperty("--tap-color", "#e0e0e0");
		document.body.style.setProperty("--hype-color", "#00adff");
		document.getElementById("ThemeButton").innerText = 'Light Theme';
		localStorage.setItem("theme", currentTheme);
		
	} else {
		
		//Light Theme
		document.body.style.setProperty("--bg-color", "#fdfdfd");
		document.body.style.setProperty("--title-color", "rgba(204, 204, 204, 0.5)");
		document.body.style.setProperty("--field-color", "#f5f5f5");
		document.body.style.setProperty("--button-color", "#2d2d2d");
		document.body.style.setProperty("--button-text", "#f1f1f1");
		document.body.style.setProperty("--label-color", "#6d6d72");
		document.body.style.setProperty("--font-color", "#000000");
		document.body.style.setProperty("--tap-color", "rgba(0, 0, 0, .5)");
		document.body.style.setProperty("--hype-color", "#0b6dff");
		document.getElementById("ThemeButton").innerText = 'Dark Theme';
		localStorage.setItem("theme", currentTheme);

	}
}