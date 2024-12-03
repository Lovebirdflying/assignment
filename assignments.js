
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
const Pet1 = new Pet('Rat', 'Mammacat', '6')
console.log(Pet1)
console.log(Pet1.PetDetails('hungerLevel'))

Pet1.hungry()

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

const NBook = new Library('Things')
console.log(NBook);

NBook.addBook('HANG MAN')
NBook.addBook('Be There')
console.log(NBook.LibraryDetails());



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
