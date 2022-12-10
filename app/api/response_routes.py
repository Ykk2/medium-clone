from flask import Flask, jsonify, Blueprint, redirect
from ..models import db, Story, User, Response
from ..forms import ResponseForm
response_route = Blueprint("responses", __name__)


# CREATE NEW RESPONSE

@response_route('/stories/<int:storyId>/response', methods=['POST'])
def create_response():
    form = ReponseForm()
    if form.validate_on_submit():
        new_response = Reponse(
            body = form.data['body'],
            userId = form.data['userId'],
            storyId = form.data['storyId']
        )
    if form.errors:
        return "Invalid data"
    db.session.add(new_response)
    db.session.commit()
    #FIGURE OUT THE PATH HERE vv
    return redirect('/<int:storyId>')

#DELETE A RESPONSE

@response_route('/stories/<int:storyId>/response/<int:responseId>', methods=['DELETE'])
def delete_response(responseId):
    response = Response.query.filter_by(id = responseId)
    if not response:
        return ('No Response Found!')
    else:
        response.session.delete(response)
        return {"message": "Successfully Deleted!", "statusCode": 200}
