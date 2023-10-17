import readline from "readline-sync";
import { flowChart } from "./flowchart.js";

do {
    // Navigate flowchart
    let index = 0;

    while (true) {
        const { decision, art, options } = flowChart.at(index);

        // Print a seperator
        console.log('\n' + '='.repeat(50));

        // Check if you've reached an end of the flowchart
        if (!options || options.length === 0) {
            console.log('\n' + decision);
            break;
        }

        // If there's ascii art, print it
        if (art) {
            console.log('\n' + art);
        }

        // Get the options, prompt them and set the next index
        const optionIndex = readline.keyInSelect(
            options.map(v => v.option),
            decision,
            { cancel: false }
        );

        index = options[optionIndex].pointsTo;
    }
} while (readline.keyInYNStrict("Wil je het spel herstarten?"))