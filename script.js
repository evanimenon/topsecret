const button = document.querySelector('.musicbutton');
const kazoomv = document.getElementById('kazoomv');

function handleClick() {
  const audio = new Audio('kazoo.mp3');
  button.disabled = true;
  audio.play();
  audio.addEventListener('ended', function() {
    button.disabled = false;
    kazoomv.style.display = 'none'; // Hide the video when audio ends
    addSecondButton();
  });
  document.body.style.backgroundColor = '#131313';

  button.style.display = 'none';
  kazoomv.style.display = 'block';
  kazoomv.play();
}

button.addEventListener('click', handleClick);

function addSecondButton() {
  setTimeout(function() {
    const secondButton = document.createElement('button');
    secondButton.classList.add('musicbutton');
    secondButton.textContent = 'Another Button';
    document.body.appendChild(secondButton);
  }, 1000); // Add the button after 5 seconds
}
