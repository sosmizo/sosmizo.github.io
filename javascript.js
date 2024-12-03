document.addEventListener('DOMContentLoaded', (event) => {
    const output = document.querySelector('.output');
    const messages = ['has sido hackeado por pendejo...', 'iniciando robo de datos...'];
    const codeElement = document.getElementById('code');
    const loadingBar = document.getElementById('loading-bar');
    const codeLines = [
        'C:\\> echo off',
        'C:\\> cls',
        'C:\\> echo Hackeo en progreso...',
        'C:\\> ping 127.0.0.1 -t',
        'C:\\> tracert 192.168.1.1',
        'C:\\> netstat -an',
        'C:\\> ipconfig /all',
        'C:\\> nslookup google.com',
        'C:\\> dir /s',
        'C:\\> format C: /q'
    ];

    let i = 0;
    function typeMessage() {
        if (i < messages.length) {
            output.textContent = messages[i];
            i++;
            if (messages[i - 1] === 'iniciando robo de datos...') {
                setTimeout(showLoadingBar, 2000);
            } else {
                setTimeout(typeMessage, 2000);
            }
        }
    }

    function showLoadingBar() {
        loadingBar.style.display = 'block';
        const progress = document.createElement('div');
        loadingBar.appendChild(progress);
        setTimeout(() => {
            progress.style.width = '100%';
            setTimeout(() => {
                alert('Gracias');
                window.close();
            }, 5000);
        }, 100);
    }

    function displayCode() {
        let displayedCode = '';
        let codeIndex = 0;

        function addLine() {
            if (codeIndex < codeLines.length) {
                displayedCode += codeLines[codeIndex] + '\n';
                codeElement.textContent = displayedCode;
                codeIndex++;
                setTimeout(addLine, 500);
            }
        }

        addLine();
    }

    typeMessage();
    displayCode();
});
