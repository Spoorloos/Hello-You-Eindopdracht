import { title, flowchart } from "./flowchart.js";
import { keyInSelect, keyInYNStrict } from "readline-sync";

// Print welcome message and title
console.clear();
console.log(`Welkom bij...\n${title}\n`);

// Game loop
while (keyInYNStrict('Wil je het spel (her)starten?')) {
    // Navigate flowchart
    for (let index = 0;;) {
        const { decision, art, options } = flowchart.at(index);

        // Clear the console and print the art and decision
        console.clear();
        console.log((art ? art + "\n\n" : "") + decision);

        // If there's any options, prompt them and set the next index
        if (options?.length > 0) {
            const optionIndex = keyInSelect(
                options.map(v => v.option),
                'Vul je antwoord in',
                { cancel: false }
            );
    
            index = options[optionIndex].pointsTo ?? 0;
        } else {
            break; // Reached an end, break the loop
        }
    }
}