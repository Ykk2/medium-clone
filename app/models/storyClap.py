from .db import db, environment, SCHEMA, add_prefix_for_prod

class StoryClap(db.Model):
    __tablename__ = 'storyClaps'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)
    storyId = db.Column(db.Integer,db.ForeignKey("stories.id"), nullable=False)

    stories = db.relationship("Story", back_populates="storyClaps")
    users = db.relationship("User", back_populates="storyClaps")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "storyId": self.storyId
        }
