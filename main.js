const form = document.getElementById('contactForm');
form.onsubmit = function(event){
    event.preventDefault();

    const txtName = form.getElementsByClassName('txtName')[0].value;
    const  txtEmail = form.getElementsByClassName('txtEmail')[0].value;
    const  txtMessage = form.getElementsByClassName('txtMessage')[0].value;
    
    console.log (txtName, txtEmail, txtMessage);
}
