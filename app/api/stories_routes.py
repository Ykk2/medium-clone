from flask import Flask, jsonify, Blueprint
from ..models import db, Story
story_route = Blueprint("stories", __name__)


# GET ALL STORIES ROUTE

@story_route.route("/")
def get_all_stories():
    stories = Story.query.all()
    # print(jsonify(stories))
    response = []
    for story in stories:
        user = user.query(story.userId)
        response.append({"Story": {
            "UserId": story.userId,
            "Story": story.story,
            "Tag": story.tag,
            "Title": story.title,
            "Image": story.image,
            "createdAt": story.createdAt,
            "updatedAt": story.updatedAt,
            "User": {
                "id": user.id,
                "firstName": user.firstName,
                "lastName": user.lastName
            }
        }})

    return jsonify({"Stories": response})



# GET ALL STORIES MADE BY USER ROUTE

@story_route.route('/stories/<int:userId>')
def get_stories_by_user(userId):
    stories = Story.query.filter(Story.userId == userId)
    response = []
    for story in stories:
        user = user.query(story.userId)
        response.append({"Story": {
            "UserId": story.userId,
            "Story": story.story,
            "Tag": story.tag,
            "Title": story.title,
            "Image": story.image,
            "createdAt": story.createdAt,
            "updatedAt": story.updatedAt,
            "User": {
                "id": user.id,
                "firstName": user.firstName,
                "lastName": user.lastName
            }
        }})

    return jsonify({"Stories": response})


# GET ALL STORIES BY WHO USER IS FOLLOWING

@story_route.route('/stories/<int:userId>/following')
def get_stories_by_follow(userId):
    user = user.query.get(userId)
    following = Follows.query.filter(follower.id == userId).all()

    alskdfj = user.query.all(followed.id == user.id)
    followingList = []
    for followed in followingList:
        pass
