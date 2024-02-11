const ContadorSumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  const dado1 = Math.ceil(Math.random() * 6);
  const dado2 = Math.ceil(Math.random() * 6);
  const suma = dado1 + dado2;

  ContadorSumas[suma - 2]++;
}
for (let i = 0; i < ContadorSumas.length; i++) {
  document.write(
    `Suma ${i + 2}🎲🎲---- ${ContadorSumas[i]} apariciones <br><br>`
  );
}
