document.addEventListener('DOMContentLoaded', function () {
    // Detect User OS and Adapt Theme
    const os = navigator.userAgent.toLowerCase();
    let theme = "default";

    if (os.includes('windows')) {
        theme = "Windows";
    } else if (os.includes('mac')) {
        theme = "macOS";
    } else if (os.includes('linux')) {
        theme = "Linux";
    }

    document.title = `Portal - ${theme}`;
    document.querySelector('.title').innerText = `Portal Interface - ${theme}`;

    // Close Button Simulation
    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.window').style.display = 'none';
    });

    // Window Resize Simulation
    document.querySelector('.maximize').addEventListener('click', function () {
        document.querySelector('.window').style.width = "90vw";
        document.querySelector('.window').style.height = "90vh";
    });

    // Minimize Simulation
    document.querySelector('.minimize').addEventListener('click', function () {
        document.querySelector('.window').style.opacity = "0.5";
    });

});
