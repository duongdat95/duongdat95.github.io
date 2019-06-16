function insert(num) {
	document.form.textview.value = document.form.textview.value+num
}

function equal() {
	var exp = document.form.textview.value;
	if (exp) {
		document.form.textview.value = eval(exp);
	}
}

function clean() {
	document.form.textview.value = "";
}

function back() {
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
}

function fncos() {
	document.form.textview.value = Math.cos(document.form.textview.value);
}

function fnsin() {
	document.form.textview.value = Math.sin(document.form.textview.value);
}

function fntan() {
	document.form.textview.value = Math.tan(document.form.textview.value);
}

function square() {
	document.form.textview.value = Math.pow(document.form.textview.value,2);
}