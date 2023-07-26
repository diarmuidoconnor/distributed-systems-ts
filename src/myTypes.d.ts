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
export type Department = "Engineering" | "Finance" | "HR";
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

export interface ColleagueV2 {
  name: string;
  department: Department;
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type FriendPartial = Partial<Friend>

export type EventPass = Omit<Colleague, "contact"> & {
  passCode : number;
}
export type SecureFriendContact = Readonly<Pick<Friend,"name" | "phone" > >

export type friendNColleague = Pick<Friend, 'name' | 'age'> &
Pick<Colleague, 'contact'> 