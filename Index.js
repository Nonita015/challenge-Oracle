document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        document.getElementById('outputImage').style.display = 'none';
        document.getElementById('outputText').style.display = 'block';
        document.getElementById('outputText').textContent = inputText;
    }
});

document.getElementById('decryptButton').addEventListener('click', function() {
    document.getElementById('outputImage').style.display = 'block';
    document.getElementById('outputText').style.display = 'none';
    document.getElementById('inputText').value = '';
});