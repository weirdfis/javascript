var message = "0123456789";
var message2 = message.concat(" tambahan")

console.log(message);
console.log(message2);
console.log(message.charCodeAt(3));
console.log(String.fromCodePoint(0x2615, 0x2744, 0x2f40));
console.log(message.toLowerCase()); // toUpperCase
console.log(message.charAt(3));
console.log(message.substr(3,6));
console.log(message.slice(3,6));
console.log(message.split()); // split("")
console.log(message.trim());
console.log(message2.includes("tambahan"));
console.log(message.startsWith("0")); // ("0", 2)
console.log(message.endsWith("9"));
console.log(message.repeat(2));

function konversi() {
  var kon = new String("halo halo");
  console.log(typeof kon);
  console.log(kon);
  var konf = kon.toString();
  console.log(typeof konf);
  console.log(konf);
}

konversi();
