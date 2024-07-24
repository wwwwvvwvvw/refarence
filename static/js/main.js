document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const aside = document.querySelector('aside');
    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.className = 'hamburger-menu';
    hamburgerMenu.innerHTML = '<span></span>';
    body.appendChild(hamburgerMenu);

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    body.appendChild(overlay);

    function toggleMenu() {
        aside.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = aside.classList.contains('active') ? 'hidden' : '';
    }

    hamburgerMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // ウィンドウのリサイズ時にメニューを閉じる
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            aside.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        }
    });
});


