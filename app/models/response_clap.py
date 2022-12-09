from .db import db, environment, SCHEMA, add_prefix_for_prod

class ResponseClap(db.Model):
    __tablename__ = 'responseClaps'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    storyId = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "storyId": self.storyId
        }
