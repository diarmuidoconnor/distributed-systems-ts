import { Friend, Colleague } from "./myTypes";
import { friends, colleagues } from "./01-basics";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

console.log(older(friends[0]));

function allOlder(fs: Friend[]): string[] {
  const result = fs.map((f) => older(f));
  return result;
}

console.log(allOlder(friends));

function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): Colleague[] {
  const lastColleague = highestExtension(cs);
  const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: lastColleague.contact.extension + 1,
    },
  };
  cs.push(newColleague);
  return cs;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
