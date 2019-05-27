/*
    Boss Timer
    A simple Discord bot to notify the users for whenever a boss is spawned (in Black Desert Online EU).
    ---
    Files: "/bot.js"
    Used: JavaScript & Node.JS
    ---
    Heikki Kullas (c) 2019
*/

const Discord = require("discord.js");
const client = new Discord.Client();

const boss_table = [
    [
        "",
        "Kutum & Nouver",
        "Kzarka",
        "Kutum",
        "Nouver",
        "Kzarka",
        "Vell",
        "Garmoth",
        "Kzarka & Nouver"
    ],
    [
        "",
        "Kutum & Karanda",
        "Karanda",
        "Kzarka",
        "Kzarka",
        "Offin",
        "Kutum",
        "Nouver",
        "Kzarka"
    ],
    [
        "",
        "Karanda",
        "Kutum",
        "Kzarka",
        "Nouver",
        "Kutum",
        "Nouver",
        "Karanda",
        "Garmoth",
    ],
    [
        "",
        "Kutum & Kzarka",
        "Karanda",
        "Kzarka",
        "Karanda",
        "",
        "Kutum",
        "Offin",
        "Karanda & Kzarka"
    ],
    [
        "Quint & Muraka",
        "Nouver",
        "Kutum",
        "Nouver",
        "Kutum",
        "Nouver",
        "Kzarka",
        "Kutum",
        "Garmoth"
    ],
    [
        "",
        "Kzarka & Karanda",
        "Nouver",
        "Karanda",
        "Kutum",
        "Karanda",
        "Nouver",
        "Kzarka",
        "Kutum & Kzarka"
    ],
    [
        "",
        "Karanda",
        "Offin",
        "Nouver",
        "Kutum",
        "Nouver",
        "Quint & Muraka",
        "Karanda & Kzarka",
        ""
    ]
];

// HOURS * 60 + ADD_MINUTES = TOTAL_MINUTES
const time_table = [
    0*60+15,
    1*60+15,
    3*60+0,
    6*60+0,
    10*60+0,
    13*60+0,
    17*60+0,
    20*60+0,
    23*60+15
];

let chnl = "boss";
let ntfc = 15;

client.on("ready", () => {
    setInterval(() => {
        const date = new Date();
        const time = date.getHours() * 60 + date.getMinutes();

        for (let i = 0; i < time_table.length; i++) {
            if (time_table[i] - ntfc === time && boss_table[date.getDay()][i] !== "") {
                const channel = client.channels.find("name", chnl);

                if (channel) {
                    channel.send(`@here **${ntfc}** minuutin päästä **${boss_table[date.getDay()][i]}**);
                }

                break;
            }
        }
    }, 60 * 1000);
    
    console.log(`Logged in as "${client.user.tag}"`);
});

client.on("message", msg => {
    const message = msg.content.split(" ");
    if (message[0].toLowerCase() === ".bt" && message.length == 3) {
        if (message[1].toLowerCase() === "channel" || message[1].toLowerCase() === "c") {
            chnl = message[2];

            msg.channel.send(`Uusi kanava: "**${chnl}**"`);

            setTimeout(() => { msg.delete(); }, 1000);
        }
        else if (message[1].toLowerCase() === "notice" || message[1].toLowerCase() === "n") {
            ntfc = message[2];

            msg.channel.send(`Uusi ilmoitusaika: **${ntfc}** minuuttia`);

            setTimeout(() => { msg.delete(); }, 1000);
        }
    }
});

client.login("CLIENT_TOKEN");
