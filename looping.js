function FOR() {
  for (var i = 0; i < 10; i++) {
    console.log("urutan ke ", i);
  }
}
function WHILE() {
  let i = 1;
  while (i<10) {
    console.log("ke-", i);
    i++;
  }
}
function DOWHILE() {
  let i = 0;
  do {
    console.log("nomer", i);
    i++;
  } while (i<10);
}
function infinity() {
  for (var i = 0; i >= 0; i++) {
    console.log(i)();
  }
}
function forof() {
  var angka = [0,1,3,5,7,9];
  for (let x of angka) {
    console.log(x);
  }
}
function forin() {
  var bio = {
    nama: 'ilham',
    umur: 17,
    hobi: 'nyanyi'
  }
  for (let x in bio) {
    console.log(bio[x]);
  }
}
forof()
