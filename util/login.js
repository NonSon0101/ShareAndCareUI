import axios from "axios";

export const login = async ({ email, password }) => {
  const url = `http://172.22.80.1:8081/v1/api/auth/login`;
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
};
