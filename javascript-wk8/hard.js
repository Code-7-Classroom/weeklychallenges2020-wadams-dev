/*
  Hard
*/

function customers(){

  function customerOne(){
    var pii = {
    name: 'John Doe',
    ssn: 123122345
  }
  return pii.name;
  }
  return customerOne();
}

console.log(customers());
