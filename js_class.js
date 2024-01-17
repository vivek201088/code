class Person {
    constructor(name){
        this.name=name
    }
    

    getName(){
        console.log(this.name+" is a person.");
    }
}

class Student extends Person{
   constructor(name,regno){
    super(name)
    this.regno=regno
   }

   getRegno(){
    console.log(this.name+" RegNo is " +this.regno);
   }
}

const newStudent=new Student('Vivek',101)
newStudent.getName()
newStudent.getRegno()