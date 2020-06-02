const spins = ['|', '/', '-', '\\','|'];
let delay = 100;
for (let i = 0; i < 2; i ++) {
  for (let j = 0; j < spins.length; j ++){
    setTimeout(() => {
      process.stdout.write(`\r${spins[j]}   `);
  }, delay);
  delay += 200;
  }
}