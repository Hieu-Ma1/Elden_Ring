let player = {
    health: 100,
}

let boss = {
    health: 100,
    attack: 90,
    time: 5
}

let bosses = [
    {
        name: "Radahn",
        damage: 35
    },
    {
        name: "Melina",
        damage: 25,
    },
    {
        name: "Margit",
        damage: 15,
    },
]

let player_health = document.getElementById("player_health");
let boss_health = document.getElementById("boss_health");

// User Damage and Healing

let attack = document.getElementById("attack");
attack.addEventListener('click', () => {
    if (boss.health <= 0) {
        bosses.pop();
        console.log(bosses)
        boss.health = 100;
    } else {
        boss.health -= 8;
        boss_health_string = String(boss.health + "%");
        boss_health.style.width = boss_health_string;
    }
    if(bosses.length === 0) {
        alert('you won');
        clearInterval(timerId); 
    }
})

let healing_flask = document.getElementById("healing_flask");
healing_flask.addEventListener('click', () => {
    if (player.health >= 80) {
        player.health = 100;
        player_health.style.width = "100%";
    } else {
        player.health += 20;
        player_health_string = String(player.health + "%")
        player_health.style.width = player_health_string;
    }
})

// Boss Damage Mechanic
const bossMechanic = () => {
    console.log("boss damage", bosses[bosses.length - 1].damage)
    player.health -= bosses[bosses.length - 1].damage;
    player_health_string = String(player.health + "%")
    player_health.style.width = player_health_string;
    didPlayerLose();
}

const didPlayerLose = () => {
    if(player.health <= 0 ) {
        clearInterval(timerId); 
        if(player.health <= 0) {
            player_health.style.width = "0%";
            alert('you have lost');
        }
    }
}
let timerId = setInterval(() =>
    bossMechanic(), 2000);
