

class Person{
    constructor(name,job,age){
    this.name = name;
    this.job = job;
    this.age = age;
    };

    exercise() {
        console.log("Exercising sucks!");   
    }
    fetchJob(){
        console.log(this.name + " is a " + this.job)
    }

};

class Programmer extends Person{
    constructor(name,job,age,languages){
        super(name, job, age)
        this.languages = [languages];
        this.busy = true;
    };
    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        if(this.busy){
            console.log(this.name + " would love to take on a new responsibility.")
        }
        else{
            console.log(this.name + " can't accept any new tasks right now.")
        }
    }
    learnLanguage(language){
        this.languages.push(language)
    }
    listLanguages(){
        console.log(this.languages)
    }
}


const programmer1 = new Programmer("Ninoshka Marrero","Student", "24","Javascript");
programmer1.completeTask()
programmer1.offerNewTask()
const programmer2 = new Programmer("Alex Johnson", "Software Developer", "28", "Java")
programmer2.learnLanguage("html")
programmer2.learnLanguage("css")
programmer2.learnLanguage("Javascript")
programmer2.learnLanguage("Python")
programmer2.listLanguages()
const programmer3 = new Programmer("Anthony Sanchez", "Software Tester", "13", "Python")
programmer3.exercise()
programmer3.fetchJob()

console.log(programmer1)
console.log(programmer2)
console.log(programmer3)


