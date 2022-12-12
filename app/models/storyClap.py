from .db import db, environment, SCHEMA, add_prefix_for_prod

class StoryClap(db.Model):
    __tablename__ = "storyclaps"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    storyId = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("stories.id")), nullable=False)

    stories = db.relationship("Story", back_populates="storyclaps")
    users = db.relationship("User", back_populates="storyclaps")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "storyId": self.storyId
        }
