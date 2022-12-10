from flask_wtf import FlaskForm
from wtforms.fields import (
     StringField, SubmitField, IntegerField
)
from wtforms.validators import DataRequired

class ResponseForm(FlaskForm):
    response = StringField("Response",[DataRequired()])
    userId = IntegerField("userId",[DataRequired()],coerce=int)
    storyId = IntegerField("storyId",[DataRequired()],coerce=int)
    submit = SubmitField("Submit")
