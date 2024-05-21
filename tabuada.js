
for (let multiplicador = 1; multiplicador <= 80; multiplicador++) {

    console.log("==================");
    console.log("TABUADA DO "+ multiplicador);
    console.log("==================");
        for (let i = 0; i <= 10; i++) {
            const calc = multiplicador * i
                if (multiplicador == i) {
                console.log(multiplicador + " x " + i + " = " + calc + " -> RAIZ QUADRADA")
                } else {
                    console.log(multiplicador + " x " + i + " = " + calc)
                }
        }   
}
