function validateUser(username, password) {
  if (!username || !password) {
    alert("nombre de usuario y contraseña son requeridos");
    return false;
  }
  if (username.length < 5 || password.length < 8) {
    alert("Nombre de usuario debe tener al menos 5 caracteres y contraseña debe tener al menos 8 caracteres");
    return false;
  }
  return true;
}

function validadoeenviado(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (validateUser(username, password)) {
    
    alert(`Bienvenido Usuario ${username} ha sido autenticado`);
  }
}


