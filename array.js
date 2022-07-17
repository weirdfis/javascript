function memanggilarray() {
  var dataNama = [["satu","dua","tiga"],
                  ["pertama","kedua","ketiga"],
                  ["one","two","three"]]
  console.log(dataNama.length);
  console.log(dataNama[0][2]);
}

memanggilarray()
function arrayforeach() {
  var aray = ['a', 'b','c']
  aray.forEach(function (item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  });

}
var data = [8,9,0];
for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}

function arrayshift() {
  var kota = ['jakarta', 'bandung','bekasi'];
  console.log(kota2);
  console.log("=============");
  var kota2 = kota.shift();
  /*
  kota.pop()
  kota.push('depok')
  kota.splice(2,1,'palembang')
  kota.unshift('joga','malang')
  */
  console.log(kota2)

  return kota
}
