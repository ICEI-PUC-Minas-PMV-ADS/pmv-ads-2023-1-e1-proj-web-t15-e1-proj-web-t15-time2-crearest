// Abre ou cria o banco de dados
var request = indexedDB.open('usersDB', 1);
var db;

request.onupgradeneeded = function(event) {
  // Cria a estrutura do banco de dados caso ainda não exista
  db = event.target.result;
  var objectStore = db.createObjectStore('users', { keyPath: 'username' });
  objectStore.createIndex('username', 'username', { unique: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
};

request.onerror = function(event) {
  console.log('Erro ao abrir o banco de dados:', event.target.error);
};

function login() {
  var userEmail = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  var transaction = db.transaction(['users'], 'readonly');
  var objectStore = transaction.objectStore('users');
  var request = objectStore.get(userEmail);

  request.onsuccess = function(event) {
    var user = event.target.result;
    if (user && user.password === password) {
      createSession(user); // Cria a sessão após o login bem-sucedido
      window.location.href = '/pages/home/home.html'; // Redireciona para a página inicial
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  };

  request.onerror = function(event) {
    alert('Erro ao obter usuário:', event.target.error);
  };
}

function createSession(user) {
  if (sessionStorage.getItem('user')) {
    console.log('Já existe uma sessão ativa.');
    return;
  }
  sessionStorage.setItem('user', JSON.stringify(user));
}
