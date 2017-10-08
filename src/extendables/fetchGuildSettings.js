const { Extendable } = require('klasa');

module.exports = class extends Extendable {

	constructor(...args) {
		super(...args, ['Message']);
	}

	extend() {
		return this.guild ? this.client.settings.guilds.fetchEntry(this.guild.id) : this.client.settings.guilds.defaults;
	}

};