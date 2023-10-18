import { keyInSelect, keyInYN } from "readline-sync";
import flowchart from "./flowchart.js";

do {
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
                "Vul je antwoord in",
                { cancel: false }
            );
    
            index = options[optionIndex].pointsTo;
        } else {
            break; // Reached an end, break the loop
        }
    }
} while (keyInYN("Wil je het spel herstarten?"))