var bil1;
var bil2;
var hasil;
var op;
var op_seleksi = false;
function btn(angka) {
	var display = document.getElementById("output").value;
	if (display == "0") {
		display = angka; 
	} else {
		display += angka;
	}
	document.getElementById("output").value = display;
}
 
function btn_op(o) {
	op_seleksi = true;
	bil1 = parseFloat(document.getElementById("output").value);
	op = o;
	document.getElementById("output").value = "0";
}
 
function hitung() {
	if (op_seleksi == true) {
		bil2 = parseFloat(document.getElementById("output").value);
		switch(op){
			case 1 :
				hasil = bil1 + bil2;
				document.getElementById("output").value = hasil;			
				break;
			case 2 :
				hasil = bil1 - bil2;
				document.getElementById("output").value = hasil;
				break;
		}
		op_seleksi = false
		hasil = 0;
		bil1 = 0;
		bil2 = 0;
	}
}