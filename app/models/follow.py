from .db import db, environment, SCHEMA, add_prefix_for_prod

class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    followerId = db.Column(db.Integer,nullable=False)
    followedId = db.Column(db.Integer,nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "followerId": self.followedId,
            "followedId": self.followedId
        }
