from app.models import db, ResponseClap, environment, SCHEMA

def seed_responseClaps():
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
    responseClap6 = ResponseClap(
        id='6',
        userId='8',
        responseId='6',
    )
    responseClap7 = ResponseClap(
        id='7',
        userId='2',
        responseId='4',
    )
    responseClap8 = ResponseClap(
        id='8',
        userId='3',
        responseId='8',
    )
    responseClap9 = ResponseClap(
        id='9',
        userId='4',
        responseId='5',
    )
    responseClap10 = ResponseClap(
        id='10',
        userId='6',
        responseId='6',
    )
    responseClap11 = ResponseClap(
        id='11',
        userId='7',
        responseId='2',
    )
    responseClap12 = ResponseClap(
        id='12',
        userId='2',
        responseId='1',
    )
    responseClap13 = ResponseClap(
        id='13',
        userId='8',
        responseId='3',
    )
    responseClap14 = ResponseClap(
        id='14',
        userId='6',
        responseId='6',
    )
    responseClap15 = ResponseClap(
        id='15',
        userId='4',
        responseId='8',
    )

    db.session.add(responseClap1)
    db.session.add(responseClap2)
    db.session.add(responseClap3)
    db.session.add(responseClap4)
    db.session.add(responseClap5)
    db.session.add(responseClap6)
    db.session.add(responseClap7)
    db.session.add(responseClap8)
    db.session.add(responseClap9)
    db.session.add(responseClap10)
    db.session.add(responseClap11)
    db.session.add(responseClap12)
    db.session.add(responseClap13)
    db.session.add(responseClap14)
    db.session.add(responseClap15)
    db.session.commit()

def undo_responseClaps():
    if environment == "production":
<<<<<<< HEAD
        db.session.execute(f"TRUNCATE table {SCHEMA}.responseClaps RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM responseClaps")
=======
        db.session.execute(f"TRUNCATE table {SCHEMA}.responseclaps RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM responseclaps")
>>>>>>> newStoriesFix

    db.session.commit()
