function edmodo() {
	// body...
	window.location = "https://www.edmodo.com"
}
function Saludar(){
	//body...
	alert('bienvenido');
}
function Suma (A,B){
	//body...
	return A+B;
}
function Nuevo(){
	//body..
	var a = document.getElementById('Barra');
	a.innerHTML += "<div>"+"Nuevo"+"</div>"; 
}

function Numero(){
	var array = new Array ();
	array = ['a','b','c']
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i])
	}
}