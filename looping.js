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
FOR()
DOWHILE()