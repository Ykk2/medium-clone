from .db import db, environment, SCHEMA, add_prefix_for_prod



# class Follow(db.Model):
#     __tablename__ = 'follows'

#     id = db.Column(db.Integer, primary_key=True)
#     followerId = db.Column(db.Integer,db.ForeignKey("users.id"),nullable=False)
#     followedId = db.Column(db.Integer,db.ForeignKey("users.id"),nullable=False)

#     followerId = db.relationship("User", back_populates="follows")
#     followedId = db.relationship("User", back_populates="follows")

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "followerId": self.followedId,
#             "followedId": self.followedId
#         }

follows = db.Table(
    "follows",
    db.Column("followedId",db.Integer,db.ForeignKey("users.id")),
    db.Column("followerId",db.Integer,db.ForeignKey("users.id"))
)
