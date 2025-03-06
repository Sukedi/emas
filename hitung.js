let hasil = document.getElementById("hasil");
let input = document.getElementById("w1");
input.addEventListener("input", function() {
hasil.style.left = "-50px";
hasil.style.opacity = "0"; });
function showHasil(){ hasil.style.left = "50%"; hasil.style.opacity = "1"; }
function hitung(){
    tunggu();
    // disini parameter warna...
    let brt1 = document.getElementById("w1").value;
    let brt2 = document.getElementById("w2").value;
    if (brt1 * brt2 == 0){
        Swal.fire({
          title: "Error",
          text: "Berat tidak boleh nol!",
          icon: "error"
        });
        return;
    }
    hsl=brt1/brt2;
    document.getElementById("hasil").innerHTML= "Kadar : "+hsl.toFixed(2);
    document.getElementById("w1").value="";
    document.getElementById("w2").value="";
    document.getElementById("c1").checked = false;
    document.getElementById("c2").checked = false;
    document.getElementById("c3").checked = false;
    showHasil();
}
