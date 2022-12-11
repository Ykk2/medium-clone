from flask_wtf import FlaskForm
from wtforms.fields import (
     StringField, SubmitField, IntegerField
)
from wtforms.validators import DataRequired

class ResponseForm(FlaskForm):
    body = StringField("Response",[DataRequired()])
    submit = SubmitField("Submit")
