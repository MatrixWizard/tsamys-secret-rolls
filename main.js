//CONFIG.debug.hooks = true
import { registerSettings } from "./scripts/settings.js";

Hooks.on("preCreateChatMessage", async (rawMessage) => {
  console.log(rawMessage)
  if (rawMessage.flavor.includes("Skill Check")){
    if(game.settings.get("tsamys-secret-rolls", "hideAcrobatics") && rawMessage.flavor.includes("Acrobatics")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideArcana") && rawMessage.flavor.includes("Arcana")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideAthletics") && rawMessage.flavor.includes("Athletics")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideCrafting") && rawMessage.flavor.includes("Crafting")){ rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideDeception") && rawMessage.flavor.includes("Deception")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideDiplomacy") && rawMessage.flavor.includes("Diplomacy")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideIntimidation") && rawMessage.flavor.includes("Intimidation")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideLore") && rawMessage.flavor.includes("Lore")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideMedicine") && rawMessage.flavor.includes("Medicine")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideNature") && rawMessage.flavor.includes("Nature")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideOccultism") && rawMessage.flavor.includes("Occultism")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hidePerformance") && rawMessage.flavor.includes("Performance")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideReligion") && rawMessage.flavor.includes("Religion")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideSociety") && rawMessage.flavor.includes("Society")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideStealth") && rawMessage.flavor.includes("Stealth")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideSurvival") && rawMessage.flavor.includes("Survival")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("tsamys-secret-rolls", "hideThievery") && rawMessage.flavor.includes("Thievery")){rawMessage.applyRollMode("blindroll");}
    console.log("THIS IS A CHECK ROLL")
  
  }

})

// Handle-socket
Hooks.on('ready', () => {
  console.log("Registering...")
  registerSettings();
  game.socket.on('module.tsamys-secret-rolls', async (data) => {
      if (game.user.isGM && data) showResults(data);
    });
  })

  
