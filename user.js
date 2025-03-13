async function device_id(nn){
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const fingerprint = `${userAgent};${platform};${screenWidth}x${screenHeight}`;
    shaJS = CryptoJS.SHA256(fingerprint).toString(CryptoJS.enc.Hex);
    cekExist(shaJS,nn);
    return shaJS;
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
usrx="[Username tak terdaftar]";
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
