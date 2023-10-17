import readline from "readline-sync";
import { flowChart } from "./flowchart.js";

do {
    // Navigate flowchart
    let index = 0;

    while (true) {
        const { decision, art, options } = flowChart.at(index);

        // Clear the console
        console.clear();
 
        // Check if you've reached an end of the flowchart
        if (!options || options.length < 1) {
            console.log(decision);
            break;
        }

        // Check if the decision has ascii art and print it
        if (art) {
            console.log(art + '\n');
        }

        // Print the decision, prompt the options and set the next index
        console.log(decision);
        
        const optionIndex = readline.keyInSelect(
            options.map(v => v.option),
            null,
            { cancel: false }
        );

        index = options[optionIndex].pointsTo;
    }
} while (readline.keyInYNStrict("Wil je het spel herstarten?"))