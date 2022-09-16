//close chest


// register("GuiOpened", () => {
// 	if(Player.getOpenedInvertory().getName().includes("Chest")) {
// 	Client.currentGui.close();
// }
// });

// register("GuiOpened", () => {

// 	ChatLib.chat("autochestclose");
// 	Client.currentGui.close(); 
// Scoreboard.getLines().getName().removeFormatting().toLowerCase().includes("cata")

// });

register("GuiRender", () => {

	if(Player.getOpenedInventory().getName().includes("Chest")) && Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase()).includes("cata"){

		ChatLib.chat(Player.getOpenedInventory().getName().includes("Chest"));
		ChatLib.chat(Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase()));
		Client.currentGui.close();

	}

});



