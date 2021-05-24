import axios from "axios";

export const getDetails = async (path, id) => {
  const response = await axios.get(`${path}${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response;
};
