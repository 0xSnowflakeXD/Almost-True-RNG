const rng = [];
for (let i = 0x00; i <= 0xFF; i++) {
  rng.push(i);
}

function decimalGenAlgorithm(_in) {
  return parseInt(parseInt(_in).toString() + Date.now().toString().slice(8,12));
}



function genalg() {
  return parseInt(rng[Math.floor(Math.random() * 10)] + decimalGenAlgorithm(rng[parseInt(Date.now().toString().slice(8,10)) || 0]).toString().slice(1,6))
}

// setInterval(() => {
//   console.log(genalg())
// }, 100)