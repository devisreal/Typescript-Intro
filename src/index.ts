type Customer = {
  birthday?: Date;
  //   * Make optional with "?"
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

// * Old way
// let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) {
//   console.log(customer);
// }

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.("a");
