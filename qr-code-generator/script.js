function generateQR() {
    var text = document.getElementById("qr-text").value;
    var color = document.getElementById("qr-color").value;

    document.getElementById("qr-preview").innerHTML = "";

    var qrcode = new QRCode(document.getElementById("qr-preview"), {
        width: 128,
        height: 128,
        colorDark: color,
    });

    qrcode.makeCode(text);

    document.getElementById("download-btn").style.display = "block";
    document.getElementById("download-btn").addEventListener('click',
    downloadQRCode);
}

function downloadQRCode() {
    var qrCodePreview = document.getElementById('qr-preview');

    if (qrCodePreview.children.length > 0) {
        var qrCodeDataURL = qrCodePreview.children[0].toDataURL("image/png");

        var link = document.createElement('a');
        link.href = qrCodeDataURL;
        link.download = 'qrcode.png';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
