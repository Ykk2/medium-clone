from .db import db, environment, SCHEMA
from .db import db, environment, SCHEMA
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .follow import follows

class User(db.Model, UserMixin):
    __tablename__ = "users"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    profile_image = db.Column(db.String(255))
    bio = db.Column(db.String(1000))
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    updatedAt = db.Column(db.DateTime, server_default=db.func.now(),server_onupdate=db.func.now())

    stories = db.relationship("Story", back_populates="users",cascade="all, delete")
    responses = db.relationship("Response", back_populates="users",cascade="all, delete")
    storyclaps = db.relationship("StoryClap", back_populates="users",cascade="all, delete")
    responseclaps = db.relationship("ResponseClap", back_populates="users",cascade="all, delete")
    storyclaps = db.relationship("StoryClap", back_populates="users",cascade="all, delete")
    responseclaps = db.relationship("ResponseClap", back_populates="users",cascade="all, delete")
    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.followerId == id),
        secondaryjoin=(follows.c.followedId == id),
        backref=db.backref("following",lazy="dynamic"),
        lazy="dynamic",

        cascade="all, delete"
    )
    # followerId = db.relationship("Follow", back_populates="User")
    # followedId = db.relationship("Follow", back_populates="User")





    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profileImage': self.profile_image,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'bio': self.bio,
            'createdAt': self.createdAt
        }
