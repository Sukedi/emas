function showHasil(){ hasil.style.left = "50%"; hasil.style.opacity = "1"; }
async function hitung(){
alert(kdrx(19.35, 0));
   alert(kdrx(11.9, 3));
}
async function hitung2(){
    let brt1 = document.getElementById("w1").value;
    let brt2 = document.getElementById("w2").value;
    if (brt1*brt2==0 || brt1<=brt2){
        Swal.fire({
          title: "Error",
          text: "Cek entry berat!",
          icon: "error"
        });
        return;
    }
    tunggu();
//    var warnaDipilih = document.querySelector('input[name="warna"]:checked');
//    NC = warnaDipilih.value;
    SG = brt1/(brt1-brt2);
//    if (NC<"3"){ xSG = ubah(SG); }
    hsl = SG; //parseFloat(xSG);
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

function ubah(nSG) {
//    let n = parseFloat(document.getElementById("angka").value);
    let dibulatkan = nSG.toFixed(2);
    let bagianUtama = dibulatkan.slice(0, -1);
    let desimalKedua = dibulatkan.slice(-1);
    if (desimalKedua<5){ desimalKedua="0"; } 
    else { desimalKedua="5"; }
    return (bagianUtama+desimalKedua);
}
