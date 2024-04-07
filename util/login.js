import axios from "axios";

export const login = async ({ email, password }) => {
  try {
    const url = `http://172.20.10.2:8081/v1/api/auth/login`;
    console.log(email, password);
    const response = await axios.post(
      url,
      {
        email,
        password,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.metadata;
  } catch (error) {
    console.error(error);
  }

};
