async function device_id(nn){
const userAgent = navigator.userAgent;
const platform = navigator.platform;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const fingerprint = `${userAgent};${platform};${screenWidth}x${screenHeight}`;
let hash = await hashSHA256(fingerprint);
cekExist(hash,nn);
}
async function hashSHA256(text) {
const encoder = new TextEncoder();
const data = encoder.encode(text);
const hashBuffer = await crypto.subtle.digest("SHA-256", data);
const hashArray = Array.from(new Uint8Array(hashBuffer));
const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
return hashHex;
}
async function cekExist(newNumber,nx) {
const dataFile = "user.txt";
const response = await fetch(dataFile);
if (!response.ok) {
    Swal.fire({
    title: "Error",
    text: "Gagal membaca file data!",
    icon: "error"
    });
    return;
}
const textData = await response.text();
const rows = textData.split("\n").map(row => row.trim()).filter(row => row !== "");
const isExist = rows.some(row => row.startsWith(newNumber + ","));
usrx="Username tak terdaftar. <a href='hAx7vq0sw2k.html'>Klik di sini untuk mendaftar</a>";
if (isExist) {
    const lines = textData.split("\n").map(line => line.split(", ").map(item => item.trim()));
    lines.forEach((row, i) => {
    row.forEach((col, j) => {
        if (j==1){
            usrx = `[${col}]`;
        }
    });
    });
    if (nx==1){ shwPesan(); }
}
document.getElementById("usr").innerHTML= usrx;
}
