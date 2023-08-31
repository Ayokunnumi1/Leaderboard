import './style.css';
import { updateScoreBoard } from './displayUsers.js';
const getId = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  try {
    const getPostConfig = {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    };
    const response = await fetch(url, getPostConfig);
    const data = await response.text();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  updateScoreBoard();
  getId();
});