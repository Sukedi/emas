async function device_id(nn){
    shaJS = getCookie("usrid");
    if (!shaJS){
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const fingerprint = `${userAgent};${platform};${screenWidth}x${screenHeight}`;
        shaJS = CryptoJS.SHA256(fingerprint).toString(CryptoJS.enc.Hex);
        setCookie("usrid", shaJS, 3650);
    }
    cekID(shaJS,nn);
}

async function cekID(uid,nx){
    const url = "https://sukedi.github.io/emas/user.txt";
    let usrx="Username tak terdaftar";
    let tglx="01/01/1900";
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
                    if (n==1){ usrx = `${xx}`; }
                    if (n==2){ tglx = `${xx}`; }
               });
          }
       });
    });
    if (ketemu == 1){
        if (nx==1){ shwPesan(); }
    }
    } catch (error) { }
    document.getElementById("usr").innerHTML= "["+usrx+"]";
    if (nx==9){
        document.getElementById("tgl").innerHTML= tglx;
    }
}

function setCookie(name, value, days){
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Hitung waktu expired
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name){
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}
