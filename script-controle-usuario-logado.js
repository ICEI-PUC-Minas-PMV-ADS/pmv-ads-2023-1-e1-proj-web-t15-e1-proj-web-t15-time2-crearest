document.addEventListener('DOMContentLoaded', function () {
    var user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        var userSection = document.getElementById('userSection');
        userSection.innerHTML = '<a style="color: white">Usuário: ' + user.name + 
        '</a><a href="/pages/users/profile.html" id="perfil">Perfil</a>' +
        '</a><a href="#" id="logout">Logout</a>';

        // Adiciona o evento de logout ao botão "Logout"
        var logoutButton = document.getElementById('logout');
        logoutButton.addEventListener('click', function () {
            logout();
            location.reload(); // Recarrega a página após o logout
        });
    } else {
        // Nenhum usuário logado
        var userSection = document.getElementById('userSection');
        userSection.innerHTML = '<a class="register" href="/pages/users/register.html">Registrar</a>' +
            '<a class="log" href="/pages/users/login.html">Login</a>';
    }
});

function logout() {
    // Limpa a sessão
    sessionStorage.removeItem('user');
    window.location.href = '/pages/home/home.html'
    console.log('Logout realizado com sucesso.');
  }
