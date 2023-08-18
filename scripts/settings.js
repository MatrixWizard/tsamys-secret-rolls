export const registerMainSettings = function() {
  game.settings.register("tsamys-secret-rolls", "makeClientSide", {
    name: "Make Client Side",
    hint: "Turning this on will change the options from being global to client specific, if clients cant see the new menu simply get them to refresh",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: foundry.utils.debouncedReload
  });
}

export const registerSettingsPf2e = function(scope) {
  game.settings.register("tsamys-secret-rolls", "hideAcrobatics", {
    name: "Hide Acrobatics",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideArcana", {
    name: "Hide Arcana",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideAthletics", {
    name: "Hide Athletics",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideCrafting", {
    name: "Hide Crafting",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideDeception", {
    name: "Hide Deception",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideDiplomacy", {
    name: "Hide Diplomacy",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideIntimidation", {
    name: "Hide Intimidation",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideLore", {
    name: "Hide Lore",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideMedicine", {
    name: "Hide Medicine",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideNature", {
    name: "Hide Nature",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideOccultism", {
    name: "Hide Occultism",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hidePerception", {
    name: "Hide Perception",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hidePerformance", {
    name: "Hide Performance",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideReligion", {
    name: "Hide Religion",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideSociety", {
    name: "Hide Society",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideStealth", {
    name: "Hide Stealth",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideSurvival", {
    name: "Hide Survival",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideThievery", {
    name: "Hide Thievery",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideAvoidNotice", {
    name: "Hide Avoid Notice",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideDiversion", {
    name: "Hide Diversion",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideDisableDevice", {
    name: "Hide Disable Device",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideFortitude", {
    name: "Hide Fortitude Saves",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideReflex", {
    name: "Hide Reflex Saves",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideWill", {
    name: "Hide Will Saves",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });
}

export const registerSettingsDnd5e = function (scope) {

  game.settings.register("tsamys-secret-rolls", "hideDeathSaves", {
    name: "Hide Death Saves",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideAcrobatics", {
    name: "Hide Acrobatics",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideAnimalHandling", {
    name: "Hide Animal Handling",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideArcana", {
    name: "Hide Arcana",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideAthletics", {
    name: "Hide Athletics",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });


  game.settings.register("tsamys-secret-rolls", "hideDeception", {
    name: "Hide Deception",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideHistory", {
    name: "Hide History",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideInsight", {
    name: "Hide Insight",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideIntimidation", {
    name: "Hide Intimidation",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideInvestigation", {
    name: "Hide Investigation",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideMedicine", {
    name: "Hide Medicine",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideNature", {
    name: "Hide Nature",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hidePerception", {
    name: "Hide Perception",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hidePerformance", {
    name: "Hide Performance",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hidePersuasion", {
    name: "Hide Persuasion",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideReligion", {
    name: "Hide Religion",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideSleightofHand", {
    name: "Hide Sleight of Hand",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideStealth", {
    name: "Hide Stealth",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideSurvival", {
    name: "Hide Survival",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });


}
