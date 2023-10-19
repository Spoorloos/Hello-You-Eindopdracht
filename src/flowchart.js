export const title = ` __  ____     __           _______      ________ _   _ _______ _    _ _____  ______ 
|  \\/  \\ \\   / /     /\\   |  __ \\ \\    / /  ____| \\ | |__   __| |  | |  __ \\|  ____|
| \\  / |\\ \\_/ /     /  \\  | |  | \\ \\  / /| |__  |  \\| |  | |  | |  | | |__) | |__   
| |\\/| | \\   /     / /\\ \\ | |  | |\\ \\/ / |  __| |     |  | |  | |  | |  _  /|  __|  
| |  | |  | |     / ____ \\| |__| | \\  /  | |____| |\\  |  | |  | |__| | | \\ \\| |____ 
|_|  |_|  |_|    /_/    \\_\\_____/   \\/   |______|_| \\_|  |_|   \\____/|_|  \\_\\______|`;

export const flowchart = [
    {
        decision: "Decision 1",
        art: "Example Art",
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