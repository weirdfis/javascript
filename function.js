function fungsi1() {
  console.log("pertama");
}
const fungsi2 = function() {
  console.log("kedua");
}
const fungsi3 = ()=>{
  console.log("ketiga");
}
function mintadata(x=10) {
  console.log(x);
}
function isi() {
  var cari = "isi dari data pap"
  console.log(cari.replace("to", "from"));
}
fungsi1();
fungsi2();
fungsi3();
mintadata();
isi();
