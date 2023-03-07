/**
 * ░██████╗░██████╗░███████╗███████╗███╗░░██╗███████╗██████╗░░█████╗░░██████╗░
 * ██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗██╔════╝░
 * ██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║█████╗░░██████╔╝██║░░██║██║░░██╗░
 * ██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██║░░██║██║░░╚██╗
 * ╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██║░░░░░██║░░██║╚█████╔╝╚██████╔╝
 * ░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░
 *
 *
 * Copyright 2023 andriycraft
 * Github: https://github.com/andriycraft/GreenFrogMCBE
 */
const Logger = require("../../src/server/Logger");
const yaml = require("js-yaml");
const fs = require("fs");

module.exports = {
	onLoad() {
		const config = yaml.load(fs.readFileSync("config.yml", "utf8"));
		const donateLink = "https://www.paypal.com/donate/?hosted_button_id=EMT6MHNNL3KBQ";
		switch (config.lang) {
			case "fr_FR":
				Logger.log(`Donations > Si vous avez trouvé ce projet utile, vous pouvez le soutenir ici: ${donateLink}`);
				break;
			case "vi_VN":
				Logger.log(`Donations > Chào bạn! Nếu bạn muốn hỗ trợ GreenFrogMCBE, bạn có thể quyên góp tại: ${donateLink}`);
				break;
			case "lt_LT":
				Logger.log(`Donations > Jei šis projektas jums pasirodė naudingas, galite jį paremti čia: ${donateLink}`);
				break;
			case "uk_UA":
				Logger.log(`Donations > Якщо ви вважаєте цей проект корисним, ви можете підтримати його тут: ${donateLink}`);
				break;
			default:
				Logger.log(`Donations > If you found this project useful, you can support it here: ${donateLink}`);
				break;
		}
	},

	onShutdown() {
		Logger.log("Donations > Bye!");
	},
};
