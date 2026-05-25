# CoachBot

CoachBot is a set of utilities used for managing users and queues of said users for the purposes of receiving coaching for 2XKO inside of Discord servers. There are (read: will be) several important components:

### coachbot_server

coachbot_server is the brain of CoachBot. This is where the current queue of users is maintained and the database for the users is interacted with. For more, see the `coachbot_server` directory.

### coachbot_discord

coachbot_discord is a Discord Bot designed to accept commands from users and pass them onto a running coachbot_server instance. This is the primary mechanism by which users will interact with CoachBot (adding themselves to queues, earning priority points, etc.) as well as the primary entry point for administrators to manage CoachBot's state.

### coachbot_twitch

coachbot_discord is a Twitch Bot designed to accept commands from users and pass them onto a running coachbot_server instance. This is another mechanism by which users will interact with CoachBot.

### coachbot_web

coachbot_web is a web UI designed to allow administrators and users to more gracefully manage CoachBot's state. This will be built out after coachbot_discord, which until then will serve as the admin portal as well.

### coachbot_broadcast

coachbot_broadcast is a set of utilities and a collection of instructional material for use connecting CoachBot with OBS or other broadcasting software. This will let the broadcaster display the queue during live broadcasts.

## State of Development

### coachbot_server
Under initial development.

### coachbot_discord
Planned.

### coachbot_twitch
Planned.

### coachbot_web
Planned.

### coachbot_broadcast
Planned.

## Contribution

If you would like to contribute to CoachBot, connect with me at anderson.garron@gmail.com.