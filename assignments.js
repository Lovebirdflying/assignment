
// 1. Create a BankAccount object with methods to deposit and withdraw money.

function BankAccount(accountNumber, accountHolder, initialBalance){
    this.accountNumber = accountNumber
    this.accountHolder = accountHolder
    this.initialBalance = parseFloat(initialBalance)

    this.deposit = function(amount){
        
        if(amount > 0) {
            this.initialBalance += amount;
            console.log(`Deposit Successful! New Balance: ${this.initialBalance}`);
        }
        else{
            console.log('deposit must be greater than 0')
        }

             
        
    }

    this.withdraw = function(amount){

        if(amount > 0 && amount<= this.initialBalance ){

            this.initialBalance -= amount;
            console.log(`Withdrawal successful. Your New Balance is ${this.initialBalance}`)    
        }
        else if(amount > this.initialBalance){
            console.log('insufficient Balance.')
        } else{
                 'Withdrawal amount must be greater than 0'       }
    }

 this.info = function(infoType){
    if (infoType === 'accountNumber') {
        return this.accountNumber
        }
    else if(infoType === 'accountHolder'){
        return this.accountHolder
    }
    else if(infoType === 'initialBalance'){
        return this.initialBalance
    }
 }
}

const BankAccount1 = new BankAccount('N1234', 'Omitogun Ganiyu', '200')
console.log(BankAccount1)

BankAccount1.deposit(200);
BankAccount1.withdraw(800);


//  2. Create a Car object with methods to start and stop the engine.


function Car(make, model, engineStatus, owner){
    this.make = make
    this.model = model
    this.engineStatus = engineStatus
    this.owner = owner

    this.start = function(details){
        
        if(details == this.owner) {

            console.log(`Engine started by ${this.owner}`);
        }
        else{
            console.log( "unable to start, I can't find owner footprint")
        }

             
        
    }

    this.stop =  function(){
        
          console.log( 'Engine Turned OFF')
        }

    
 this.info = function(infoType){
    if (infoType === 'make') {
        return this.make
        }
    else if(infoType === 'model'){
        return this.model
    }
    else if(infoType === 'engineStatus'){
        return this.engineStatus
    }
    else if(infoType === 'Owner'){
        return this.owner
    }
 }
}

const car1 = new Car('Bentley', 'BN2025', 'v30 with 60k Horse Power', 'Mr Prince')
console.log(BankAccount1)
console.log(car1.info('make'))
car1.start('Mr done')
car1.stop()

// 3. Create a Book object with methods to read and get book details.

function Book(title, author, pagesRead){
    this.title = title
    this.author = author
    this.pagesRead = parseFloat(pagesRead)

    this.read = function(pages){

        if(pages <= 0){
            console.log(`please enter a positive page numbers`)

            return;
        }
        
        if(pages >= 0 ){
            
            this.pagesRead += pages

            console.log(`You have read ${this.pagesRead}  pages.`)
        }
        else{
            console.log(`This page is not read`)
        }
         
        }
        

        this.details = function(detail){
            if (detail === 'title') {

                return this.title
                }
            else if(detail === 'author'){

                return this.author
            }
            else if(detail === 'pagesRead'){

                return this.pagesRead
            }
            else{
                return 'Invalid details request'
            }
            

        }

    }


const book1 = new Book('Basic Coding for Beginners', 'Mr Prince', '40')
console.log(book1)
console.log(book1.details('pagesRead'))
book1.read(70)


// 4. Create a Student object with methods to enroll in a course and get student details.

function Student(name, age, course){

    this.name = name;
    this.age = age;
    this.course = course;

    this.studentDetails = function(details){

        if (details === 'name') {

            return this.name
            }
        else if(details === 'age'){

            return this.age
        }
        else if(details === 'course'){

            return this.course
        }
        else{
            return 'Invalid details request'
        }
        

    }

    }

    const student1 = new Student('Rose HOC', '30', 'Fin. Tech')

console.log(student1);
console.log(student1.studentDetails('name'))

// #### 5. Create a Product object with methods to apply a discount and get product details.


function Product(productName, price){

    this.productName = productName;
    this.price = parseFloat(price);

    this.giveDiscount = function(discount){

        if(discount <= 0 || discount > 100){
            console.log(`Invalid Discount, please enter discount percentage between 0 - 100.`)

         return;
        }
        const discountAmount = (this.price * discount) / 100

        this.price -= discountAmount

        console.log(`A discount of ${discount} % has been applied. New Price is ${this.price}`)
    }

    this.productDetails = function(details){

        if (details === 'productName') {

            return this.productName
            }
    
        else if(details === 'price'){

            return this.price
        }
        else{
            return 'Invalid details request'
        }
    }
}

const product1 = new Product('Gucci Perfume', "3000")

console.log(product1)
console.log(product1.giveDiscount('10'))
console.log(product1.productDetails('productName'))

// 6. Create a Movie object with methods to play and get movie details.

function Movie(title, director, isPlaying){
    this.title = title;
    this.director = director;
    this.isPlaying = isPlaying
    
    this.play = function(){
        if(this.isPlaying){
            console.log(`The movie ${title} is playing. It's directed by ${this.director}`)
        } else {
            console.log(`invalid play list, please select among the title to play`)
        }
    }

    this.movieDetails = function(details){

        if (details == 'title') {

            return this.title
            }
    
        else if(details == 'director'){

            return this.director
        }
        else{
            return 'Invalid details request'
        }
    }
}

const movie1 = new Movie('PAUL GAMBIT', 'SOYINKA', 'PAUL GAMBIT')
console.log(movie1);
console.log(movie1.play('PAUL GAMBIT'))

// 7. Create a Pet object with methods to feed and get pet details.


function Pet(name, species, hungerLevel){
    this.name = name;
    this.species = species;
    this.hungerLevel = parseFloat(hungerLevel)

    this.hungry = function(){

        if(this.hungerLevel <= 0){
            
console.log(`This ${this.name} is not hungry`) }
else{
    this.hungerLevel -= 1;

    console.log(` This ${name} is hungry, hunger level is ${this.hungerLevel}`)
}
}

this.PetDetails = function (details){

if(details === 'name'){

    return this.name;
}
else if(details === 'species'){
    
    return this.species;
}

else if(details === 'hungerLevel'){

    return this.hungerLevel;
}else { return ' This is an invalid request'}

}
}

Pet.prototype.age = 0;

const Pet1 = new Pet('Rat', 'Mammacat', '6')
const Pet2 = new Pet('dog', 'BIGCAT', '4' )
console.log( Pet1.age = 20)
console.log(Pet1)
console.log(Pet1.PetDetails('hungerLevel'))

function compare(PetA, PetB){

    if(!PetA || !PetB){

        return 'provide valid pair to compare '
    } 
    
 if(PetA.name === PetB.name && PetA.species === PetB.species && PetA.hungerLevel === PetB.hungerLevel){

    return ` Yes Both ${PetA.name} and ${PetB.name} are the same`
 }
 else{ 
    return `compared ${PetA.name} & ${PetB.name}  pets are not the same`
 }
    

}

console.log(compare(Pet1, Pet2))


// 8. Create a Library object with methods to add and get book details.

function Library(name, ListOfBooks = [] ){
    this.name = name;
    this.ListOfBooks = ListOfBooks;

    this.addBook = function(title){
        const book = {title};
        this.ListOfBooks.push(book)

        console.log(`Book ${book.title} has been added to ${this.name}`)

    }

    this.LibraryDetails = function(){

        return {LibraryName:this.name, Books: this.ListOfBooks}
    }
    
}

 Library.prototype.showbook = function(){

    return `here is the book list: ${this.ListOfBooks.map( book => book.title).join(',')}`
 }


const NBook = new Library('Things')
console.log(NBook);


NBook.addBook('HANG MAN')
NBook.addBook('Be There')
console.log(NBook.LibraryDetails());
console.log(NBook.showbook())




//9. Create a Recipe object with methods to add ingredients and get recipe details.


function Recipe(name, ingredients = []){

    this.name = name;
    this.ingredients = ingredients;

    this.addIngredients = function(ingredients){
        this.ingredients.push(ingredients);
        console.log(`Ingredient ${ingredients} has been added to ${this.name} `)
}

this.getRecipeDetails = function(){

    return {
        ingredientName: this.name, ingredients: this.ingredients
    }
}
}

const Nrecipe = new  Recipe('PIZZA')

Nrecipe.addIngredients('Flour');

console.log(Nrecipe)
console.log(Nrecipe.getRecipeDetails())
// 10. Create a FitnessTracker object with methods to log workouts and get tracker details.



function FitnessTracker(owner, listOfWorkout = []){

    this.owner = owner;
    this.listOfWorkout = listOfWorkout

this.logWorkout = function(workout){

    if(workout){

this.listOfWorkout.push(workout)

        console.log(` Workout ${workout} has been logged out for ${this.owner}`)
    }
}

this.trackerDetail = function (){

    return{
        TrackerOwner: this.owner, listOfWorkout: this.listOfWorkout
    }
}
}

const Nlog = new  FitnessTracker('Mr Prince')

Nlog.logWorkout('Morning STrentch');

console.log(Nlog)
console.log(Nlog.trackerDetail())


/* 

Function as arguement: 
Function can be pass to another function as an argument, it makes the code flexible and reusable.
Example: writing a function that great, instead of writing greeting function for everyone, you can use function as an input and make it reusable. 

*/

function sayHello(name){
    console.log(`Hello ${name}!`)
}

function sayGoodbye(name){
    console.log(`GoodBye, please come back again ${name}!`)
}

function greet(name, callback){
    callback(name)// use the function passed as an argument
}

greet('Mr Prince', sayHello)
greet('Miss Rose', sayGoodbye)

/* sayHello and sayGoodbye are functions.
greet is a higher-order function because it takes another function as input.
You can pass different greeting functions (sayHello or sayGoodbye) to make greet flexible.
*/

function double(num){
    return num * 2
}

function square(num){
    return num*num
}

function processinNumb(numbers, operation){

    return numbers.map(operation) // applying operationto each numb     

}

const numbers =[1, 2, 3, 4, 5]
console.log(processinNumb(numbers, double))
console.log(processinNumb(numbers, square))

/*
double and square are functions passed as arguments.
processNumbers applies the passed function (operation) to each number in the array.
*/

// 2. call back function is a function you pass to another function to be call later after a certain task as been completed

function greet(name){
    console.log(`Hello, ${name}!`)
}

function processingUser(callback){
    const userName = "Ganiyu";
     callback(userName)//callback function passed as an argument 
}

processingUser(greet)

function showMessage(){
    console.log(`3 second have passaged !`)
}

setTimeout(showMessage, 3000) // call  the function  after 3000 milliseconds
/*
greet  is the  callback function
processUser calls greet  with  the users name when its ready
*/

// 3. A closure  is a feature  in programming  where a function  retain  access  to the variables  of it outer scope even  after the outer function has finish running 



function outerFunction(){
    let outerVariables = "I'm from the  outer function"

    function innerFunction(){
        console.log(outerVariables) // access outerVariable 
    }

    return innerFunction
}

const closureFunction = outerFunction()// outerfunction runs and return innterFunction

closureFunction()



/* 
innerFunction is a closure.
It retains access to outerVariable even though outerFunction has finished running.

*/

// another closure example

function createCOunter(){
    let count = 0  //variable private

    return function(){
        count++
        console.log(count)
    }
}

const counter = createCOunter()
 counter()
counter()
counter()

//4. This a function that takes another function as argument or return a new function as a result. This makes higher functions incredibly powerful  and flexible  because  they allow  you to write  reusable, modular and customize code.

function  calculate(number, operation){
    return operation(number); // call the function passed as an argument 

}

function double(x){

    return x * 2
}

function square(x){
    
    return x * x;
}

console.log(calculate(9, double))
console.log(calculate(4, square))

/*  

calculate is the higher-order function because it takes a function (operation) as an argument.
You can pass different functions like double or square to customize its behavior.
*/