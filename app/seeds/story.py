from app.models import db, Story, environment, SCHEMA

def seed_stories():
    story1 = Story(
        id='1', userId='1',story='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tag='tag1',title='title1',image='https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    story2 = Story(
        id='2', userId='2',story='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tag='tag2',title='title2',image='https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    story3 = Story(
        id='3', userId='3',story='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tag='tag3',title='title3',image='https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    story4 = Story(
        id='4', userId='4',story='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tag='tag4',title='title4',image='https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    story5 = Story(
        id='5', userId='5',story='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tag='tag5',title='title5',image='https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    db.session.add(story1)
    db.session.add(story2)
    db.session.add(story3)
    db.session.add(story4)
    db.session.add(story5)
    db.session.commit()

def undo_stories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.stories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM stories")

    db.session.commit()
