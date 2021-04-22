
const isAdult = (age) => age > 17;

const canDrink = (age) => age > 20;

const isSenior = (age) => age>64;
// export default  (age) => age>64;



export { isAdult, isSenior as default, canDrink };