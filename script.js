const envelopeContainer = document.getElementById('envelope-container');
const letterContainer = document.getElementById('letter-container');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const letterButtons = document.getElementById('letter-buttons');
const finalText = document.getElementById('final-text');
const letterCat = document.getElementById('letter-cat');
const celebrationContainer = document.getElementById('celebration-container');

let noClickCount = 0;

const sadGifs = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHB1YnQyeWI3cWV5NTd4Ym9iMWZrZnZ4ZWdyZHNmZHNmZHNmZHNmZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif',
    'https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif',
    'https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif',
    'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif'
];

// Open envelope
envelopeContainer.addEventListener('click', function() {
    envelopeContainer.style.display = 'none';
    letterContainer.style.display = 'block';
});

// No button click
noBtn.addEventListener('click', function() {
    noClickCount++;
    
    // Make Yes button bigger
    const currentYesWidth = parseFloat(window.getComputedStyle(yesBtn).width || yesBtn.offsetWidth);
    const currentYesFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const currentYesPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
    
    if (yesBtn.tagName === 'IMG') {
        yesBtn.style.width = (currentYesWidth * 1.3) + 'px';
    } else {
        yesBtn.style.fontSize = (currentYesFontSize * 1.3) + 'px';
        yesBtn.style.padding = (currentYesPadding * 1.2) + 'px ' + 
                              (parseFloat(window.getComputedStyle(yesBtn).paddingLeft) * 1.2) + 'px';
    }
    
    // Make No button smaller
    const currentNoWidth = parseFloat(window.getComputedStyle(noBtn).width || noBtn.offsetWidth);
    const currentNoFontSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    const currentNoPadding = parseFloat(window.getComputedStyle(noBtn).paddingTop);
    
    if (currentNoWidth > 30) {
        if (noBtn.tagName === 'IMG') {
            noBtn.style.width = (currentNoWidth * 0.7) + 'px';
        } else {
            noBtn.style.fontSize = (currentNoFontSize * 0.8) + 'px';
            noBtn.style.padding = (currentNoPadding * 0.8) + 'px ' + 
                                 (parseFloat(window.getComputedStyle(noBtn).paddingLeft) * 0.8) + 'px';
        }
    } else {
        // Hide No button completely
        noBtn.style.display = 'none';
    }

    // Change gif to something sadder
    if (noClickCount < sadGifs.length) {
        letterCat.src = sadGifs[noClickCount];
    }
});

// Yes button click
yesBtn.addEventListener('click', function() {
    letterButtons.style.display = 'none';
    celebrationContainer.style.display = 'none';  // Hide the initial gif
    celebrationContainer.style.display = 'block';  // Show celebration gif
    finalText.style.display = 'block';
    createConfetti();
});

function createConfetti() {
    const colors = ['#ff1744', '#f50057', '#ff4081', '#ff80ab', '#ffc0cb', '#ffb3ba'];
    for (let i = 0; i < 50; i++) {
        setTimeout(function() {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            document.body.appendChild(confetti);
            
            setTimeout(function() {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}