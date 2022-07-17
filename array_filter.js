let peoples = [
  {
    name: "ilham",
    gender: "cowo"
  },
  {
    name: "farel",
    gender: "cowo"
  },
  {
    name:"anisa",
    gender: "cewe"
  }
];

let filtered = peoples.filter(people => {
  return people.gender === "cewe";
});

console.log(filtered);

let angka2 = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

console.log(angka2.filter(angka => {
  return angka > 15;
}));
