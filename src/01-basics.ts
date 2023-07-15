// Add your own friends below

export interface Friend {
    name: string;
    phone: string;
    age: number
}

const friend1 : Friend = {
  name: "Paul Fleming",
  phone: "087-12345",
  age: 25,
};

const friend2 = {
  name: "Jane Costello",
  phone: "086--12345",
  age: 31,
};

export const friends = [friend1, friend2];
console.log(friends[1]);
console.log('ttttttttttttttt');

//   -------------------
export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

const colleague1 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

export const colleagues = {
  current: [colleague1, colleague2],
  former: [],
};

console.log(colleagues.current[0]);
