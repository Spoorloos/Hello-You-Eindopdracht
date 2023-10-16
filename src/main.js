// Packages
const readline = require("readline-sync");
const { flowChart } = require("./flowchart");

// Navigate flowchart
let index = 0;

while (true) {
    const { decision, options } = flowChart.at(index);

    if (!options || options.length === 0) {
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