from .db import db, environment, SCHEMA

class ResponseClap(db.Model):
    __tablename__ = 'responseClaps'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)
    responseId = db.Column(db.Integer,db.ForeignKey("responses.id"), nullable=False)

    responses = db.relationship("Response", back_populates="responseClaps")
    users = db.relationship("User", back_populates="responseClaps")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "responseId": self.responseId
        }
