export interface Friend {
  name: string;
  phone: string;
  dob?: Date;
  age: number;
  interests?: string[];
}

export interface Colleague {
  name: string;
  department: string;
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export interface EmailContact {
  name: string;
  email: string;
}

export type Buddy = Friend | ColleagueV2;
export type Department = "Engineering" | "Accounts" | "HR";
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

export type ColleagueV2 =  {
  name: string;
  department: Department;
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}
