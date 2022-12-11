from flask import Flask, jsonify, Blueprint, redirect, request
from ..models import db, Story, User, follows, StoryClap
from ..forms import StoryForm, StoryClapForm
from flask_login import login_required
story_route = Blueprint("stories", __name__)


# GET ALL STORIES ROUTE

@story_route.route('/')
def get_all_stories():
    stories = Story.query.all()
    response = []
    for story in stories:

        storyUser = User.query.filter_by(id=story.userId).first()
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
                "lastName": storyUser.last_name
            }
        })
    return jsonify({'Stories': response})


# GET ALL STORIES MADE BY USER ROUTE
#

@story_route.route('/<int:personId>')
@login_required
# CHECK THIS TO MAKE SURE IT DOES NOT CONFLICT WITH NEW STORY ID's
def get_stories_by_user(personId):
    stories = Story.query.filter_by(userId = personId).all()
    response = []
    user = User.query.filter_by(id = personId).first()
    for story in stories:
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
                "firstName": user.first_name,
                "lastName": user.last_name
            }
        }})

    return jsonify({"Stories": response})


# GET ALL STORIES BY WHO USER IS FOLLOWING

@story_route.route('/<int:userId>/following')
@login_required
def get_stories_by_follow(userId):
    user = User.query.get(userId)

    following = user.follows
    print(following == 5, "*********************************")
    return "hello"
    # allFollows = user.query.all(followed.id == user.id)
    # followingList = []
    # for followed in followingList:
    #     pass

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
# get all followedIds -> query for stories that match the

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
            userId = form.data["userId"]
            # tag = form.data["tag"]
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
        setattr(story, "userId", form.data["userId"])

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
        return {"message": "Successfully Deleted!", "statusCode": 200}

# CREATE A CLAP FOR STORY

@story_route.route('/claps/<int:storyId>', methods=['POST'])
@login_required
def create_story_clap(storyId):
    # story = Story.query.get(storyId)
    form = StoryClapForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_clap = StoryClap(
            userId = form.data["userId"],
         storyId = storyId
        )
    if form.errors:
        return "Invalid data."
    db.session.add(new_clap)
    db.session.commit()
    return new_clap.to_dict()



# HELLO RICHARD

# NOT DONE !!
