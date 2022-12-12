from flask import Flask, jsonify, Blueprint, redirect, request
from ..models import db, Story, User, Response, ResponseClap
from ..forms import ResponseForm, ResponseClapForm
from flask_login import login_required
response_route = Blueprint("responses", __name__)


# GET ALL RESPONSES BY STORY ID

@response_route.route('/<int:storyId>')
def get_response(storyId):

    result = []
    responses = Response.query.filter_by(storyId = storyId).all()
    print('*********************************************', responses)
    for response in responses:
        res = response.to_dict()
        claps = ResponseClap.query.filter_by(responseId = res["id"]).all()
        res['totalClaps'] = len(claps)
        result.append(res)

    return jsonify(result)


# CREATE NEW RESPONSE FOR A STORY

@response_route.route('/stories/<int:storyId>', methods=['POST'])
def create_response():
    form = ResponseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_response = Response(
            body = form.data['body'],
            userId = form.data['userId'],
            storyId = form.data['storyId']
        )
    if form.errors:
        return "Invalid data"
    db.session.add(new_response)
    db.session.commit()
    #ALWAYS REDIRECT IN THE FRONT END
    return new_response.to_dict()

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

    form = ResponseForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        setattr(response, 'body', form.data['body'])

    if form.errors:
        return "Invalid Data"

    db.session.commit()

    return response.to_dict()

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
