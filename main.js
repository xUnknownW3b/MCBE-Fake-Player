// Server IP and port
const ip = 'ploto.mcbe.fr';
const port = 19132;

// Delay between connecting accounts (in milliseconds)
const delay = 10

// Required modules
const bedrock = require('bedrock-protocol');

// List of usernames to connect to the server
const usernames = ['EdenAuPrime6594', 'EdenAuPrime5973', 'EdenAuPrime3907', 'EdenAuPrime6038', 'EdenAuPrime']

// Loop through each username and create a client to connect to the server
for (let i = 0; i < usernames.length; i++) {
  let client;
  try {
    console.log(usernames[i]);
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
    console.log(err);
  }

  // If client connection is successful
  if (client) {
    // When the player spawns in the server
    client.on('spawn', () => {
      console.log(`${usernames[i]} spawned.`);
    });

    // When the client gets kicked from the server
    client.on('kick', () => {
      console.log('\x1b[31mLe bot a été déconnecté.')
    });
  }
}
