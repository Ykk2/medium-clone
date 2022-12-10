from flask import Flask, jsonify, Blueprint, redirect
from ..models import db, Story
from ..forms import StoryForm
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
#

@story_route.route('/stories/<int:userId>')
# CHECK THIS TO MAKE SURE IT DOES NOT CONFLICT WITH NEW STORY ID's
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

    allFollows = user.query.all(followed.id == user.id)
    followingList = []
    for followed in followingList:
        pass

'''
    Andrew = user.query.get(userId)
    AndrewsFollows = Follows.query.filter(follower.id == userId).all()
    PeopleAndrewFollows = []
    for AndrewsFollowed in AndrewsFollows:
        PeopleAndrewFollows.append(user.query.get(AndrewsFollowed.id == userId))

    response = []
    for person in PeopleAndrewFollows:
        story = response.append(Story.query.filter(Story.user.id == person.id))

'''


# CREATE NEW STORY

@story_route.route('/stories', methods=['POST'])
def create_story():
    form = StoryForm()
    if form.validate_on_submit():
        new_story = StoryForm(
            title  = form.data["title"],
            story = form.data["story"],
            image = form.data["url"],
            tag = form.data["tag"]
        )

    if form.errors:
        return "Invalid data"

    db.session.add(new_story)
    db.session.commit()
    #REVIST THIS LATER, NEED TO FIGURE OUT PATH
    return redirect('/<int:storyId>')


# DELETE A STORY

@story_route.route('/stories/<int:storyId>', methods=['DELETE'])
def delete_story(storyId):
    story = Story.query(storyId)
    if not story:
        return ('No From Found!')
    else: db.session.delete(story)
