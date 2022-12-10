from .db import db


follows = db.Table(
    "follows",
    db.Column("followedId",db.Integer,db.ForeignKey("users.id")),
    db.Column("followerId",db.Integer,db.ForeignKey("users.id"))
)
