from .db import db, environment, SCHEMA


follows = db.Table(
    "follows",
    db.Column("followedId",db.Integer,db.ForeignKey("users.id")),
    db.Column("followerId",db.Integer,db.ForeignKey("users.id"))
)

if environment == 'production':
    __table_args__ = {'schema': SCHEMA}
