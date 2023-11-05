export const title = `  ____  ____   ___   ___  _  ____   __     _    ______     _______ _   _ _____ _   _ ____  _____ 
 / ___||  _ \\ / _ \\ / _ \\| |/ /\\ \\ / /    / \\  |  _ \\ \\   / / ____| \\ | |_   _| | | |  _ \\| ____|
 \\___ \\| |_) | | | | | | | ' /  \\ V /    / _ \\ | | | \\ \\ / /|  _| |  \\| | | | | | | | |_) |  _|  
  ___) |  __/| |_| | |_| | . \\   | |    / ___ \\| |_| |\\ V / | |___| |\\  | | | | |_| |  _ <| |___ 
 |____/|_|    \\___/ \\___/|_|\\_\\  |_|   /_/   \\_\\____/  \\_/  |_____|_| \\_| |_|  \\___/|_| \\_\\_____|`;

export const flowchart = [
    // Root 1
    { // 0
        decision: 'You find yourself alone in a spooky forest on halloween night. Which path do you take?',
        art:`⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣼⣦⠀⠀⣠⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣆⠀⠀⠀⠀⠀
⠀⠀⠒⣿⣿⣿⠓⠀⠀⠻⣿⣿⠀⢀⣴⣿⣦⡀⠀⢀⣾⣦⠘⢿⣿⣧⡀⠀⠀⠀
⠀⢀⣴⣿⡿⠃⡄⠈⠻⣿⣟⣉⣀⠉⣽⡿⠋⠡⠴⣿⣿⣿⠓⠀⠙⢇⠀⠀⠀⠀
⠀⠿⣿⠟⢁⣾⣿⣦⣀⠘⠿⠟⢁⣼⣿⣿⣷⠂⣴⣿⣿⣿⣆⠘⢶⣶⣿⠶⠤⠀
⠀⣀⣀⡀⢉⣿⣿⣿⡍⠀⢀⣀⠙⢻⠿⢋⣤⣾⣿⣿⣿⣿⣿⣷⣄⠙⢿⣦⡀⠀
⠀⠟⠋⣠⣾⣿⣿⣿⣿⣦⣌⠉⠠⣤⣤⣤⡌⢙⣿⣿⣿⣿⣿⣿⠛⠛⠂⢈⣙⠀
⠀⠀⣉⡉⣹⣿⣿⣿⣿⣏⠉⣉⣀⣈⠙⠋⣠⣿⣿⣿⣿⣿⣿⣿⣆⠙⠛⠛⠛⠀
⠀⠀⠋⣴⣿⣿⣿⣿⣿⣿⣷⣌⠉⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
⠀⠴⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠦⠈⣙⠛⠛⠛⠛⠛⠛⠛⠛⣉⣉⠁⠀⠀⠀
⠀⠀⣦⣤⡄⢉⣉⣉⣉⠉⣡⣤⠀⠀⠀⣿⣿⣷⠀⢰⣿⣿⡇⢸⣿⣿⠀⠀⠀⠀
⠀⠀⣿⣿⡇⣸⣿⣿⣿⡄⢻⣿⠀⠀⠀⣿⣿⣿⠀⢸⣿⣿⡇⢸⣿⣿⠀⠀⠀⠀
⠀⠀⣿⣿⠁⣿⣿⣿⣿⡇⠸⠿⠀⠀⠀⣿⣿⣿⠀⢸⣿⣿⣇⠸⣿⣿⠀⠀⠀⠀
⠀⠀⠛⠛⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠉⠉⠉⠀⢸⣿⣿⣿⠀⠿⠿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠛⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉`,
        options: [
            { option: 'Take a dark and winding path', pointsTo: 1 },
            { option: 'Follow a faint, eerie light', pointsTo: 4 }
        ]
    },
    { // 1
        decision: 'You chose the dark and winding path. A ghostly figure appears! What do you do?',
        art: `       .-.
      ( " )
   /\\_.' '._/\\
   |         |
    \\       /
     \\    /\`
   (__)  /
   \`.__.'`,
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
        art: `                                              ,           ^'^  _
                                              )               (_) ^'^
         _/\\_                    .---------. ((        ^'^
         (('>                    )\`'\`'\`'\`'\`( ||                 ^'^
    _    /^|                    /\`'\`'\`'\`'\`'\`\\||           ^'^
    =>--/__|m---               /\`'\`'\`'\`'\`'\`'\`\\|
         ^^           ,,,,,,, /\`'\`'\`'\`'\`'\`'\`'\`\\      ,
                     .-------.\`|\`\`\`\`\`\`\`\`\`\`\`\`\`|\`  .   )
                    / .^. .^. \\|  ,^^, ,^^,  |  / \\ ((
                   /  |_| |_|  \\  |__| |__|  | /,-,\\||
        _         /_____________\\ |")| |  |  |/ |_| \\|
       (")         |  __   __  |  '==' '=='  /_______\\     _
      (' ')        | /  \ /  \ |   _______   |,^, ,^,|    (")
       \\  \\        | |--| |--| |  ((--.--))  ||_| |_||   (' ')
     _  ^^^ _      | |__| |("| |  ||  |  ||  |,-, ,-,|   /  /
   ,' ',  ,' ',    |           |  ||  |  ||  ||_| |_||   ^^^
.,,|RIP|,.|RIP|,.,,'==========='==''=='==''=='======='`,
        options: [
            { option: 'Yes, I\'m feeling brave', pointsTo: 5 },
            { option: 'No, It\'s too scary', pointsTo: -2 }
        ]
    },
    { // 5
        decision: 'You enter the haunted house and meet a witch. She offers a magical potion. Will you drink it?',
        art: `      _____
     \`.___,'
      (___)
      <   >
       ) (
      /\`-.\\
     /     \\
    / _    _\\
   :,' \`-.' \`:
   |         |
   :         ;
    \\       /
     \`.___.'`,
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
        art: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣔⡿⠛⠒⠒⡕⢄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣴⣳⠃⠀⠀⠀⠀⠘⢎⡦⣄⠀⠀⠀⠀
⠀⠀⠀⣜⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⣳⠀⠀⠀
⠀⠀⢸⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⡆⠀⠀
⠀⠀⠘⡏⢀⢴⠶⣤⢄⢲⣲⠦⣦⣤⡤⡀⡇⠇⠀⠀
⠀⠀⠀⣧⠀⣾⢀⣸⡸⠘⢸⠀⣿⠀⣸⡏⣧⠀⠀⠀
⠀⠀⠀⢹⠀⣿⠿⡯⡀⢀⣼⢀⣿⠛⠉⠀⢻⠀⠀⠀
⠀⠀⠀⣿⠐⠛⠂⠘⠛⠒⠛⠊⠛⠂⠀⢸⢸⠀⠀⠀
⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡼⠀⠀⠀
⠀⠀⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀
⠀⠀⢀⢾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡷⡀⠀⠀
⠀⣠⠃⠘⠊⠉⠛⠛⠋⠩⠩⠭⠍⠛⠛⠛⠃⠐⡄⠀
⠀⣯⡉⠉⢉⡉⠉⠉⠉⠉⠉⠉⣉⣉⣉⣉⣉⣉⣹`,
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
        art: `         __________
        /\\____;;___\\
       | /         /
       \`. ())oo() .
        |\\(%()*^^()^\\
       %| |-%-------|
      % \\ | %  ))   |
      %  \\|%________|`,
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
        art: `              (
               )  )
           ______(____
          (___________)
           /         \\
          /           \\
         |             |
     ____\\             /____
    ()____'.__     __.'____()
    jgs  .'\` .'\`\`\`'. \`-.
        ().'\`       \`'.()`,
        options: [
            { option: 'Take a sip', pointsTo: 14 },
            { option: 'Politely decline and move on', pointsTo: -6 }
        ]
    },
    { // 14
        decision: 'You took a sip, and the witch\'s brew transformed you into a black cat. However - not all hope is lost. You continue your adventure as a cat! What will you do next?',
        options: [
            { option: 'Panic and run off', pointsTo: 15 }
        ]
    },
    { // 15
        decision: 'You ran off and found a spooky mansion hidden in the woods, what will you do?',
        options: [
            { option: 'Investigate', pointsTo: 16 },
            { option: 'No, it\'s too spooky', pointsTo: -8 }
        ]
    },
    { // 16
        decision: 'You enter the mansion and find a yourself in a haunted ballroom. Since you\'re a cat the dancing ghosts don\'t notice you. What will you do?',
        options: [
            { option: 'Try to attract the attention of the ghosts', pointsTo: 17 },
            { option: 'Leave', pointsTo: -7 }
        ]
    },
    { //17
        decision: 'You decided to attract the attention of the ghosts. One of them looks at you and somehow notices you\'re not a real cat. You\'re in luck because it happens to be a friendly ghost! He transforms you back into a human and shows you a hidden exit.',
        options: [
            { option: 'Leave the mansion', pointsTo: -9 },
            { option: 'Investigate the mansion further', pointsTo: 21 }
        ]
    },
    { // 18
        decision: 'On the second floor of the mansion you find a strange room and you decide to enter. In the room you find a small box with a strange aura coming off of it. What are you gonna do?',
        options: [
            { option: 'Open the box', pointsTo: 19 },
            { option: 'Investigate the room further', pointsTo: 21 }
        ]
    },
    { // 19
        decision: 'You find a letter inside the box, the letter says there\'s a treasure hidden in the mansion somewhere in the basement. What will you do?',
        options: [
            { option: 'Try finding the treasure', pointsTo: 20 },
            { option: 'Leave the mansion', pointsTo: -9 }
        ]
    },
    { // 20
        decision: 'You went down to the basement and after looking around for a while you found a vault behind a painting. The vault is already unlocked and the treasure is gone already!',
        options: [
            { option: 'Leave the mansion', pointsTo: -9 }
        ]
    },
    { // 21
        decision: 'You find a bunch of jewelry hidden under the bed! Will you take it or are you afraid it might be cursed?',
        options: [
            { option: 'Take the jewelry', pointsTo: 22 },
            { option: 'Leave it and leave the mansion', pointsTo: -9 }
        ]
    },
    { // 22
        decision: 'You took the jewelry and you notice nothing strange about it so far. What are you gonna do?',
        options: [
            { option: 'Put the jewelry back and leave the mansion', pointsTo: -9 },
            { option: 'Leave the mansion with the jewelry', pointsTo: -9 }
        ]
    },


    // Endings
    { decision: 'Outside the mansion you find a path leading out the forest and you found your way back home!' }, // -9
    { decision: 'Outside the mansion you find a path leading out the forest and you found your way back home. But.. you\'re still a cat!' }, // -8
    { decision: 'Unfortunately, the door you entered the mansion with has disappeared, and you\'re now stuck for eternity. Game over!' }, // -7
    { decision: 'You found your way out of the forest and got back home!' }, // -6
    { decision: 'The ghouls turned out not to be friendly, and they killed you. Game over!' }, // -5
    { decision: 'The evil witch insisted you take it, and after continuously declining she kills you. Game over!' }, // -4
    { decision: 'You decided to freak out, and the witch killed you. Game over!' }, // -3
    { decision: 'You turned back and ran home. The night ends peacefully.' }, // -2
    { decision: 'You screamed and ran away from the ghost. Unfortunately, you tripped and fell. Game over!' } // -1
];
  