import modalLogin from './modal/modalLogin';

const board = document.querySelector('.board');
const URL = 'https://ahjchat.herokuapp.com';
// const URL = 'http://localhost:7070';

modalLogin(board, URL);
