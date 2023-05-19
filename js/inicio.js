const userNameElement = document.querySelector('#userName');
const ModalSaldo = document.querySelector('#ModalSaldo');
const ModalIngreso = document.querySelector('#ModalIngreso');
const formu= modal.querySelector('#montodeIngreso');
const ModalIngreso = localStorage.getItem('#montodeIngreso');
if (userName) {
    userNameElement.textContent = `${userName}`;
}

const saldo = localStorage.getItem('saldo');
if(saldo) {
    modal.textContent = `${saldo}`;
}

const ingresar = localStorage.getItem('ingresar');

form.addEventListener('SubmitEvent',e=>{console.log(event.target.cantidad)});

/*Ingresar Saldo*/

function sumar (saldoMali,saldoIngresado){
return saldoMali + saldoIngresado;
}

function sumar (saldoJos,saldoIngresado){
    return saldoJos + saldoIngresado;
    }

function sumar (saldoAlex,saldoIngresado){
        return saldoAlex + saldoIngresado;
        }