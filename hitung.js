function showHasil(){ hasil.style.left = "50%"; hasil.style.opacity = "1"; }
async function hitung(brt1,brt2,NC){
    if (brt1*brt2==0 || brt1<=brt2){
        Swal.fire({
          title: "Error",
          text: "Cek entry berat!",
          icon: "error"
        });
        return;
    }
    tunggu();
    MY = decript("101","Ò.G#æFEýßÔ=ûãÛöF0îÑÞ").trim();
    brt0 = document.getElementById("emas").innerHTML;
    AH = brt0.replace("amp;","").trim();
    SG = brt1/(brt1-brt2);
    DH = ubah(SG,NC);
    hsl = kdrx(DH,NC,MY,AH);
 // ------
    if isNaN(hsl) {
        Swal.fire({
          title: "Error",
          text: "Hasil invalid!",
          icon: "error"
        });
        return;
    }
 // -------
    document.getElementById("hasil").innerHTML= "Kadar : "+hsl.toFixed(2);
    document.getElementById("w1").value="";
    document.getElementById("w2").value="";
    document.getElementById("c0").checked = true;
    document.getElementById("c1").checked = false;
    document.getElementById("c2").checked = false;
    document.getElementById("c3").checked = false;
    setTimeout(() => {
        showHasil();
     }, 2000);
}

function ubah(sg,warna) {
   if (warna==3){
      return sg.toFixed(1);
   } else {
      let bulat = sg.toFixed(2);
      let dpn = bulat.slice(0, -1).toString();
      let blk = bulat.slice(-1);
      if (blk<5){ blk="0"; } 
      else { blk="5"; }
      return dpn+blk;
   }
}
