const BASE_URL = 'https://auth.nomoreparties.co';

const makeRequest = (url, method, body, token) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  return fetch(`${BASE_URL}${url}`, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Ошибка. Код ${response.status}`);
  });
};

const register = (email, password) => {
  return makeRequest('/signup', 'POST', { email, password }, null);

  // return fetch(`${BASE_URL}/signup`, {
  //   method: 'POST',
  //   headers: {
  //     // Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ email, password }),
  // });
  // .then((res) => {
  //   return res;
  // })
  // .catch((err) => console.log(err));
};

const authorize = (email, password) => {
  return makeRequest('/signin', 'POST', { email, password }, null);

  // return fetch(`${BASE_URL}/signin`, {
  //   method: 'POST',
  //   headers: {
  //     // Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ email, password }),
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     // if (data.token) {
  //     if (data.user) {
  //       localStorage.setItem('token', data.token);
  //       console.log(data);
  //       return data;
  //     } else {
  //       return;
  //     }
  //   })
  //   .catch((err) => console.log(err));
};

const getUserData = (token) => {
  return makeRequest('/users/me', 'GET', null, token);
};

export { BASE_URL, register, authorize, getUserData };
