from .db import db, environment, SCHEMA


follows = db.Table(
    "follows",
    db.Column("followedId",db.Integer,db.ForeignKey("users.id"), primary_key=True),
    db.Column("followerId",db.Integer,db.ForeignKey("users.id"), primary_key=True)
)

if environment == 'production':
    follows.schema = SCHEMA
