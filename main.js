
function compareobj  (obj1 , obj2){
  const key1 = Object.keys(obj1);
  const key = Object.keys(obj2);

  for(let key of obj2){
    if(obj1[key] !== obj2[key]){
      return false
    }
  };

  return true
};

const obj1= { name: "John", age: 23, degree: "CS" }
  const   obj2={age: 23, degree: "CS"}



console.log(compareobj(obj1 , obj2));

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))