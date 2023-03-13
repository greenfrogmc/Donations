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

const messages = {
	"en_US": "If you found this project useful, you can support it here: %donateLink%",
	"fr_FR": "Si vous avez trouvé ce projet utile, vous pouvez le soutenir ici: %donateLink%",
	"vi_VN": "Chào bạn! Nếu bạn muốn hỗ trợ GreenFrogMCBE, bạn có thể quyên góp tại: %donateLink%",
	"lt_LT": "Jei šis projektas jums pasirodė naudingas, galite jį paremti čia: %donateLink%",
	"uk_UA": "Якщо ви вважаєте цей проект корисним, ви можете підтримати його тут: %donateLink%",
};

module.exports = {
	onLoad() {
		const config = yaml.load(fs.readFileSync("config.yml", "utf8"));
		const donateLink = "https://www.paypal.com/donate/?hosted_button_id=EMT6MHNNL3KBQ";
		const message = messages[config.lang] || messages["en_US"];
		Logger.info(`Donations > ${message.replace("%donateLink%", donateLink)}`);
	},

	onShutdown() {
		Logger.info("Donations > Bye!");
	}
};
