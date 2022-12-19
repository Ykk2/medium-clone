from flask import Flask, jsonify, Blueprint, redirect, request
from sqlalchemy.sql import func, select
from ..models import db, Story, User, follows, StoryClap
from ..forms import StoryForm, StoryClapForm
from flask_login import login_required, current_user
story_route = Blueprint("stories", __name__)


# GET ALL STORIES ROUTE

@story_route.route('/')
def get_all_stories():
    stories = Story.query.all()
    response = []
    for story in stories:

        storyUser = User.query.filter_by(id=story.userId).first()

        totalFollowers = len(storyUser.following.all())

        response.append({
            "UserId": story.userId,
            "storyId": story.id,
            "story": story.story,
            "Tag": story.tag,
            "Title": story.title,
            "Image": story.image,
            "createdAt": story.createdAt,
            "updatedAt": story.updatedAt,
            "User": {
                "id": storyUser.id,
                "firstName": storyUser.first_name,
                "lastName": storyUser.last_name,
                "totalFollowers": totalFollowers
            }
        })
    return jsonify({'Stories': response})


# GET ALL STORIES MADE BY USER ROUTE

@story_route.route('/user/<int:userId>/mine')
# @login_required
# CHECK THIS TO MAKE SURE IT DOES NOT CONFLICT WITH NEW STORY ID's
def get_stories_by_user(userId):
    stories = Story.query.filter_by(userId = current_user.id).all()
    response = []
    user = User.query.filter_by(id = userId).first()

    for story in stories:
        response.append({
            "storyId": story.id,
            "Story": story.story,
            "Tag": story.tag,
            "Title": story.title,
            "Image": story.image,
            "createdAt": story.createdAt,
            "updatedAt": story.updatedAt,
            "User": {
                "id": user.id,
                "firstName": user.first_name,
                "lastName": user.last_name
            }
        })
    return jsonify({"Stories": response})


# GET ALL STORIES BY WHO USER IS FOLLOWING

@story_route.route('/user/<int:userId>/following')
# @login_required
def get_stories_by_follow(userId):

    response = []

    user = User.query.get(userId)

    following_users = user.followers.all()

    # follow2 = user.followers.all()

    following_user_ids = [user.to_dict()['id'] for user in following_users]

    for id in following_user_ids:

        following_user_stories_class = Story.query.filter_by(userId = id)
        following_user_stories = [story.to_dict() for story in following_user_stories_class]

        for story in following_user_stories:

            user = User.query.get(id).to_dict()
            response.append({
            "storyId": story['id'],
            "Story": story['story'],
            "Tag": story['tag'],
            "Title": story['title'],
            "Image": story['image'],
            "createdAt": story['createdAt'],
            "User": {
                "id": user['id'],
                "firstName": user['firstName'],
                "lastName": user['lastName']
            }
        })

    return {"Stories": response}




# GET STORY BY ID

@story_route.route('/<int:storyId>')
# @login_required
def get_story(storyId):
    story = Story.query.get(storyId).to_dict()
    claps = StoryClap.query.filter_by(storyId = storyId).all()

    story['totalClaps'] = len(claps)
    userInfo = User.query.get(story["userId"])
    totalFollowers = len(userInfo.following.all())
    user = userInfo.to_dict()
    user['totalFollowers'] = totalFollowers
    story['storyUser'] = user
    return jsonify(story)


# CREATE NEW STORY

@story_route.route('/', methods=['POST'])
@login_required
def create_story():
    form = StoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_story = Story(
            title  = form.data["title"],
            story = form.data["story"],
            image = form.data["image"],
            userId = current_user.id
        )
    if form.errors:
        print(form.errors)
        return "Invalid data"

    db.session.add(new_story)
    db.session.commit()
    #REVIST THIS LATER, NEED TO FIGURE OUT PATH
    return new_story.to_dict()


# UPDATE A STORY
@story_route.route('/<int:storyId>', methods=['PUT'])
@login_required
def update_story(storyId):
    story = Story.query.filter_by(id = storyId).first()
    form = StoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        setattr(story, "title", form.data["title"])
        setattr(story, "story", form.data["story"])
        setattr(story, "image", form.data["image"])

        # tag = form.data["tag"]
    if form.errors:
        print(form.errors)
        return "Invalid data"


    db.session.commit()
    #REVIST THIS LATER, NEED TO FIGURE OUT PATH
    # return redirect('/<int:storyId>')
    return story.to_dict()

# DELETE A STORY

@story_route.route('/<int:storyId>', methods=['DELETE'])
@login_required
def delete_story(storyId):
    story = Story.query.filter_by(id = storyId).first()
    if not story:
        return ('No Story Found.')
    else:
        db.session.delete(story)
        db.session.commit()
        return {"message": "Successfully Deleted!", "statusCode": 200}

# CREATE A CLAP FOR STORY

@story_route.route('/claps/<int:storyId>', methods=['POST'])
@login_required
def create_story_clap(storyId):
    # story = Story.query.get(storyId)
    form = StoryClapForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form['userId'].data = current_user.id
    form['storyId'].data = storyId
    if form.validate_on_submit():
        new_clap = StoryClap(
        userId = current_user.id,
        storyId = storyId
        )
    if form.errors:
        return "Invalid data."
    db.session.add(new_clap)
    db.session.commit()
    return new_clap.to_dict()



# HELLO RICHARD

# NOT DONE !!
