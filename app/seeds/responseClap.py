from app.models import db, ResponseClap, environment, SCHEMA

def seed_ResponseClaps():
    responseClap1 = ResponseClap(
        id='1',
        userId='5',
        responseId='1',
    )
    responseClap2 = ResponseClap(
        id='2',
        userId='4',
        responseId='2',
    )
    responseClap3 = ResponseClap(
        id='3',
        userId='2',
        responseId='3',
    )
    responseClap4 = ResponseClap(
        id='4',
        userId='1',
        responseId='4',
    )
    responseClap5 = ResponseClap(
        id='5',
        userId='3',
        responseId='5',
    )

    db.session.add(responseClap1)
    db.session.add(responseClap2)
    db.session.add(responseClap3)
    db.session.add(responseClap4)
    db.session.add(responseClap5)
    db.session.commit()

def undo_responseClaps():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.responseClaps RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM responseClaps")

    db.session.commit()
