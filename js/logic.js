const abc = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
let desp = 0;

$(document).ready(function(){
	$('#ci').click(function(){
		//(3x +7) % 28
		desp = Number(document.getElementById('despla').value)
		let mess = document.getElementById('mess').value;
		let newMess = "";
		if(revision(mess, desp)){
			for (var i=0; i<mess.length; i++) {
				let charr = mess.charAt(i);
				let position = abc.indexOf(charr);
				//alert(position)// obtenemos la posicion bien
				//lo metemos en la funcon
				let newVal = change(position, desp);
				if(abc[newVal]==undefined){
					newMess += "?"
				}else{
					newMess += abc[newVal];
				}
			}
			document.getElementById('rs').value=newMess;
		}else{
			//esto si no se cumple la revision
		}
	});
	$('#de').click(function(){
		desp = Number(document.getElementById('despla').value);
		let mess = document.getElementById('mess').value;
		let oldMess = "";
		if(revision(mess, desp)){
			for (var i = 0; i<mess.length; i++) {
				let charr = mess.charAt(i);
				let position = abc.indexOf(charr);
				let newVal = reChange(position, desp);
				if(abc[newVal] == undefined){
					oldMess += "?"
				}else{
					oldMess += abc[newVal];
				}
			}
			document.getElementById('rs').value=oldMess;
		}
	});
});
function change(x,n){
	let val = (3*x)+n
	val = val % 28
	return val
}
function reChange(x,n){
	let val = (x-n)/3
	val %= 28
	return val
}
function revision(mess, desp){
	const re = /^([a-zñ?]+([ ]*[a-zñ?]?['-]?[a-zñ?]+)*)$/
	if(!re.test(mess)){
		sd();
	}
	if(desp<1){
		sdd();
	}
	return re.test(mess)
}
function sd(){
	Swal.fire({
		title:"Error",
		text:"El texto ingresado no ha sido aceptado, ingrese todo en minusculas y evite los numeros y simbolos",
		icon: 'error'//puede ser success,error,info, warning y question
	});
}
function sdd(){
	Swal.fire({
		title:"Error",
		text:"El numero ingresado es menor a 1",
		icon: 'error'//puede ser success,error,info, warning y question
	});
}