const { Inhibitor } = require('klasa');

module.exports = class extends Inhibitor {

	async run(msg, cmd) {
		if (cmd.runIn.length <= 0) throw await msg.fetchLanguageCode('INHIBITOR_RUNIN_NONE', cmd.name);
		if (cmd.runIn.includes(msg.channel.type)) return;
		throw await msg.fetchLanguageCode('INHIBITOR_RUNIN', cmd.runIn.join(', '));
	}

};