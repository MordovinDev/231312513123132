const changeType = (type) => {
  const registerMenu = document.getElementById('registerMenu')
  const loginMenu = document.getElementById('loginMenu');
  switch (type) {
    case "register":
      loginMenu.style.display = 'none';
      registerMenu.style.display = 'flex';
      break;
    case "login":
      registerMenu.style.display = 'none';
      loginMenu.style.display = 'flex';
      break;
  }
}

$(document).ready(function() {
  $("#loginMenu input[type='button']").click(function() {
    const login = $("#loginMenu input[name='login']").val();
    const password = $("#loginMenu input[name='password']").val();


    if (login === "" || password === "") {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    mp.trigger('loginAttempt', JSON.stringify({ login, password }));
  });

  $("#registerMenu input[type='button']").click(function() {
    const login = $("#registerMenu input[name='login']").val();
    const password = $("#registerMenu input[name='password']").val();
    const repeatPassword = $("#registerMenu input[name='repeatPassword']").val();


    if (login === "" || password === "" || repeatPassword === "") {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    if (password !== repeatPassword) {
      alert("Пароли не совпадают.");
      return;
    }

    mp.trigger('registerAttempt', JSON.stringify({ login, password }));
  });
});

window.showError = function(text) {
  $(".error").text(text);
}