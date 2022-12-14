from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',first_name='Demo',last_name='Lee', email='demo@aa.io', password='password')
    marnie = User(
        username='Marnie',first_name='Marnie',last_name='Lee', email='marnie@gmail.com', password='password')
    bobbie = User(
        username='Bobbie',first_name='Bobbie',last_name='Lee', email='bobbie@gmail.com', password='password')
    andrew = User(
        username='AK',first_name='Andrew',last_name='Lee', email='andrew@gmail.com', password='password')
    jeff = User(
        username='Jeff',first_name='Jeff',last_name='Lee', email='jeff@gmail.com', password='password')
    rich = User(
        username='Rich',first_name='Rich',last_name='Lee', email='rich@gmail.com', password='password')
    sandy = User(
        username='Sandy',first_name='Sandy',last_name='Lee', email='sandy@gmail.com', password='password')
    mark = User(
        username='Mark',first_name='Mark',last_name='Lee', email='mark@gmail.com', password='password')
    lucy = User(
        username='Lucy',first_name='Lucy',last_name='Lee', email='lucy@gmail.com', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(andrew)
    db.session.add(rich)
    db.session.add(sandy)
    db.session.add(mark)
    db.session.add(lucy)
    db.session.add(jeff)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
