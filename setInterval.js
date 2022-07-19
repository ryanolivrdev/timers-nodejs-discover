// setInterval ira rodar uma funcao n vezes
// depois de x milissegundos
const timeOut = 1000

const checking = () => {
  for (let i = 0; i < 10; i++) {
    console.log("Checking " + num + " " + i)
  }
}

for (let i = 0; i < 3; i++) {
  setInterval(checking, timeOut)
  var num = i
}
