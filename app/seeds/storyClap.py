from app.models import db, StoryClap, environment, SCHEMA


def seed_storyClaps():
    for storyClaps in range(1, 200):
        for index in range(1, 15):
            db.session.add(StoryClap(userId = index, storyId = index))
            db.session.commit()

def undo_storyClaps():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.storyclaps RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM storyclaps")

    db.session.commit()
