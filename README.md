<h1 align="center">
    <br>
    # MCBE FAKE PLAYER
    <br>
<h1>

<p align="center">
    <a href="https://github.com/papasnags/Discord-Webhook-Spammer/releases">
        <img alt="GitHub release" src="https://img.shields.io/github/release/PapaSnags/Discord-Webhook-Spammer.svg">
    </a>
</p>


## Overview

> [!NOTE]
> CO Tool is a utility tool designed to connect fake players to a Minecraft server in order to boost server statistics. It allows server administrators to simulate player activity and increase metrics such as player count and engagement.

## Features

> [!TIP]
> - Connects fake players to a Minecraft server.
> - Boosts server statistics by simulating player activity.
> - Easy configuration of server connection details and player usernames.

## Usage

> [!IMPORTANT]
> 1. Update the server connection details in the script to match your Minecraft server's IP address and port.
> 2. Customize the list of usernames to connect to the server.
> 3. Run the script to start connecting fake players to the server and boosting server statistics.

## How It Works

- **Server Connection Details**: Modify the IP address and port variables to match your Minecraft server's connection details.
- **Delay Between Connections**: Adjust the delay variable to control the time interval between connecting fake players.
- **List of Usernames**: Customize the list of usernames to connect to the server with fake players.
- **Establishing Client Connection**: The script loops through each username and establishes a client connection to the server using the bedrock-protocol library.
- **Player Events**: Events are triggered when the fake player spawns in the server or when the client is kicked from the server. These events are logged for monitoring purposes.

## Requirements

> [!CAUTION]
> - Node.js
> - bedrock-protocol library

## License

This project is licensed under the MIT License.
