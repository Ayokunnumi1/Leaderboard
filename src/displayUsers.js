import fetchData from './fetchData.js';
import createGame from './createGame.js';

const scoreBox = document.querySelector('.score-box');
const form = document.querySelector('.form');
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'Z4pTq6wYA6xnhBsGVc7J';
const submitButton = document.querySelector('.submit-button');

export const displayUser = (users) => {
  scoreBox.innerHTML = '';
  const userScoreElement = users.map((user) => {
    const li = `
    <li class="user-scores-listed">
    <span>${user.user}:</span>
    <span>${user.score}</span>
    </li>`;
    return li;
  }).join('');
  scoreBox.insertAdjacentHTML('beforeend', userScoreElement);
};

export const updateScoreBoard = () => {
  fetchData(`${baseUrl}${gameId}/scores/`).then((res) => displayUser(res?.result));
};

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const inputText = form.querySelector('#input-text');
  const inputNumber = form.querySelector('#input-number');
  const user = inputText.value;
  const score = inputNumber.value;
  const userInfo = { user, score };
  try {
    const res = await createGame(`${baseUrl}${gameId}/scores/`, userInfo);
    if (res?.result === 'Leaderboard score created correctly.') {
      updateScoreBoard();
      inputText.value = '';
      inputNumber.value = '';
    }
  } catch (error) {
    return error;
  }
  return userInfo;
});

const refreshButton = document.querySelector('.refresh-button');
refreshButton.addEventListener('click', () => {
  updateScoreBoard();
});
