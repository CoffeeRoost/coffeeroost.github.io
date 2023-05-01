const btn = document.getElementById("big");

btn.addEventListener("click", () => {
	document.getElementById("changeMe").style.fontSize = '24pt';
});



let ff = document.getElementById("FancyShmancy");
let bb = document.getElementById("BoringBetty");


ff.addEventListener("change", () => {
	
	if(document.getElementById("FancyShmancy").checked){
		document.getElementById("changeMe").style.fontWeight = 'bold';
		document.getElementById("changeMe").style.textDecoration = 'underline';
		document.getElementById("changeMe").style.color = 'blue';
	}
	
});

bb.addEventListener("change", () => {
	
	if(document.getElementById("BoringBetty").checked){
		document.getElementById("changeMe").style.fontWeight = '';
		document.getElementById("changeMe").style.textDecoration = '';
		document.getElementById("changeMe").style.color = '';
	}
	
});


const moo = document.getElementById("moo");
moo.addEventListener("click", () => {

	let str = document.getElementById("changeMe").value;
	let parts = str.split(".");
	str = parts.join("-Moo.");
	document.getElementById("changeMe").value = str;

});


