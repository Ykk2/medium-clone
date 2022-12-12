from .db import db, environment, SCHEMA, add_prefix_for_prod


follows = db.Table(
    "follows",
    db.Column("followedId",db.Integer,db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True),
    db.Column("followerId",db.Integer,db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True)
)

if environment == 'production':
    follows.schema = SCHEMA
