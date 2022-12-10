from app.models import db, StoryClap, environment, SCHEMA

def seed_storyClaps():
    storyClap1 = StoryClap(
        id='1',
        userId='5',
        storyId='1',
    )
    storyClap2 = StoryClap(
        id='2',
        userId='4',
        storyId='2',
    )
    storyClap3 = StoryClap(
        id='3',
        userId='2',
        storyId='3',
    )
    storyClap4 = StoryClap(
        id='4',
        userId='1',
        storyId='4',
    )
    storyClap5 = StoryClap(
        id='5',
        userId='3',
        storyId='5',
    )

    db.session.add(storyClap1)
    db.session.add(storyClap2)
    db.session.add(storyClap3)
    db.session.add(storyClap4)
    db.session.add(storyClap5)
    db.session.commit()

def undo_storyClaps():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.storyClaps RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM storyClaps")

    db.session.commit()
