async function device_id(nn){
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const fingerprint = `${userAgent};${platform};${screenWidth}x${screenHeight}`;
    shaJS = CryptoJS.SHA256(fingerprint).toString(CryptoJS.enc.Hex);
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
              //id      if (n==0){ id = `${xx}: `; }
                    if (n==1){ usrx = `${xx}`; }
                    if (n==2){ tglx = `${xx}`; }
               });
          }
       });
    });
    if (ketemu == 1){
     //   zz=yy.trim();
     //   usrx=zz.substr(0,zz.length-1);
        if (nx==1){ shwPesan(); }
    }
    } catch (error) { }
    document.getElementById("usr").innerHTML= "["+usrx+"]";
    if (nx==9){
        document.getElementById("tgl").innerHTML= tglx;
    }
}