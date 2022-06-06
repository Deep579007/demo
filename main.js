document.querySelector('form').addEventListener('submit',myfunction);
let array = JSON.parse(localStorage.getItem('user'))||[];

function myfunction(){
    event.preventDefault();
        var yo={
            name:form.name.value,
            email:form.email.value,
            address:form.address.value,
            amount:form.amount.value
        }
        localStorage.setItem('user',JSON.stringify(yo));
        window.location.href='voucher.html';
    }
