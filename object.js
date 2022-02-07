function memintabarang() {
  var mobil = {
    type: 'sedan',
    harga: 1000,
    warna: 'hitam'
  }
  console.log(mobil);
  console.log(mobil.warna);
}
function halo() {
  return "halo teman2";
}
function fungsiobjek() {
  var x = {
    pesan: halo()
  }
  console.log(x.pesan);
}
fungsiobjek();
