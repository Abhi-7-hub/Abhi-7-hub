const person = {
  name: "Abhishek",
  greet: function() {
    console.log(this.name);
  }
};
person.greet(); // Output: Abhishek


"Yahaan this refers to the object person, kyunki greet method usi ka part hai."
"jab console.log krna hoga to batana hoga ye name kis object ka hai isline this.name se pata chalta hai "