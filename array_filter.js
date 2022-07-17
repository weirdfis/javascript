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
