//CONFIG.debug.hooks = true
import { registerSettings } from "./scripts/settings.js";

Hooks.on("preCreateChatMessage", async (rawMessage) => {
  console.log(rawMessage)
  if (rawMessage.flavor.includes("Skill Check")){
    if(game.settings.get("Tsamys-Secret-Rolls", "hideAcrobatics") && rawMessage.flavor.includes("Acrobatics")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideArcana") && rawMessage.flavor.includes("Arcana")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideAthletics") && rawMessage.flavor.includes("Athletics")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideCrafting") && rawMessage.flavor.includes("Crafting")){ rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideDeception") && rawMessage.flavor.includes("Deception")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideDiplomacy") && rawMessage.flavor.includes("Diplomacy")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideIntimidation") && rawMessage.flavor.includes("Intimidation")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideLore") && rawMessage.flavor.includes("Lore")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideMedicine") && rawMessage.flavor.includes("Medicine")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideNature") && rawMessage.flavor.includes("Nature")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideOccultism") && rawMessage.flavor.includes("Occultism")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hidePerformance") && rawMessage.flavor.includes("Performance")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideReligion") && rawMessage.flavor.includes("Religion")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideSociety") && rawMessage.flavor.includes("Society")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideStealth") && rawMessage.flavor.includes("Stealth")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideSurvival") && rawMessage.flavor.includes("Survival")){rawMessage.applyRollMode("blindroll");}
    if(game.settings.get("Tsamys-Secret-Rolls", "hideThievery") && rawMessage.flavor.includes("Thievery")){rawMessage.applyRollMode("blindroll");}
    console.log("THIS IS A CHECK ROLL")
  
  }

})

// Handle-socket
Hooks.on('ready', () => {
  console.log("Registering...")
  registerSettings();
  game.socket.on('module.Tsamys-Secret-Rolls', async (data) => {
      if (game.user.isGM && data) showResults(data);
    });
  })

  
