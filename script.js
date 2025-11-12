const VALID_USER = 'StanelyNsato';
const VALID_PASS = '2002';

const loginView = document.getElementById('loginView');
const celebrateView = document.getElementById('celebrateView');

function showCelebrate() {
  loginView.style.display = 'none';
  celebrateView.style.display = 'block';
}

function showLogin() {
  loginView.style.display = 'block';
  celebrateView.style.display = 'none';
}

function handleLogin(e) {
  e.preventDefault();
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;
  
  if (u === VALID_USER && p === VALID_PASS) {
    localStorage.setItem('birthday_logged_in', '1');
    showCelebrate();
  } else {
    document.querySelector('.login').animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-8px)' },
        { transform: 'translateX(8px)' },
        { transform: 'translateX(-6px)' },
        { transform: 'translateX(6px)' },
        { transform: 'translateX(0)' }
      ],
      { duration: 420 }
    );
    alert('Wrong username or password — try again.');
  }
}

function logout() {
  localStorage.removeItem('birthday_logged_in');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  showLogin();
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('birthday_logged_in') === '1') {
    showCelebrate();
  } else {
    showLogin();
  }
});
