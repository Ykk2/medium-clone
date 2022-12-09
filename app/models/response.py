from .db import db, environment, SCHEMA, add_prefix_for_prod

class Response(db.Model):
    __tablename__ = 'responses'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1000),nullable=False)
    userId = db.Column(db.Integer, nullable=False)
    storyId = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body
            "userId": self.userId,
            "storyId": self.storyId
        }
