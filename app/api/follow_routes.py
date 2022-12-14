from flask import Flask, jsonify, Blueprint
from ..models import db, User, follows

from flask_login import login_required, current_user

follow_route = Blueprint("follows", __name__)


#GET LIST OF FOLLOWERS
@follow_route.route('/<int:userId>')
# @login_required
def get_list_followers(userId):
    user = User.query.get(userId)

    following_users_query = user.following.all()

    following_users = [user.to_dict() for user in following_users_query]

    total_followers = len(following_users)

    return {'Followers' : following_users, "totalFollowers": total_followers}



#Follow someone
#need to pass in the userId for the person I want to follow
@follow_route.route('/<int:userId>', methods=['POST'])
# @login_required
def add_follower(userId):

    # form['csrf_token'].data = request.cookies['csrf_token']
    followed_user = User.query.get(current_user.id)
    following_user = User.query.get(userId)

    if followed_user.following.filter(follows.c.followerId == following_user.id).count() > 0:
        return { "error": "User is already following this user"}

    followed_user.following.append(following_user)
    following_users_query = followed_user.following.all()
    following_users = [user.to_dict for user in following_users_query]

    db.session.commit()

    total_followers = len(following_users)
    return jsonify({'follower' : following_user.to_dict(), "totalFollowers": total_followers})


#Unfollow someone
#need to pass in the userId for the person I want to unfollow
@follow_route.route('/<int:userId>', methods=['DELETE'])
# @login_required
def delete_follower(userId):
    followed_user = User.query.get(current_user.id)
    following_user = User.query.get(userId)

    if followed_user.following.filter(follows.c.followerId == following_user.id).count() <= 0:
        return { "error": "User does not follow this user yet"}
    followed_user.following.remove(following_user)
    db.session.commit()

    return { "message": "Succesfully unfollowed"}
