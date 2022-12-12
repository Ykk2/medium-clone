from .db import db, environment, SCHEMA, add_prefix_for_prod

class Response(db.Model):
    __tablename__ = "responses"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1000),nullable=False)
    userId = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    storyId = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("stories.id")), nullable=False)
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    updatedAt = db.Column(db.DateTime, server_default=db.func.now(),server_onupdate=db.func.now())

    stories = db.relationship("Story", back_populates="responses")
    users = db.relationship("User", back_populates="responses")
    responseclaps = db.relationship("ResponseClap", back_populates="responses",cascade="all, delete")
    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "userId": self.userId,
            "storyId": self.storyId
        }
