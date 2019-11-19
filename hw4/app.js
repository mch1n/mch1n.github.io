var backgroundColorSelector = document.getElementById('background-selector');
backgroundColorSelector.onchange = changeBkgdColor;

function changeBkgdColor(first){
    var value = first.srcElement.options[first.srcElement.selectedIndex].value;
    if (value == "lt-blue") {
        document.body.style.backgroundImage = "url('img/lightblue.jpg')";
    } else if (value == "lt-gold") {
      document.body.style.backgroundImage = "url('img/lightgold.jpg')";
    };
}


if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
	   navigator.serviceWorker.register('service-worker.js')
	      .then(registration => console.log('SW registered'))
		  .catch(err => console.log(`SW not registered - Error: ${err}`))
    })
} else {
    console.log('Service Worker is not supported in this browser.')
}
