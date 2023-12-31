import {
  ColleagueV2,
  Friend,
  Buddy,
  BuddyList,
  Administrator,
} from "./myTypes";
import { friends } from "./01-basics";

const colleague1: ColleagueV2 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: ColleagueV2 = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: ColleagueV2 = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

function makeBuddyList(
  name: string,
  buddies: Buddy[],
  admin?: Administrator
): BuddyList {
  const response: BuddyList = {
    name,
    members: buddies,
    administrator: admin,
  };
  return response;
}

const myFootballBuddies = makeBuddyList(
  "Football team",
  [colleague1, friends[0], colleague2],
  colleague1
);

const myBandBuddies = makeBuddyList(
  "Band team",
  [colleague1, friends[1]]
  // No administrator
);

console.log(myFootballBuddies);
console.log(myBandBuddies);

function findBuddyContact(list: BuddyList, name: string): string | undefined {
  for (const buddy of list.members) {
    if (buddy.name === name) {
      if ("phone" in buddy) {
        return buddy.phone;
      } else {
        return buddy.contact.email;
      }
    }
    return undefined;
  }
}
console.log(
  "Contact buddy at: ",
  findBuddyContact(myFootballBuddies, "Ralph Graham")
);

function getBuddyListFriends(list: BuddyList): Friend[] {
  let friends: Friend[] = []
  const result = list.members.reduce((fs,buddy,index) => {
    if ('phone' in buddy) {
      fs.push(buddy)
    }
    return fs
  },friends)
   return friends
}

console.log(getBuddyListFriends(myFootballBuddies) )
