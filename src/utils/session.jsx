import { AUTH_API_PORT, AUTH_API_URL } from '../../setupEnv';

export const GetUser = async (event) => {
  const email = event.target.email.value;
  const password = event.target.password.value;
  const response = await fetch(`${AUTH_API_URL}:${AUTH_API_PORT}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('user', JSON.stringify(data.user));
    return true;
  } else {
    const errorData = await response.json();
    console.error('Error en la autenticación:', errorData.message);
    return false;
  }
}

export const RegisterUser = async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const response = await fetch(`${AUTH_API_URL}:${AUTH_API_PORT}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    return true;
  } else {
    const errorData = await response.json();
    console.error('Error en el registro:', errorData.message);
    return false;
  }
};

export const getUser = () => {
  const storedUser = sessionStorage.getItem('user');
  const user = storedUser ? storedUser : null;
  return user
}

export const getUserToken = () => {
  const storedToken = sessionStorage.getItem('token');
  const token = storedToken ? storedToken : null;
  return token
}


export const removeUserAndUserToken = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
};