async function device_id(nn){
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const fingerprint = `${userAgent};${platform};${screenWidth}x${screenHeight}`;
    shaJS = CryptoJS.SHA256(fingerprint).toString(CryptoJS.enc.Hex);
    cekID(shaJS,nn);
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

async function cekID(uid,nx){
    const url = "user.txt";
    let usrx="[Username tak terdaftar]";
    try {
       const response = await fetch(url);
       const text = await response.text();
       const lines = text.split("\n").map(line => line.split(", ").map(item => item.trim()));
       let ketemu = 0;
       lines.forEach((row, i) => {
          xrow = row;
          row.forEach((col, j) => {
              ret = `${col}`;
              if (ret == uid){
                 ketemu = 1;
                 xrow.forEach((xx, n) => {
              //id      if (n==0){ id = `${xx}: `; }
                    if (n==1){ usrx = `${xx}, `; }
              //tgl      if (n==2){ tgl = `${xx}.`; }
               });
          }
       });
    });
    if (ketemu == 1){
        if (nx==1){ shwPesan(); }
    }
    } catch (error) { }
    document.getElementById("usr").innerHTML= usrx;
}
