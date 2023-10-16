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
    },
    {
        decision: "Gefeliciteerd, je bent bij het goede einde terecht gekomen."
    }
];

// Navigate flowchart
let index = 0;

while (true) {
    const { decision, options } = flowChart.at(index);

    if (!options) {
        console.log('\n' + decision);
        break;
    }

    const optionIndex = readline.keyInSelect(
        options.map(v => v.option),
        decision,
        { cancel: false }
    );

    index = options[optionIndex].pointsTo;
    console.log('\n' + '='.repeat(25));
}