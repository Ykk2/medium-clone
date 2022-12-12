from .db import db, environment, SCHEMA, add_prefix_for_prod


class Story(db.Model):
    __tablename__ = 'stories'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)
    story = db.Column(db.String(10000),nullable=False)
    tag = db.Column(db.String(50), nullable=True)
    title = db.Column(db.String(255),nullable=False)
    image = db.Column(db.String(255))
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    updatedAt = db.Column(db.DateTime, server_default=db.func.now(),server_onupdate=db.func.now())

    storyClaps = db.relationship("StoryClap", back_populates="stories",cascade="all, delete")
    responses = db.relationship("Response", back_populates="stories",cascade="all, delete")
    users = db.relationship("User",back_populates="stories")
    # user = db.relationship("")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "story": self.story,
            "tag": self.tag,
            "title": self.title,
            "image": self.image
        }
