export const title = `  ____  ____   ___   ___  _  ____   __     _    ______     _______ _   _ _____ _   _ ____  _____ 
 / ___||  _ \\ / _ \\ / _ \\| |/ /\\ \\ / /    / \\  |  _ \\ \\   / / ____| \\ | |_   _| | | |  _ \\| ____|
 \\___ \\| |_) | | | | | | | ' /  \\ V /    / _ \\ | | | \\ \\ / /|  _| |  \\| | | | | | | | |_) |  _|  
  ___) |  __/| |_| | |_| | . \\   | |    / ___ \\| |_| |\\ V / | |___| |\\  | | | | |_| |  _ <| |___ 
 |____/|_|    \\___/ \\___/|_|\\_\\  |_|   /_/   \\_\\____/  \\_/  |_____|_| \\_| |_|  \\___/|_| \\_\\_____|`;

export const flowchart = [
    // Root 1
    { // 0
        decision: 'You find yourself alone in a spooky forest on halloween night. Which path do you take?',
        options: [
            { option: 'Take a dark and winding path', pointsTo: 1 },
            { option: 'Follow a faint, eerie light', pointsTo: 4 }
        ]
    },
    { // 1
        decision: 'You chose the dark and winding path. A ghostly figure appears! What do you do?',
        options: [
            { option: 'Approach cautiously', pointsTo: 2 },
            { option: 'Scream and run', pointsTo: -1 }
        ]
    },
    { // 2
        decision: 'You approach the ghost cautiously. It\'s a friendly ghost offering you candy! What do you do?',
        options: [
            { option: 'Accept the candy', pointsTo: 3 },
            { option: 'Decline politely', pointsTo: 3 }
        ]
    },
    { // 3
        decision: 'After your encounter with the ghost, the faint, eerie light appears again.',
        options: [
            { option: 'Your curiosity gets the best of you', pointsTo: 4 }
        ]
    },


    // Root 2
    { // 4
        decision: 'You followed the faint, eerie light, leading to a haunted house. Do you enter?',
        options: [
            { option: 'Yes, I\'m feeling brave', pointsTo: 5 },
            { option: 'No, I\'ts too scary', pointsTo: -2 }
        ]
    },
    { // 5
        decision: 'You enter the haunted house and meet a witch. She offers a magical potion. Will you drink it?',
        options: [
            { option: 'Drink the potion', pointsTo: 6 },
            { option: 'Politely decline', pointsTo: -4 }
        ]
    },
    { // 6
        decision: 'You drink the witch\'s magical potion and gain magical powers... Or so you thought, after a minute you start feeling sick. What are you gonna do?',
        options: [
            { option: 'Freak out', pointsTo: -3 },
            { option: 'Take another magical potion you see laying on her desk', pointsTo: 7 }
        ]
    },
    { // 7
        decision: 'The second potion you took turned out to be a remedy!',
        options: [
            { option: 'You run out of the witch\'s house and continue your journey', pointsTo: 8 }
        ]
    },


    // Root 3
    { // 8
        decision: 'While continuing your journey, you come across a creepy graveyard. What will you do?',
        options: [
            { option: 'Explore the graveyard', pointsTo: 9 },
            { option: 'Avoid it and keep going', pointsTo: 12 }
        ]
    },
    { // 9
        decision: 'You explore the graveyard and find a tombstone with your name on it. What do you do?',
        options: [
            { option: 'Investigate further', pointsTo: 10 },
            { option: 'Freak out and run away', pointsTo: 13 }
        ]
    },
    { // 10
        decision: 'You investigate further and discover a hidden treasure beneath the tombstone!',
        options: [
            { option: 'Take the treasure', pointsTo: 11 },
            { option: 'Leave it and move on', pointsTo: 13 }
        ]
    },
    { // 11
        decision: 'You took the treasure and got rich!',
        options: [
            { option: 'Continue your spooky adventure', pointsTo: 13 }
        ]
    },
    { // 12
        decision: 'You keep going and encounter a group of friendly ghouls having a party. Do you join them?',
        options: [
            { option: 'Join the ghoul party', pointsTo: -5 },
            { option: 'Move on', pointsTo: 13 }
        ]
    },


    // Root 4
    { // 13
        decision: 'While continuing, you stumble upon a witch\'s cauldron. She offers you a brew. Will you drink it?',
        options: [
            { option: 'Take a sip', pointsTo: -6 },
            { option: 'Decline politely and move on', pointsTo: -6 }
        ]
    },

    // Endings
    { decision: 'You take a sip, and the witch\'s brew transforms you into a black cat. Game over!' },
    { decision: 'You found your way out of the forest and got back home!' },
    { decision: 'The ghouls turned out not to be friendly, and they killed you. Game over!' },
    { decision: 'The evil witch insisted you take it, and after continuously declining she kills you. Game over!' },
    { decision: 'You decided to freak out, and the witch killed you. Game over!' },
    { decision: 'You turned back and ran home. The night ends peacefully.' },
    { decision: 'You screamed and ran away from the ghost. Unfortunately, you tripped and fell. Game over!' }
];
  