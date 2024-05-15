const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');
const userNameSpan = document.querySelector('#user-name');
const storyParagraph = document.querySelector('#story');

form.addEventListener('submit', e => e.preventDefault());

submitBtn.addEventListener('click', () => {
  const name = nameInput.value;
  localStorage.setItem('name', name);
  nameDisplayCheck(name);
  updateStory(name);
});

forgetBtn.addEventListener('click', () => {
  localStorage.removeItem('name');
  nameDisplayCheck('');
  updateStory('');
});

function nameDisplayCheck(name) {
  if(name) {
    h1.textContent = `Welcome, ${name}`;
    personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    h1.textContent = 'Welcome to our website ';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}

function updateStory(name) {
  if(name) {
    userNameSpan.textContent = name;
    storyParagraph.innerHTML = `Once upon a time, there was a traveler named <span id="user-name">${name}</span>. With a heart full of curiosity and a mind brimming with wonder, <span id="user-name">${name}</span> set out on a grand adventure through the boundless realms of the internet...`;
  } else {
    userNameSpan.textContent = '';
    storyParagraph.textContent = `Once upon a time, there was a traveler. With a heart full of curiosity and a mind brimming with wonder, they set out on a grand adventure through the boundless realms of the internet...`;
  }
}

nameDisplayCheck(localStorage.getItem('name') || '');
updateStory(localStorage.getItem('name') || '');
