import { Base_URL } from "../constant";

const fetchData = async (url, method = "GET", data = null) => {
  const options = {
    headers: { "Content-Type": "application/json" },
    method,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const result = await fetch(Base_URL + url, options);
    return await result.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
