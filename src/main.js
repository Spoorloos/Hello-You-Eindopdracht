import flowchart from "./flowchart.js";
import { keyInSelect, keyInYN } from "readline-sync";

// Print welcome message and title
console.clear();
console.log(`Welkom bij...
 __  ____     __           _______      ________ _   _ _______ _    _ _____  ______ 
|  \\/  \\ \\   / /     /\\   |  __ \\ \\    / /  ____| \\ | |__   __| |  | |  __ \\|  ____|
| \\  / |\\ \\_/ /     /  \\  | |  | \\ \\  / /| |__  |  \\| |  | |  | |  | | |__) | |__   
| |\\/| | \\   /     / /\\ \\ | |  | |\\ \\/ / |  __| |     |  | |  | |  | |  _  /|  __|  
| |  | |  | |     / ____ \\| |__| | \\  /  | |____| |\\  |  | |  | |__| | | \\ \\| |____ 
|_|  |_|  |_|    /_/    \\_\\_____/   \\/   |______|_| \\_|  |_|   \\____/|_|  \\_\\______|
`);

// Game loop
while (keyInYN("Wil je het spel (her)starten?")) {
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
}