// eslint-disable-next-line import/prefer-default-export
export const createGame = async (url, obj) => {
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
    return data;
  } catch (error) {
    return error;
  }
};