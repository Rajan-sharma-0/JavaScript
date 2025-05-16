
function studentAddress  (address)  {
    this.address = address
    console.log('called  ');
    
}



    
function studentData(name, age, roleNo, address){
    this.name = name
    this.age = age
    this.roleNo = roleNo
    studentAddress.call(this, address)
      
}

const student = new studentData('rajan', 22, 1234, 'm-block')
console.log(student);  


 prime = function(num){
    if(num === 2)return true

    
}
