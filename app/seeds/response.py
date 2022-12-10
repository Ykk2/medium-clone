from app.models import db, Response, environment, SCHEMA

def seed_response():
    response1 = Response(
        id='1',body='LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        storyId='1',
        userId='1'
    )
    response2 = Response(
        id='2',body='LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        storyId='2',
        userId='2'
    )
    response3 = Response(
        id='3',body='LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        storyId='3',
        userId='3'
    )
    response4 = Response(
        id='4',body='LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        storyId='4',
        userId='4'
    )
    response5 = Response(
        id='5',body='LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        storyId='5',
        userId='5'
    )

    db.session.add(response1)
    db.session.add(response2)
    db.session.add(response3)
    db.session.add(response4)
    db.session.add(response5)
    db.session.commit()

def undo_responses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.responses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM responses")

    db.session.commit()
