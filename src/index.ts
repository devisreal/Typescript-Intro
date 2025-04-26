// * Option 1
// let employee: {
//   id: number;
//   name: string;
// } = { id: 1, name: "" };

// * Option 2
// let employee: {
//   id: number;
//   name: string;
// } = { id: 1, name: "Mosh" };

// * Making property readonly
// let employee: {
//     readonly id: number;
//     name: string;
//   } = { id: 1, name: "Mosh" };

// * Methods
let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
