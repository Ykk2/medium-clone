from .db import db, environment, SCHEMA, add_prefix_for_prod

class ResponseClap(db.Model):
    __tablename__ = "responseclaps"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    responseId = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("responses.id")), nullable=False)

    responses = db.relationship("Response", back_populates="responseclaps")
    users = db.relationship("User", back_populates="responseclaps")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "responseId": self.responseId
        }
