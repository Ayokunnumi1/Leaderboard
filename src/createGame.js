// eslint-disable-next-line import/prefer-default-export
export const createGame = async (url, obj) => {
  // console.log(obj);
  try {
    const postRequestConfig = {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json',
      },
    };
    const response = await fetch(url, postRequestConfig);
    const data = await response.json();
    // const data = await response.text();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};