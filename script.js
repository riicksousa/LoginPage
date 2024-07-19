//Mostrar e ocultar Senha
function showpassword(){
    var inputPass = document.getElementById('password')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }
    else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
}
}

//Mostar e ocultar Confirme a sua senha
function showpassword2(){
    var confirmpass = document.getElementById('confirmpassword')
    var btnShowPass2 = document.getElementById('btn-senha2')

    if(confirmpass.type === 'password'){
        confirmpass.setAttribute('type','text')
        btnShowPass2.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }
    else{
        confirmpass.setAttribute('type','password')
        btnShowPass2.classList.replace('bi-eye-slash-fill','bi-eye-fill')
}
}