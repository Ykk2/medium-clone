from flask_wtf import FlaskForm
from wtforms.fields import (
     StringField, SubmitField, IntegerField
)
from wtforms.validators import DataRequired

class StoryForm(FlaskForm):
    title = StringField("Title",[DataRequired()])
    story = StringField("Story",[DataRequired()])
    image = StringField("Image")
#     submit = SubmitField("Submit")
