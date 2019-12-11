module.exports = async (client, oldMember, newMember) => {
  // Check if this is the last user leaving the voice channel, and if the bot is in it
  if (client.voiceConnections.get(oldMember.guild.id) && oldMember.voiceChannel.members.size === 1) {
    client.songQueue.playing = false;
    client.songQueue.voiceChannel.leave();
    client.songQueue.connection.disconnect();
    client.songQueue.connection = null;
    client.songQueue.voiceChannel = null;
    return oldMember.guild.channels.get(client.getSettings(oldMember.guild).voiceText).send('Everyone left voice chat, so the music stopped.');
  }
};