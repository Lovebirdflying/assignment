function Animal( name, colour, legs, horns, wings){
    this.name = name
    this.colour = colour
    this.legs  = legs
    this.horns = horns
    this.wings = wings


}

const animal1 = new Animal( 'Parrot','black & red', '2','0', '2')
const animal2 = new Animal( 'Goat','black & white', '4','2', '0')
const animal3 = new Animal( 'Rabbit','white', '4','0', '0')
const animal4 = new Animal( 'Elephant','black', '4','2', '0')
const animal5 = new Animal( 'Horse','brown', '4','0', '0')


console.log(animal1, animal2, animal3, animal4, animal5)

function Student( name, age, department, email, password){
    this.name = name
    this.age = age
    this.department = department
    this.email = email
    this.password = password
}

const student1 =  new Student('Mr Prince', '40', 'Tech', 'prince@gmail.com', 'MRPRINCE3')
const student2 =  new Student('Wise Wizard', '60', 'Int.Rel', 'wise@yahoo.com', 'Wizard67')
const student3 =  new Student(' Mandate', '45', 'Finance', 'Mand@yahoo.com', 'Monday2')
const student4 =  new Student('Muze Nab', '23', 'Public Admin', 'Muz@mail.com', 'Munual3')
const student5 =  new Student('Tinubu Bola', '79', 'Pol.Sci', 'rose@yahoo.com', 'Nigeria3')


console.log(student1, student2, student3, student4, student5)

function Car(colour, enginePower, brand, price,model){
    this.colour = colour
    this.enginePower = enginePower
    this.brand = brand
    this.price = price
    this.model = model
}

const car1 = new Car('red', 'v8', 'Honda', '90K', '1980')
const car2 = new Car('orange', 'v6', 'Toyota', '$16k', '2008')
const car3 = new Car('Black', 'v12','Range Rover','$120k' , '2024')
const car4 = new Car('Blue', 'v12','Lexus','$20k' , '2021')
const car5 = new Car('Black', 'v12','Prado','$150k' , '2022')
const car6 = new Car('Black', 'v12','Lamboghinni Urus','$200k' , '2023')
const car7 = new Car('Black', 'v12','Benz','$160k' , '2027')

console.log(car1, "\n" , car2, "\n", "\n", car3, "\n", car4, "\n", car5, "\n", car6, "\n" ,car7 )
