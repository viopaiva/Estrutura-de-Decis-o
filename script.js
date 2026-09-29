function somaMaior() {
  let a = Number(prompt("digite um número:"))
  let b = Number(prompt("digite outro número:"))
  let c = Number(prompt("digite mais um número:"))
  let soma = a + b;

  if (soma < c) {
    alert("A soma de A + B é:" + soma)
  } else {
    console.log("Fim!")
  }
}
