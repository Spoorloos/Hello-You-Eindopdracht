// Packages
const readline = require("readline-sync");

// Flowchart
const flowChart = [
    {
        decision: "Decision 1",
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
    }
];

const endings = [
    "Gefeliciteerd, je bent bij het goede einde terecht gekomen",
    "Helaas, je bent bij het slechte einde terecht gekomen",
    "Je bent bij het normale einde terecht gekomen"
];

// Main
let index = 0;

do {
    const { decision, options } = flowChart[index];
    const option = readline.keyInSelect(options.map(v => v.option), decision, { cancel: false });

    index = options[option].pointsTo;

    console.log('\n' + '='.repeat(25));
} while (index >= 0)

console.log('\n' + endings[Math.abs(index) - 1]);