### coachbot_server

coachbot_server represents the brain of CoachBot. This is where the current queue of users is maintained and the database for the users is interacted with.

All commands listed below, unless otherwise noted, should be run from inside the `coachbot_server` directory (where this README is located).

### running coachbot_server locally

To run coachbot_server locally, run the following commands:

```
# install dependencies
npm install

# run the app
npm run dev
```

By default (and, currently, as the only option), coachbot_server listens for requests on port 3000.

### running coachbot_server in docker

To run coachbot_server in docker, first build the image by running:

```
docker build --tag <image_name> .
```

### Usage

coachbot_server accepts the following commands via HTTP:

- nothing here yet.