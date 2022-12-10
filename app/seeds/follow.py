from app.models import db, follows, environment, SCHEMA


def seed_follower(follows):
    insert_stmnt1 = follows.insert().values(followerId=5, followedId=1)
    insert_stmnt2 = follows.insert().values(followerId=4, followedId=3)
    insert_stmnt3 = follows.insert().values(followerId=5, followedId=2)
    insert_stmnt4 = follows.insert().values(followerId=1, followedId=5)
    insert_stmnt5 = follows.insert().values(followerId=3, followedId=5)


    db.session.execute(insert_stmnt1)
    db.session.execute(insert_stmnt2)
    db.session.execute(insert_stmnt3)
    db.session.execute(insert_stmnt4)
    db.session.execute(insert_stmnt5)
    db.session.commit()



def undo_follows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM follows")

    db.session.commit()
