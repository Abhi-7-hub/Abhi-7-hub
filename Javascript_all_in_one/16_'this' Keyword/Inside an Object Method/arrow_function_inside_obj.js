const obj = {
  name: "Abhishek",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // Output: undefined " arrow functionme nahi us ekr skte"
