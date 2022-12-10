from app.models import db, follows, environment, SCHEMA

def seed_follower():
    follow1 = follows(
        id='1',
        followerId='5',
        followedId='1'
    )
    follow2 = follows(
        id='2',
        followerId='4',
        followedId='3'
    )
    follow3 = follows(
        id='3',
        followerId='5',
        followedId='2'
    )
    follow4 = follows(
        id='4',
        followerId='1',
        followedId='5'
    )
    follow5 = follows(
        id='5',
        followerId='3',
        followedId='5'
    )

    db.session.add(follow1)
    db.session.add(follow2)
    db.session.add(follow3)
    db.session.add(follow4)
    db.session.add(follow5)
    db.session.commit()

def undo_follows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM follows")

    db.session.commit()
