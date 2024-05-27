// Delay between sending messages (in seconds)
const delay = 5;

// Server connection details
const ip = 'example.mcbe.net';
const port = 19132;

// Message to send to players
const message = 'your-message-here';

// List of usernames to connect to the server
const usernames = Array.from({ length: 10 }, (_, i) => `ElitePlayer${i + 1}`);

// Whether to show bursts in the console
const showBursts = true;

// Required modules
const bedrock = require('bedrock-protocol');
const axios = require('axios');

// Function to connect a client with a given username
function connectClient(username) {
    try {
        console.log(username);
        // Create a client connection
        const client = bedrock.createClient({
            host: ip,
            port: +port,
            connectTimeout: 10_000,
            viewDistance: 1,
            username: username,
            skipPing: true,
            offline: false,
            profilesFolder: './accounts'
        });

        // Triggered when the player spawns in the server
        client.on('spawn', () => {
            // Fetch server player list
            axios.get(`https://api.serverstatus.com/2/${ip}:${port}`)
                .then((response) => {
                    // Filter out the current client's username from the player list
                    const players = response.data.players.list.filter(item => item !== client.username);
                    console.log(client.username);
                    let index = 0;
                    // Send messages to players in a loop
                    setInterval(() => {
                        const player = players[index];
                        // Queue message to be sent to player
                        client.queue('text', {
                            type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
                            message: `/msg "${player}" ${message}`
                        });
                        index = (index + 1) % players.length;
                        // Log burst message if applicable
                        if (index === 0 && showBursts === true) {
                           console.log('\x1b[35m[+] 1 burst.');
                        }
                    }, delay * 1000); // Convert delay to milliseconds
                })
                .catch((error) => {
                    console.error(error);
                });
        });

        // Triggered when the client is kicked from the server
        client.on('kick', () => {
          console.log('\x1b[31m[-] The bot has disconnected.');
        });

    } catch(err) {
        console.log(err);
    }
}

// Connect each username to the server
usernames.forEach(username => connectClient(username));
