from app.models import db, Response, environment, SCHEMA

def seed_response():
    response1 = Response(
        body=""" I enjoyed this thoroughly. I laughed too hard at the are you cold line. I had a similar experience but I'll write my own story. How did you quit? """,
        storyId='1',
        userId='1'
    )
    response2 = Response(
        body=""" That's a great question and now I'm wondering if I should rewrite and mention it. I ate that lunch, was more broke than before, and just... didn't show up again. That gig was like landing on Normandy, every time they went out to sell on the street they'd lose soldiers, or the soldiers would abandon the platoon. A few years later, I'd have an awful data entry job that I got through a temp agency and I wanted to quit and one of my coworkers said "temps don't quit they fade away. """,
        storyId='2',
        userId='2'
    )
    response3 = Response(
        body=''' What a great read! And have you ever uttered "Do you like to laugh?" to anyone since...? ''',
        storyId='3',
        userId='3'
    )
    response4 = Response(
        body=""" This brought back some serious memories for me. You see, around the same time period in NYC.... I was the girl who sold the haircuts. What a wild gig! Claps to you for writing about that very unique sales culture. I didn't have the Steves but I did have Rob... those types of characters stood on their own in that city. Leather pants and all! I enjoyed this, thank you for your writing! """,
        storyId='4',
        userId='4'
    )
    response5 = Response(
        body=""" Great read. You write so well - such emotional authenticity. I had a similar experience with hard sales - taught me exactly what I didn't want to do. Thanks! """,
        storyId='8',
        userId='4'
    )
    response6 = Response(
        body=""" Loved the story. Really thought the ending was that you marry the girl...or that you learned life long skills that made you millions. Thank you for a cool read! """,
        storyId='7',
        userId='2'
    )
    response7 = Response(
        body=""" Loved this. I knew I was awful at sales when as a girl scout I couldn't even sell the cookies. So I went to work as a legal secretary, listening to a different kind of sale. """,
        storyId='3',
        userId='1'
    )
    response8 = Response(
        body=""" lol I lived in NYC for a long while and saw many on the streets hustling. I tried it myself when I had book releases, and all I ever caught was cold… lol """,
        storyId='1',
        userId='2'
    )
    response9 = Response(
        body=""" I once had a job selling knock-off perfumes to retailers. In the training they taught us: the difference between rich people and poor people is that rich people take advantage of their opportunities. I didn't go back the second day. """,
        storyId='8',
        userId='3'
    )
    response10 = Response(
        body=""" Probably the best-written piece I read on Medium in a while. """,
        storyId='2',
        userId='4'
    )
    response11 = Response(
        body=''' Also reminded me of my time as a fundraiser for charities. Our bosses gave us the exact same crap. "Every no brings you closer to your yes" does not make sense. Failing with one person…... ''',
        storyId='3',
        userId='5'
    )
    response12 = Response(
        body=""" Ah, who said chivalry was dead? Or was that the Chevrolet that hit the obits? What the hell. You've kept your sense of humor, and besides - a gig's a gig! """,
        storyId='6',
        userId='4'
    )
    response13 = Response(
        body=''' This hit a little too close to home, reminding me of a college cold calling gig. I’ve since passed many “do you like to laugh” guys in NYC, especially around Times Square/midtown. Interesting to hear your experience and I enjoyed the read ''',
        storyId='6',
        userId='1'
    )
    response14 = Response(
        body=""" It's too bad you weren't selling Jimmy Failla tickets; I'd have bought some from you. Wonderful article! I'm glad to hear you eventually made editor and went on to better things. :) """,
        storyId='8',
        userId='2'
    )
    response15 = Response(
        body=""" Oh, you were one of those people who always hit me up on Times Square. I never have taken the bait although there is a comedy club on the Upper West Side that's very cool, and even boasts surprise performances from Chris Rock. No hard sell in my hood. """,
        storyId='4',
        userId='3'
    )

    db.session.add(response1)
    db.session.add(response2)
    db.session.add(response3)
    db.session.add(response4)
    db.session.add(response5)
    db.session.add(response6)
    db.session.add(response7)
    db.session.add(response8)
    db.session.add(response9)
    db.session.add(response10)
    db.session.add(response11)
    db.session.add(response12)
    db.session.add(response13)
    db.session.add(response14)
    db.session.add(response15)
    db.session.commit()

def undo_responses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.responses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM responses")

    db.session.commit()
