import axios from 'axios';

export async function login(email, password) {
  const url = `http://localhost:8081/v1/api/auth/login`;
  console.log(email);
  console.log(url);
  try {
    const response = await axios.post(
      url,
      {
        email: email,
        password: password,
      },
    );
    return (response.data.metadata);
  } catch (error) {
    console.log(error);
  }
}

