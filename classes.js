class Person {
    constructor (firstName, lastName, age, gender, interests) {
        this.name = `${firstName} ${lastName}`;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = this.makeBio();
    }

    get greeting() {
    return (`Hi, I'm ${this.name}`)
        }
   
    makeBio() {
// //             const male = {pronoun: "he", prefix: "Mr."};
// //             const female = {pronoun: "she", prefix: "Ms."};
// //             const other = {pronoun: "they", prefix: "Mx."};
// //             this.genderHandler = {male, female, other};
// //             for (let index in this.genderHandler) {
//             if (this.gender === this.genderHandler[index]) {
//                 this.genderBio = `${this.name} is ${this.age} years old, ${this.genderHandler[index].pronoun} likes ${this.interests}`;
//                 return(this.genderBio)
//             }
// //         }
//             return this.genderBio;
        if (this.gender === "male") {
    return (`${this.name} is ${this.age} years old, he likes ${this.interests}`); 
    } else if (this.gender === "female") {
    return (`${this.name} is ${this.age} years old, she likes ${this.interests}`); 
    } else {
        return (`${this.name} is ${this.age} years old, they like ${this.interests}`)
    }

    }
    

}

class Teacher extends Person{
    constructor(firstName, lastName, age, gender, interests, subject) {
        super(firstName, lastName, age, gender, interests);
        this.lastName = lastName;
        this.subject = subject;
    }
   get greeting() {
       if (this.gender === "male") {
    this.prefix = "Mr."
    } else if (this.gender === "female") {
      this.prefix = "Ms."        
      } else {
       this.prefix = "Mx."
    }
    return (`Hello, my Name is ${this.prefix} ${this.lastName}, and I teach ${this.subject}`)
    } 
}

class Student extends Person {
   constructor(firstName, lastName, age, gender, interests) {
        super(firstName, lastName, age, gender, interests);
        this.firstName = firstName;
    }
    get greeting() {
            return (`Yo! I'm ${this.firstName}`)
            }
}

