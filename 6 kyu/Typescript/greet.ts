let test = "jericho";

function greet(name: string){
  let output: string = "Hello, " + name + " how are you doing today?";
  return output;
}

const x: string = greet(test);
console.log(x);