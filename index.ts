//Infer types (Implicit Types)

let Name = "Haris";
let subscribers = 30_000;

//Defining Types (Explicit Types)
//

let userName: string = "Haristiks";
let count: number = 123;
let stength: string[] = ["react", "node"];
let number: number[] = [1, 2, 3];
let userDetails: { name: string; age: number } = { age: 20, name: "Haris" };

// Interface

interface Details {
  name: string;
  age: number;
  salary: number;
  getName: () => void;
}

let junierDev: Details = {
  age: 20,
  name: "Farhan",
  salary: 1200,
  getName() {
    console.log(this.name);
  },
};

let seniorDev: Details = {
  age: 25,
  name: " Deb",
  salary: 2000,
  getName() {
    console.log(this.name);
  },
};

// Type

type Assets = {
  name: string;
  age: number;
};

const Abc: Assets = {
  age: 20,
  name: "hjaj",
};

// Union/Optional

type Assetss = {
  name: string;
  age: number | string;
};

let Nber: (number | string)[] = [1, 2, 3];

type jph = {
  name: string;
  age: number;
  salary?: number; //optional
  getName?: () => void; //optional
};

// function

function getUserName(userDetails: Details, adminDetail: Details): string {
  return userDetails.name;
}

getUserName(junierDev, seniorDev);

// Named Types

type StatusType = "pending" | "completed" | "failed" | '';

let currentStatus: StatusType = "";

let statuscode = 200;

if (statuscode === 200) {
    currentStatus = "completed"
    
}