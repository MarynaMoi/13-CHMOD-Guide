let num = Number(prompt("Entered"));
console.log(num);
if (Number.isNaN(num) || !Number.isInteger(num) || num < 0 || num > 7) {
  console.log("Entered wrong data");
} else {
  switch (num) {
    case 0:
      console.log("---");
      break;
    case 1:
      console.log("--x");
      break;
    case 2:
      console.log("-w-");
      break;
    case 3:
      console.log("-wx");
      break;
    case 4:
      console.log("r--");
      break;
    case 5:
      console.log("r-x");
      break;
    case 6:
      console.log("rw-");
      break;
    case 7:
      console.log("rwx");
      break;
    default:
  }
}
