const button = document.querySelector('.musicbutton');
const kazoomv = document.getElementById('kazoomv');
let confettiInterval;
//let rainaudio;
const rainaudio = new Audio('itsraining.mp3');


const text1 = "So... you're finally one step closer to that old age home...\n\nMay your day be filled with the reminder of your impending doom and the joys of adult diapers";
const text2 = "Just remember... That even after all these years...";
const text3 = "When you're mine in the world... there's gonna be one less lonely girl";

let animationStage = 0;

const typingText = document.getElementById("typing-text");

// function to animate typing effect
function typeWriter(text, element) {
  let i = 0;
  const speed = 100;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// function to handle button click event
function handleClick() {
  const audio = new Audio('kazoo.mp3');
  audio.volume = 0;
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

// function to create confetti
function createConfetti() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.top='0';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
  if (Math.random() < 0.5) {
    confetti.classList.add('wide');
  }
  
  document.body.appendChild(confetti);
}

// function to handle end of kazoomv
kazoomv.addEventListener('ended', function() {
  const confettiElements = document.querySelectorAll('.confetti');
  confettiElements.forEach(confetti => {
    confetti.remove();
  });

  clearInterval(confettiInterval);
});

// function to add second button
function addSecondButton() {
  setTimeout(function() {
    const secondButton = document.createElement('button');
    secondButton.classList.add('musicbutton');
    secondButton.textContent = 'A button?';
    document.body.appendChild(secondButton);

    secondButton.addEventListener('click', function() {
      //const rainaudio = new Audio('itsraining.mp3');
      rainaudio.volume = 0.2;
      rainaudio.play();
      document.body.removeChild(secondButton);
      showImage();
      typeWriter(text1, typingText);
    });
  }, 5);
}


// box -> unwrapped box -> open box
function showImage(rainaudio) {
  const box = document.createElement('img');
  box.src = 'giftbox.png';
  box.classList.add('pixelgift');
  document.body.appendChild(box);

  box.addEventListener('click', function(){
    const audio = new Audio('unwrapping.mp3');
    audio.play();

    //replacing box -> unwrapped box
    setTimeout(() => {
      const boxunw = document.createElement('img');
      boxunw.src='giftbox-unwrapped.png';
      boxunw.classList.add('pixelgift-unwrapped');
      document.body.replaceChild(boxunw, box);

      // remove typing text
      typingText.textContent = '';
      setTimeout(() => {
        typeWriter(text2, typingText);
      }, 500);

      // replacing unwrapped box -> open box
      boxunw.addEventListener('click', function(){
        const audio = new Audio('unwrapping.mp3');
        audio.play();

        setTimeout(() => {
          const boxope = document.createElement('img');
          boxope.src='giftbox-open.png';
          boxope.classList.add('pixelgift-open');
          document.body.replaceChild(boxope, boxunw);

          // replace typing text2 w text3
          typingText.textContent = '';
          setTimeout(() => {
            typeWriter(text3, typingText);
          }, 500);

          //replacing unwrapped box -> justin bieber
          boxope.addEventListener('click', function(){
            const audio = new Audio('unwrapping.mp3');
            audio.play();

            setTimeout(() => {
              const jb = document.createElement('img');
              jb.src='jb.png';
              jb.classList.add('jb');
              document.body.replaceChild(jb, boxope);  
              rainaudio.pause();
              rainaudio.currentTime=0;
            }, 1000);


            const lonelygirlaudio = new Audio('onelesslonelygirl.mp3');
            lonelygirlaudio.loop=true;
            lonelygirlaudio.play();


          });

        }, 1000);
      });
    }, 1000);
  });
}

