const calculateDamage = (yourType, opponentType, attack, defense) => {
    const damageTable = {
        "fire": {
            "fire": 0.5,
            "grass": 2,
            "water": 0.5,
            "electric": 1 
        },
        "grass": {
            "fire": 0.5,
            "grass": 0.5,
            "water": 2,
            "electric": 1 
        },
        "water": {
            "fire": 2,
            "grass": 0.5,
            "water": 0.5,
            "electric": 0.5
        },
        "electric": {
            "fire": 1,
            "grass": 1,
            "water": 2,
            "electric": 0.5 
        }
    }
    return 50 * (attack / defense) * damageTable[yourType][opponentType];
}

console.log(calculateDamage("fire", "water", 100, 100));

/*

It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):

damage = 50 * (attack / defense) * effectiveness
Where:

attack = your attack power
defense = the opponent's defense
effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
Effectiveness:

Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.

Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage
To prevent this kata from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:

fire > grass

fire < water

fire = electric

water < grass

water < electric

grass = electric

For this kata, any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if A is super effective against B, then B is not very effective against A).

The function you must implement takes in:

your type
the opponent's type
your attack power
the opponent's defense


const {assert} = require("chai");

describe("Sample tests", () => {
  it("Tests", () => {
    assert.equal(calculateDamage("fire", "water", 100, 100), 25);
    assert.equal(calculateDamage("grass", "water", 100, 100), 100);
    assert.equal(calculateDamage("electric", "fire", 100, 100), 50);
    assert.equal(calculateDamage("grass", "electric", 57, 19), 150);
    assert.equal(calculateDamage("grass", "water", 40, 40), 100);
    assert.equal(calculateDamage("grass", "fire", 35, 5), 175);
    assert.equal(calculateDamage("fire", "electric", 10, 2), 250);
  });
});

*/