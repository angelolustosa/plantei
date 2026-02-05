function togglePassword() {
    console.log('clicou no icone');

    const inputPassword = document.getElementById('password')
    const eyeIcon = document.getElementById('eyeIcon')

    /* if (inputPassword.type === 'password') {
        inputPassword.type = 'text'
        eyeIcon.classList.remove('bi-eye')
        eyeIcon.classList.add('bi-eye-slash')
    } else {
        inputPassword.type = 'password'
        eyeIcon.classList.remove('bi-eye-slash')
        eyeIcon.classList.add('bi-eye')
    } */

    // constante que retorna true/false, ou seja, é a condição do ternário
    const ehSenha = inputPassword.type === 'password';

    //Condições utilizando ternário
    inputPassword.type = ehSenha ? 'text' : 'password'
    eyeIcon.classList.remove(ehSenha ? 'bi-eye' : 'bi-eye-slash')
    eyeIcon.classList.add(ehSenha ? 'bi-eye-slash' : 'bi-eye')


}