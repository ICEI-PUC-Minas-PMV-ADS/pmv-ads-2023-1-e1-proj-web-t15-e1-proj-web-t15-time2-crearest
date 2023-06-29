// Abre ou cria o banco de dados
var request = indexedDB.open('usersDB', 1);
var db;

request.onupgradeneeded = function (event) {
    // Cria a estrutura do banco de dados caso não exista
    db = event.target.result;
    var objectStore = db.createObjectStore('users', { keyPath: 'username' });
    objectStore.createIndex('username', 'username', { unique: true });
};

request.onsuccess = function (event) {
    db = event.target.result;
};

request.onerror = function (event) {
    console.log('Erro ao abrir o banco de dados:', event.target.error);
};

function signup() {
    const username = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const passwordConfirmation = document.getElementById('signupPasswordConfirm').value;
    const email = document.getElementById('signupEmail').value;
    const name = document.getElementById('signupName').value;
    const termsAccepted = document.getElementById('signupTerms').checked;
    
    if (name.trim() === '' || password.trim() === '' 
    || passwordConfirmation.trim() === '' || email.trim() === '') {
        alert('Existem campos obrigatórios que não foram preenchidos');
        return;
    }

    if (password !== passwordConfirmation) {
        alert('As senhas não coincidem');
        return;
    }

    if (!termsAccepted) {
        alert('Você deve aceitar os termos de uso')
        return;
    }

    if (!emailEhValido(email)) {
        alert('Email não é válido');
        return;
    }

    var transaction = db.transaction(['users'], 'readwrite');
    var objectStore = transaction.objectStore('users');
    
    var request = objectStore.add({ username: username, password: password, email: email, name: name });

    request.onsuccess = function (event) {
        window.location.href = '/pages/users/login.html'; // Redireciona para a página de login
        alert('Registro bem-sucedido!');
    };

    request.onerror = function (event) {
        console.log('Erro ao registrar:', event.target.error);
    };
}

function emailEhValido(email) {
    // Expressão regular para validar email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
