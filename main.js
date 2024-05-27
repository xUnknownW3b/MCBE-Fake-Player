// Server connection details
const ip = 'test-mcbe.fr';
const port = 19132;

// Delay between connecting accounts (in milliseconds)
const delay = 10;

// Required modules
const bedrock = require('bedrock-protocol');

// List of usernames to connect to the server
const usernames = ['UnknownCraft92', 'UnknownGamer777', 'UnknownMiner44', 'UnknownShadow1337', 'UnknownKnight23'];

// Loop through each username and establish a client connection to the server
for (let i = 0; i < usernames.length; i++) {
  let client;
  try {
    // Log the current username being connected
    console.log(usernames[i]);
    // Attempt to create a client connection
    client = bedrock.createClient({
      host: ip,
      port: +port,
      connectTimeout: 10_000,
      viewDistance: 1,
      username: usernames[i],
      skipPing: true,
      offline: false,
      profilesFolder: './accounts'
    });
  }
  catch(err) {
    // Log any errors that occur during client creation
    console.log(err);
  }

  // If client connection is successful
  if (client) {
    // Triggered when the player spawns in the server
    client.on('spawn', () => {
      // Log that the player has connected
      console.log(`${usernames[i]} has joined the server.`);
    });

    // Triggered when the client is kicked from the server
    client.on('kick', () => {
      // Log that the bot has disconnected from the server
      console.log('\x1b[31mBot disconnected from the server.');
    });
  }
}
