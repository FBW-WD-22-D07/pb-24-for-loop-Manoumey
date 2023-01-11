// # Grundlagen der Programmierung: For-Schleifen

// **Schreibe deine Antworten in solution.js**

// Diese Übungen sind zum Üben von "for"-Schleifen gedacht. Gib alle deine Ergebnisse in der Konsole aus.

// 1. **Addition.**
// Schreibe ein Programm, das die Zahlen von 1 bis 20 addiert.

let s = 1;

for (let i = 1; i <= 19; i++) {

    s = s + (i + 1);
}
console.log(s);


// 2. **Es befinden sich i Bierflaschen an der Wand.**
// Schreibe ein Programm, das ausgibt: "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall", bis es fünf Flaschen sind.

for (let i = 1; i <= 5; i++) {

    if (i === 1) {
        console.log(`There is  ${i} bottle of beer on the wall`);
    } else {

        console.log(`There are ${i} bottle of beer on the wall`);
    }

}



// 3. **Der ungerade/gerade Reporter.**
// Schreibe ein Programm, das von 0 bis 20 iteriert. Bei jedem Durchlauf prüft es, ob die aktuelle Zahl gerade oder ungerade ist. Das Ergebnis der Überprüfung soll in der Konsole ausgegeben werden (z.B. "2 is even").

for(let i=0; i<=20; i++){

    if(i % 2 === 0){
        console.log(`${i} is even`);
    } else{
        console.log(`${i} is odd`);
    }

}



// 4. **Multiplikationstabellen.**
// Schreibe ein Programm, das von 0 bis 10 iteriert. Bei jedem Durchlauf der for-Schleife multipliziert es die Zahl mit 9 und protokolliert das Ergebnis (z. B. "2 * 9 = 18").
// **Bonus:** Verwende eine verschachtelte for-Schleife, um die Tabellen für jeden Multiplikator von 1 bis 10 anzuzeigen (insgesamt 100 Ergebnisse).

for(let i=1; i<=10; i++){

    console.log(`${i} * 9 = ${i * 9}`);
    

}

for(let i=1; i<=10; i++){
console.log("**********************");
for(let j=1; j<=10; j++){

    console.log(`${i} * ${j} = ${i * j}`);
    

}
}

// 5. **Fizz Buzz**
// Schreibe ein Programm, das die ganzen Zahlen von 1 bis 100 durchläuft. Aber für Vielfache von drei gibst du statt der Zahl "Fizz" und für Vielfache von fünf "Buzz" aus. Für Zahlen, die sowohl ein Vielfaches von drei als auch von fünf sind, gebe "FizzBuzz" aus.



// 6. **Summe der Vielfachen**
// Schreibe ein Programm, um die Vielfachen von 3 und 5 unter 1000 zu addieren.

// **Bonus**

// 7. Schreibe Programme, die zu folgenden Ausgaben in der Konsole führen:
// >100 200 300 400 500 600 700 800 900 1000
// >
// >0 2 4 6 8 10
// >
// >3 6 9 12 15
// >
// >9 8 7 6 5 4 3 2 1 0
// >
// >1 1 1 2 2 2 3 3 3 4 4 4
// >
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

