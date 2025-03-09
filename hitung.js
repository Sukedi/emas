function showHasil(){ hasil.style.left = "50%"; hasil.style.opacity = "1"; }
async function hitung(){
    if (brt1 * brt2 == 0){
        Swal.fire({
          title: "Error",
          text: "Berat tidak boleh nol!",
          icon: "error"
        });
        return;
    }
    tunggu();
    var warnaDipilih = document.querySelector('input[name="warna"]:checked');
    NC = warnaDipilih.value;
    let brt1 = document.getElementById("w1").value;
    let brt2 = document.getElementById("w2").value;
    SG = brt1/(brt1-brt2);
 //   hsl = 
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
