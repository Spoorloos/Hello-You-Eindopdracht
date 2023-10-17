import readline from "readline-sync";
import { flowChart } from "./flowchart.js";

do {
    // Navigate flowchart
    let index = 0;

    while (true) {
        const { decision, art, options } = flowChart.at(index);

        // Check if you've reached an end of the flowchart
        if (!options || options.length === 0) {
            console.log('\n' + decision);
            break;
        }

        // If there's ascii art, print it
        if (art) {
            console.log('\n' + art);
        }

        // Get the options and prompt them
        const optionIndex = readline.keyInSelect(
            options.map(v => v.option),
            decision,
            { cancel: false }
        );

        // Set the index to the one the option points to and print a separator
        index = options[optionIndex].pointsTo;
        console.log('\n' + '='.repeat(25));
    }
} while (readline.keyInYN("Wil je het spel herstarten?"))