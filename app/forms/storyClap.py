from flask_wtf import FlaskForm
from wtforms.fields import SubmitField, IntegerField
from wtforms.validators import DataRequired

class StoryClapForm(FlaskForm):
    userId = IntegerField("userId",[DataRequired()])
    # storyId = IntegerField("storyId",[DataRequired()])
    submit = SubmitField("Submit")
