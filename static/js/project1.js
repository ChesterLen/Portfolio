const images = document.querySelectorAll('img');
let enlargedImg = null;

const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
overlay.style.zIndex = '9998';
overlay.style.display = 'none';
document.body.appendChild(overlay);

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}

overlay.addEventListener('click', () => {
    if (enlargedImg) {
        resetImg(enlargedImg);
        enlargedImg = null;
        overlay.style.display = 'none';
        enableScroll();
    }
});

for (const img of images) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (event) => {
        event.stopPropagation();
        if (enlargedImg && enlargedImg !== img) {
            resetImg(enlargedImg);
        }

        if (img === enlargedImg) {
            resetImg(img);
            enlargedImg = null;
            overlay.style.display = 'none';
            enableScroll();
        } else {
            enlargeImg(img);
            enlargedImg = img;
            overlay.style.display = 'block';
            disableScroll();
        }
    });
}

document.addEventListener('click', () => {
    if (enlargedImg) {
        resetImg(enlargedImg);
        enlargedImg = null;
        overlay.style.display = 'none';
        enableScroll();
    }
});

function enlargeImg(img) {
    img.style.position = 'fixed';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%) scale(2)';
    img.style.transition = 'transform 0.25s ease';
    img.style.margin = '0';
    img.style.zIndex = '9999';
}

function resetImg(img) {
    img.style.position = '';
    img.style.top = '';
    img.style.left = '';
    img.style.transform = 'scale(1)';
    img.style.margin = '';
    img.style.zIndex = '';
    img.style.transition = 'transform 0.25s ease';
}