from flask import Flask, jsonify, Blueprint, redirect, request
from ..models import db, Story, User
from ..forms import StoryForm
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
# CHECK THIS TO MAKE SURE IT DOES NOT CONFLICT WITH NEW STORY ID's
def get_stories_by_user(personId):
    stories = Story.query.filter_by(userId = personId).all()
    response = []
    for story in stories:
        user = User.query.filter_by(id = story.userId).first()
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

@story_route.route('/', methods=['POST'])
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
    return redirect('/<int:storyId>')


# UPDATE A STORY
@story_route.route('/<int:storyId>', methods=['PUT'])
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
def delete_story(storyId):
    story = Story.query.filter_by(id = storyId).first()
    if not story:
        return ('No From Found!')
    else:
        db.session.delete(story)
        return {"message": "Successfully Deleted!", "statusCode": 200}
