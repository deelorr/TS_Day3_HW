// 1. Given the data below, define a type alias for representing users.
let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

type Users = {
    name: string,
    age: number,
    company?: string
};

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DaysOfWeek = {
    day1: 'Monday'
    day2: 'Tuesday'
    day3: 'Wednesday'
    day4: 'Thursday'
    day5: 'Friday'
    day6: 'Saturday'
    day7: 'Sunday'
};

// 3. Given the Person class below, create a getter for getting the full name of a person.
class Person {
    constructor(
        public firstName:string, 
        public lastName:string
    ) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
};

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        public salary: number
    ) {
        super(firstName, lastName);
    }
};

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

interface Address {
    street: string;
    city: string;
    zipCode: number;
};

interface Employee {
    name: string;
    salary: number;
    address: Address;
};