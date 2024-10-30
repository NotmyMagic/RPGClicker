let atk = document.getElementById("atk");
let x = 0;
let dmgAcued = [];

function swingSword(e) {
  // console.log("click");
  let y = 0;
  dmgAcued.push(Math.floor(Math.random() * 7));
  for (let i = 0; i < dmgAcued.length; i++) {
    y += dmgAcued[i];
  }
  let hits = (document.getElementById("hits").innerHTML = `${x++}`);
  let dmg = (document.getElementById("dmg").innerHTML = `${y}`);
}
