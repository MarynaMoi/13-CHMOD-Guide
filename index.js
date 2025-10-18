let num = Number(prompt("Enter a number from 0 to 7:"));
console.log(num);
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
    default: console.log("Entered wrong data");
  }
