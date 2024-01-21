function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const output = document.getElementById('output');

    output.innerHTML = `<style>${cssCode}</style>${htmlCode}<script>${jsCode}</script>`;
}
