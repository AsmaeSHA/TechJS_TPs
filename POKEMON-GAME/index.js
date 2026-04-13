const { getPokemonByName, getRandomPokemon, buildFighterFromPokemon } = require("./api");
const { createInterface, askQuestion, startBattle } = require("./game");

async function main() {
  const rl = createInterface();

  console.log("=====================================");
  console.log("   MINI JEU POKEMON - NODE.JS");
  console.log("=====================================");

  try {
    const playerPokemonName = await askQuestion(
      rl,
      "Entre le nom de ton Pokémon : "
    );

    const playerPokemonData = await getPokemonByName(playerPokemonName);
    const botPokemonData = await getRandomPokemon();

    rl.close();

    const player = await buildFighterFromPokemon(playerPokemonData);
    const bot = await buildFighterFromPokemon(botPokemonData);

    console.log("\nTon Pokémon est prêt !");
    console.log(`Nom: ${player.name}`);
    console.log("Ses 5 attaques sont :");
    player.moves.forEach((move, index) => {
      console.log(
        `${index + 1}. ${move.name} | Power: ${move.power} | Accuracy: ${move.accuracy} | PP: ${move.pp}`
      );
    });

    console.log("\nLe Pokémon du bot est prêt !");
    console.log(`Nom: ${bot.name}`);
    console.log("Ses 5 attaques sont :");
    bot.moves.forEach((move, index) => {
      console.log(
        `${index + 1}. ${move.name} | Power: ${move.power} | Accuracy: ${move.accuracy} | PP: ${move.pp}`
      );
    });

    await startBattle(player, bot);
  } catch (error) {
    rl.close();
    console.log("\nErreur :", error.message);
    console.log("Vérifie le nom du Pokémon et réessaie.");
  }
}

main();