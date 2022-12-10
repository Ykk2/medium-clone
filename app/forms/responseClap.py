from flask_wtf import FlaskForm
from wtforms.fields import SubmitField, IntegerField
from wtforms.validators import DataRequired

class ResponseClapForm(FlaskForm):
    userId = IntegerField("userId",[DataRequired()])
    responseId = IntegerField("responseId",[DataRequired()])
    submit = SubmitField("Submit")
