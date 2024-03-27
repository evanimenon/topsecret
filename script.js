const button = document.querySelector('.musicbutton');
const kazoomv = document.getElementById('kazoomv');
let confettiInterval;

function handleClick() {
  const audio = new Audio('kazoo.mp3');
  button.disabled = true;

  audio.play();
  audio.addEventListener('ended', function() {
    button.disabled = false;
    kazoomv.style.display = 'none';
    clearInterval(confettiInterval);
    addSecondButton();
  });
  document.body.style.backgroundColor = '#131313';

  button.style.display = 'none';
  kazoomv.style.display = 'block';
  kazoomv.play();

  confettiInterval = setInterval(createConfetti, 500);
}

button.addEventListener('click', handleClick);

function createConfetti() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Array of colors
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Select a random color
  
  if (Math.random() < 0.5) {
    confetti.classList.add('wide');
  }
  
  document.body.appendChild(confetti);
}


kazoomv.addEventListener('ended', function() {
  const confettiElements = document.querySelectorAll('.confetti');
  confettiElements.forEach(confetti => {
    confetti.remove();
  });

  clearInterval(confettiInterval);
});

function addSecondButton() {
  setTimeout(function() {
    const secondButton = document.createElement('button');
    secondButton.classList.add('musicbutton');
    secondButton.textContent = 'A button?';
    document.body.appendChild(secondButton);

    secondButton.addEventListener('click', function() {
      const audio = new Audio('itsraining.mp3');
      audio.volume=0.2;
      audio.loop=true;
      audio.play();
      document.body.removeChild(secondButton);
      showImage();
    });
  }, 5);
}

/*function showImage() {
  const box = document.createElement('img');
  box.src = 'giftbox.png';
  box.classList.add('pixelgift');
  document.body.appendChild(box);

  box.addEventListener('click', function(){
    const audio = new Audio('unwrapping.mp3');
    audio.play();

    setTimeout(() => {
      const boxunw = document.createElement('img');
      boxunw.src='giftbox-unwrapped.png';
      boxunw.classList.add('pixelgift-unwrapped');
      document.body.replaceChild(boxunw, box);
    }, 1000);

    boxunw.addEventListener('click', function(){
      const audio = new Audio('unwrapping.mp3');
      audio.play();
  
      setTimeout(() => {
        const boxope = document.createElement('img');
        boxope.src='giftbox-open.png';
        boxope.classList.add('pixelgift-open');
        document.body.replaceChild(boxope, boxunw);
      }, 1000);
  
    });

  });


}*/

function showImage() {
  const box = document.createElement('img');
  box.src = 'giftbox.png';
  box.classList.add('pixelgift');
  document.body.appendChild(box);

  box.addEventListener('click', function(){
    const audio = new Audio('unwrapping.mp3');
    audio.play();

    setTimeout(() => {
      const boxunw = document.createElement('img');
      boxunw.src='giftbox-unwrapped.png';
      boxunw.classList.add('pixelgift-unwrapped');
      document.body.replaceChild(boxunw, box);

      boxunw.addEventListener('click', function(){
        const audio = new Audio('unwrapping.mp3');
        audio.play();

        setTimeout(() => {
          const boxope = document.createElement('img');
          boxope.src='giftbox-open.png';
          boxope.classList.add('pixelgift-open');
          document.body.replaceChild(boxope, boxunw);
        }, 1000);
      });
    }, 1000);
  });
}

