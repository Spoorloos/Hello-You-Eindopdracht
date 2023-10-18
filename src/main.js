import readline from "readline-sync";
import { flowChart } from "./flowchart.js";

do {
    // Navigate flowchart
    for (let index = 0;;) {
        const { decision, art, options } = flowChart.at(index);

        // Clear the console and print the art and decision
        console.clear();
        console.log((art ? art + "\n\n" : "") + decision);

        // If there's any options, prompt them and set the next index
        if (options?.length > 0) {
            const optionIndex = readline.keyInSelect(
                options.map(v => v.option),
                "Vul je antwoord in",
                { cancel: false }
            );
    
            index = options[optionIndex].pointsTo;
        } else {
            break; // Reached an end, break the loop
        }
    }
} while (readline.keyInYNStrict("Wil je het spel herstarten?"))