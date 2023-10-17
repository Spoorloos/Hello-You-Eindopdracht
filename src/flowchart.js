//import * as asciiArt from "./ascii_art.js";

export const flowChart = [
    {
        decision: "Decision 1",
        //art: asciiArt.exampleArt,
        options: [
            { option: "Option 1", pointsTo: 2 },
            { option: "Option 2", pointsTo: 1 }
        ]
    },
    {
        decision: "Decision 2",
        options: [
            { option: "Option 1", pointsTo: 0 },
            { option: "Option 2", pointsTo: 2 }
        ]
    },
    {
        decision: "Decision 3",
        options: [
            { option: "Option 1", pointsTo: 0 },
            { option: "Option 2", pointsTo: -1 }
        ]
    },
    {
        decision: "Gefeliciteerd, je bent bij het goede einde terecht gekomen."
    }
];