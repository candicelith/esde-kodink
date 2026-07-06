function playPop(element) {
    element.classList.remove('animate-pop');
    void element.offsetWidth;
    element.classList.add('animate-pop');
}

function launchConfetti() {
    const colors = ['#f87171', '#fb923c', '#facc15', '#4ade80', '#38bdf8', '#a78bfa', '#f472b6'];
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 0.4 + 's';
        piece.style.animationDuration = 2 + Math.random() * 1.5 + 's';
        piece.style.setProperty('--rotate-end', Math.random() * 720 - 360 + 'deg');
        container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    const bgColorSelect = document.getElementById('bgColorSelect');
    const headingSelect = document.getElementById('headingSelect');
    const imageSelect = document.getElementById('imageSelect');
    const boomBtn = document.getElementById('boomBtn');

    const previewBody = document.getElementById('previewBody');
    const previewHeading = document.getElementById('previewHeading');
    const previewImage = document.getElementById('previewImage');

    const bgColorClasses = {
        skyBlue: 'bg-sky-400',
        lavender: 'bg-violet-300',
        hotPink: 'bg-pink-400',
        orange: 'bg-orange-400',
    };

    const headingColorClasses = {
        skyBlue: 'text-sky-900',
        lavender: 'text-violet-900',
        hotPink: 'text-pink-900',
        orange: 'text-orange-900',
    };

    const headingText = {
        halo: 'Halo!',
        selamatDatang: 'Selamat Datang',
        heyy: 'Heyy!',
    };

    const imageSrc = {
        skyBlue: 'https://i.pinimg.com/736x/62/43/ae/6243ae546f4484f387c69724e3f84271.jpg',
        lavender: 'https://placehold.co/176x176/a78bfa/ffffff?text=Lavender',
        hotPink: 'https://placehold.co/176x176/ec4899/ffffff?text=Hot+Pink',
        orange: 'https://placehold.co/176x176/f97316/ffffff?text=Orange',
    };

    bgColorSelect.addEventListener('change', () => {
        previewBody.classList.remove(...Object.values(bgColorClasses));
        previewBody.classList.add(bgColorClasses[bgColorSelect.value]);
        previewHeading.classList.remove('text-blue-900', ...Object.values(headingColorClasses));
        previewHeading.classList.add(headingColorClasses[bgColorSelect.value]);
        playPop(previewBody);
        playPop(previewHeading);
    });

    headingSelect.addEventListener('change', () => {
        previewHeading.textContent = headingText[headingSelect.value];
        playPop(previewHeading);
    });

    imageSelect.addEventListener('change', () => {
        previewImage.src = imageSrc[imageSelect.value];
        playPop(previewImage);
    });

    boomBtn.addEventListener('click', () => {
        launchConfetti();
        // playPop(previewBody);
    });
});
