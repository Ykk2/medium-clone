from app.models import db, follows, environment, SCHEMA


def seed_follower():
    insert_stmnt1 = follows.insert().values(followerId=5, followedId=1)
    insert_stmnt2 = follows.insert().values(followerId=4, followedId=3)
    insert_stmnt3 = follows.insert().values(followerId=5, followedId=2)
    insert_stmnt4 = follows.insert().values(followerId=1, followedId=5)
    insert_stmnt5 = follows.insert().values(followerId=3, followedId=5)
    insert_stmnt6 = follows.insert().values(followerId=3, followedId=7)
    insert_stmnt7 = follows.insert().values(followerId=6, followedId=5)
    insert_stmnt8 = follows.insert().values(followerId=7, followedId=2)
    insert_stmnt9 = follows.insert().values(followerId=2, followedId=5)
    insert_stmnt10 = follows.insert().values(followerId=8, followedId=5)
    insert_stmnt11 = follows.insert().values(followerId=7, followedId=5)
    insert_stmnt12 = follows.insert().values(followerId=4, followedId=5)
    insert_stmnt13 = follows.insert().values(followerId=1, followedId=7)
    insert_stmnt14 = follows.insert().values(followerId=2, followedId=8)
    insert_stmnt15 = follows.insert().values(followerId=4, followedId=6)


    db.session.execute(insert_stmnt1)
    db.session.execute(insert_stmnt2)
    db.session.execute(insert_stmnt3)
    db.session.execute(insert_stmnt4)
    db.session.execute(insert_stmnt5)
    db.session.execute(insert_stmnt6)
    db.session.execute(insert_stmnt7)
    db.session.execute(insert_stmnt8)
    db.session.execute(insert_stmnt9)
    db.session.execute(insert_stmnt10)
    db.session.execute(insert_stmnt11)
    db.session.execute(insert_stmnt12)
    db.session.execute(insert_stmnt13)
    db.session.execute(insert_stmnt14)
    db.session.execute(insert_stmnt15)
    db.session.commit()



def undo_follows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM follows")

    db.session.commit()
