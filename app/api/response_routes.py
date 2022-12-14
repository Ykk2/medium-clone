from flask import Flask, jsonify, Blueprint, redirect, request
from ..models import db, Story, User, Response, ResponseClap
from ..forms import ResponseForm, ResponseClapForm
from flask_login import login_required, current_user
response_route = Blueprint("responses", __name__)


# GET ALL RESPONSES BY STORY ID

@response_route.route('/<int:storyId>')
def get_response(storyId):

    result = []
    responses = Response.query.filter_by(storyId = storyId).all()
    print('*********************************************', responses)

    for response in responses:
        # print("4545454545454 response = ", response.to_dict())
        # print("userId = ", response.to_dict()["userId"])
        res = response.to_dict()
        claps = ResponseClap.query.filter_by(responseId = res["id"]).all()
        users = User.query.filter_by(id = res['userId']).first()
        res['totalClaps'] = len(claps)
        res['user'] = users.to_dict()

        result.append(res)
        print("RESULT IS HERE ~~~~~~> ", result)

    return jsonify(result)


# CREATE NEW RESPONSE FOR A STORY

@response_route.route('/<int:storyId>/responses', methods=['POST'])
@login_required
def create_response(storyId):
    print("********HIT HERE PLEASE*******")
    form = ResponseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # form['userId'].data = current_user.id
    # form['storyId'].data = storyId
    # print("LOOK HERE!!!!!!!!!!!!!!!!! " , form['userId'].data)
    # print(form['storyId'].data)
    # res = {}
    users = User.query.filter_by(id = current_user.id).first()
    # res['user'] = users.to_dict()

    if form.validate_on_submit():
        new_response = Response(
            body = form.data['body'],
            userId = current_user.id,
            storyId = storyId
        )
    # print("******(*&(*&*(&( = ", form.errors)
    if form.errors:
        return "Invalid data"
    db.session.add(new_response)
    db.session.commit()
    #ALWAYS REDIRECT IN THE FRONT END
    res = new_response.to_dict()
    res['user'] = users.to_dict()
    return res

#DELETE A RESPONSE

@response_route.route('/<int:responseId>', methods=['DELETE'])
def delete_response(responseId):
    response = Response.query.filter_by(id = responseId)
    if not response:
        return ('No Response Found!')
    else:
        response.session.delete(response)
        return {"message": "Successfully Deleted!", "statusCode": 200}

#EDIT A RESPONSE

@response_route.route('/<int:responseId>', methods=['PUT'])
def update_response(responseId):

    response = Response.query.filter_by(id = responseId).first()
    users = User.query.filter_by(id = current_user.id).first()
    form = ResponseForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        setattr(response, 'body', form.data['body'])

    print("WHAT ARE THE FORM ERRORS: ", form.errors)
    if form.errors:
        return "Invalid Data"

    db.session.commit()
    res = response.to_dict()
    res['user'] = users.to_dict()
    return res

# CREATE A CLAP FOR RESPONSE

@response_route.route('/claps/<int:responseId>', methods=['POST'])
# @login_required
def create_response_clap(responseId):

    form = ResponseClapForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_clap = ResponseClap(
            userId = form.data["userId"],
            responseId = responseId
        )

    if form.errors:
        return "Invalid data."

    db.session.add(new_clap)
    db.session.commit()
    return new_clap.to_dict()
