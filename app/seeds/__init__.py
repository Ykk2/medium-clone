from flask.cli import AppGroup
from .users import seed_users, undo_users
from .follow import seed_follower, undo_follows
from .response import seed_response, undo_responses
from .responseClap import seed_ResponseClaps, undo_responseClaps
from .story import seed_stories, undo_stories
from .storyClap import seed_storyClaps, undo_storyClaps
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_follows()
        undo_responseClaps()
        undo_storyClaps()
        undo_responses()
        undo_stories()
        undo_users()
    seed_users()
    seed_stories()
    seed_response()
    seed_ResponseClaps()
    seed_storyClaps()
    seed_follower()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_follows()
    undo_responseClaps()
    undo_storyClaps()
    undo_responses()
    undo_stories()
    undo_users()
    # Add other undo functions here
