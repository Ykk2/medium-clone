from .db import db, environment, SCHEMA, add_prefix_for_prod

class ResponseClap(db.Model):
    __tablename__ = 'responseClaps'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)
    responseId = db.Column(db.Integer,db.ForeignKey("responses.id"), nullable=False)

    responses = db.relationship("Response", back_populates="responseClaps")
    users = db.relationship("User", back_populates="responseClaps")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "storyId": self.storyId
        }
