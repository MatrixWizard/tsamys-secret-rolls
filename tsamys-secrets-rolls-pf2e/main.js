Hooks.on("createChatMessage", (chatMessage) => {
  console.log(chatMessage.blind)
  if (!game.settings.get("pf2qr", "ShowPlayersResults")) {
      if (chatMessage.flavor.includes("Skill Check")){console.log("THIS IS A CHECK ROLL")}{
          chatMessage.applyRollMode({chatData: chatMessage.blind, rollMode: "BLIND"})
      }
      // chatMessage.user = game.users.find(u => u.isGM)._id; //Imitating GM so that we don't see our own message to the GM, in the case it is a player rolling.
      // chatMessage.speaker = ChatMessage.getSpeaker({ user: game.user });
  } 

  // let chatData = { content: game.i18n.format(details.chatString, { name: this.actor.name }), speaker };
// 		ChatMessage.applyRollMode(chatData, roll.options.rollMode);
// 		await ChatMessage.create(chatData);

  // if (game.user.isGM || game.settings.get("pf2qr", "PlayersCanQuickRoll")) {
  //     if (game.combat === null || (game.user.data._id === game.users.contents.find(u => u.isGM).data._id) || !game.settings.get("pf2qr", "RollOnTurn") || (game.combat.combatant.players[0]?.data._id === game.user.data._id)) {
  //         if (!chatMessage.content) return true;
  //         if (!chatMessage.content.flavor) return true;
  //         if (chatMessage.content.flavor.includes('Attack Roll') && message.content.user === game.user.data._id) compareAttacks(message);
  //         if (chatMessage.content.flavor.includes('Strike:') && message.content.user === game.user.data._id) compareAttacks(message);
  //     }
  // }
});

// Handle-socket
Hooks.on('ready', () => {
  console.log("Registering...")
  game.socket.on('module.pf2qr', async (data) => {
      if (game.user.isGM && data) showResults(data);
    });
  })

  
Hooks.on('ready', () => {
  [
      {
          name: "ShowPlayersResults",
          hint: "Whether players should see the results of rolls. Private/Blind rolls will serve a similar function soon(TM).",
          scope: "world",
          default: true,
          type: Boolean
      }, 
         {
          name: "RollOnTurn",
          hint: "Players can only roll on their turn in combat. Can roll whenever if not in combat.",
          scope: "world",
          default: false,
          type: Boolean
      },  {
          name: "RollDamageOnHit",
          hint: "Automatically rolls damage for any Strike that hits.",
          scope: "world",
          default: false,
          type: Boolean
      }, {
          name: "OnlyAutoRollGmDamage",
          hint: "If enabled, automatic damage rolling from strikes will only happen when it is the GM making the strike.",
          scope: "world",
          default: true,
          type: Boolean
      }
  ].forEach((setting) => {
      let options = {
          name: setting.name,
          hint: setting.hint,
          scope: setting.scope,
          config: true,
          default: setting.default,
          type: setting.type,
      };
      game.settings.register("pf2qr", setting.name, options);
  });
});