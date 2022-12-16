from app.models import db, Story, environment, SCHEMA

def seed_stories():
    story1 = Story(
        id='1', userId='1',story=""" Zero is a beautiful number. Not because it is round and cute (that could be an argument for it nevertheless) but because what it signifies. It marks the beginning of something. It marks the lowest something, or someone can go. It is the ultimate foundation to build anything upon.

Over last several years, I’ve started several things from scratch and have failed at many (thus going back to zero), and I’ve realized there’s nothing more liberating than being at zero because the only way from zero is upwards. A very good friend once told me, “Don’t worry if you’ve failed. Rockets that touch the sky always launch from the ground.”

As J K Rowling, one of my favorite authors says, “Rock bottom became the solid foundation on which I rebuilt my life.”

While zero is liberating, thrilling and exciting, it sometimes also is daunting and overwhelming. Sometimes, I have found myself afraid to do something because I was comfortable being at zero and the task to go from zero to one seemed unnerving. This challenge of writing twenty-six stories was one such adventure. I remember it was the first of April when I decided to pen down a story for each letter of the alphabet. I was afraid if I was unknowingly planning to fool myself on April 1st.

I had no clue what to write even for the first letter of the alphabet. I was afraid I’d ruin twenty-six stories if I begin writing them just for the sake of writing.

What gave me the courage to take up the challenge was to lower the expectations that I’d have from these stories. My purpose was not to write twenty-six bestseller stories. Mine was to make it a habit of writing every day. Some days everything that came out of my pen was garbage, and on a few days, I loved what my hands typed on the blank paper. And today, with this last story, I am back at zero — a solid foundation for the next adventure.

Writing has become my daily habit, and I can remember to write even without my calendar sending me a reminder. I am curious what could I make out of this habit. Shall I start another writing adventure? Will it be a similar series? Will be a novel (long due now)? Or something different altogether?

Whatever it’d be, I guess I’ll be little less nervous to begin whatever comes next. I am at zero again, and the only way to go from here is upwards. Realizing that there’ll be one less thing in my daily routine, I feel a particular kind of guilt. It’s the kind of guilt that you feel when you have an ice-cream without telling your younger sibling about it. You kind of like it that you had the ice-cream but also feel guilty for hiding it from them.

On the new adventure, whatever it’d be, it’s time to buy an ice-cream for them this time.

 """,
        tag='Zero',title='Zero',image='https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    story2 = Story(
        id='2', userId='2',story=''' That’s what I want my biography to be called. After all, you really would be amazed. The story goes like this. The year’s 2059 and twenty years ago, I was born on an overpopulated Earth. I remember my parents’ would quarrel almost every night. Both of them knew that it wasn’t either of their mistakes. They made some bets, and unfortunately, they failed.

In the year 2041, my parents gambled and deposited all their life’s earning with a private company who was planning a mission to take humans to hospitable Mars by the year 2050. Overpopulation was the whole Earth’s problem, and several companies promised people to take them to Mars. Everyone was betting all of their savings on one of these enterprises. My parents did too.

Unfortunately, of some thirty odd companies who took the deposits, only one could successfully attempt a mission to Mars but could take only seven people at a time. All others got shut down. It had been nine years since we’ve lost all our money.

“You must not have made me bet all of our money,” my father would say.

“I told you so,” my mother would reply.

“You had to stop me somehow; not just tell me to stop.”

Three years ago, I joined a new program by the United Nations, where the government pays me to attempt dangerous activities. The program was designed to bring down the population of the Earth down and also find human subjects for dangerous science experiments. The failure of space companies made the government create the program. Poor people like me participate in the program to feed their families.

On average, a participant lasts for between a few weeks to a couple of months. I’ve survived for three years. In last three years, I’ve been subjected to a field filled with active mines to allow scientists to calculate the average number of steps it’d take someone to step on a mine. I’ve been subjected to surgery where scientists inserted a device in my brain to experiment if they can create memories in my mind. I’ve been subjected to a dive in the ocean with little oxygen to allow scientists calculate how deep someone could dive on that little oxygen.

I have been subjected to hundreds of such experiments in last three years. And I’ve survived all of them. The family has enough wealth to make a bet on a Mars mission once again.

Tomorrow I am going to another experiment. I’ve been told I’ll be given variable doses of poison so that scientists can calculate what the minimum quantity of poison required to kill a human being is.

As we lay our lives down, science is being written. Like all the other times, I might come back alive from the tomorrow’s experiment too, and like always, you’ll be amazed. ''',
        tag='Amazed',title='You’ll Be Amazed!',image='https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    story3 = Story(
        id='3', userId='3',story=''' Xan is a character from my another story. Remember the time when I told you about my favorite story? Xan belongs there. Surprisingly, Xan is not a human being. Or an animal. Xan is a three-leaved plant that is hardly four inches tall. Legends have it that Xan is the first plant to ever breathe.

The leaves were purple when it first sprouted and through its life, it changed to green to yellow to red to orange to currently golden. The property that is most unsettling among all is that it can grant any wish, given the seeker’s desire must be a desperate one. Once the protagonist in my other story asked Xan, “But what is a desperate desire?”

To that, Xan replied, “Imagine you are swimming in an ocean. And suddenly you feel something touching your feet under the water. And before you realize, you find yourself pulled down into the ocean by something. You try to escape but the grip on your leg is tighter than what you can manage underwater. Within minutes you find yourself to be out of breath and there comes a time when you’d want nothing but some air. You’d not think of your job, or your friends, or your future. You’d be imagining just some air. You’d be desiring to breathe. You’d be desperate. That’s a desperate desire. If what you want is not a desperate desire, I know you can do without it, and therefore, I tend not to grant the wish.”

In the story, a girl, who was looking for her lost friend stumbled upon a cave in which hundreds of thousands of bodies lay dead, nicely arranged in several feet high racks. In one of those racks, she found her friend lying dead. And in the center of the cave, she saw a tiny plant with three golden leaves — Xan. Xan noticed a desperate desire in the girl to see her friend alive and breathing, and that’s when it granted her wish.

The girl found the friend standing in front of her — alive. But every granted wish has a cost. She had to get her memory wiped clean of the incident. Xan is neither a friend nor a foe. It’s as just to a God as it is to Devil. The girl’s memory was wiped clean and all she remembers of that incident now is just a story.

If she’d be asked, “Tell me about that incident in that cave,” she is most likely to start responding along the lines of, “I know a story of a girl who resurrected her friend in a cave far far away…”

She doesn’t know that the girl in the story that she narrates to everyone is herself. She tries often to remember how does she knows of this story but all her efforts go in vain. Her friend is just a good story to her. She loved reading stories. She is a story herself now.

''',
        tag='Xan',title='Xan is a character from my another story',image='https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    story4 = Story(
        id='4', userId='4',story=''' Throughout the world, television sets were stormed by the news of the discovery of a stone that had a wicked writing on it. The stone became the center of attention for the global media after some scientists claimed the stone to be engraved by aliens. The headlines read, “Aliens sent us a message. Scientists are onto decoding it” throughout the world.

I was sitting in my living room with my kids listening to the radio in the background when the song stopped playing and a cacophony voice started speaking. “An alien message has been received and we think, this news is more important than the romantic songs. Scientists are claiming that we are very close to talking to aliens and that they have found and contacted us first. They claim that aliens engraved their message on a large stone that’s found in the Grand Canyon by some hikers.”

I didn’t pay much attention to the radio but then one of my friends called me up to give me the news. In the evening, my Facebook feed was entirely filled with the photos and videos of a large black stone that had some engravings on it. Neither the photos nor the videos on the Facebook were clear for me to recognize the wicked writing on the stone. That’s when my curiosity grew in the stone and I turned on the television to a news channel to catch the whole news — the facts — not opinions of individuals.

The news channels showed crisp footage of the stone and I realized I could see the engravings clearly on the stone. On one frame, where the engraving was fully visible, I paused the transmission and moved closer to the screen to try to decipher what aliens wanted us to know.

And here’s the surprising thing. As I moved closer to the television screen I realized that I could understand what was engraved on the stone — effortlessly. It wasn’t English but it felt like I was reading English. I don’t know what language it was written in, but I could understand the meaning of it. Within seconds, in fact. And now, I am afraid. I am afraid because of what it said. It said:

The world collapses,
The world tears apart,
Sky rains sun,
Oceans burn the villages,
1 May 2017 is the date,
Beyond, it’ll be too late,
Only Dorothy Solem knows,
How to defuse the blows,
Hand this stone to her,
Whisper in her ears, then,
That her grandson has sent the message.

That’s what is written on the stone. There’s no alien message engraved on it. It’s a poem. But that’s not the problem. The problem is I am Dorothy Solem.

 ''',
        tag='Writing on the stone',title='Writing on the stone',image='https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )

    story5 = Story(
        id='5', userId='5',story=''' Iremember how our teachers used to ask us to build models of various things during our summer vacation. Sometimes, it used to be a globe. Sometimes, a monument. And sometimes, a volcano.

During one such summer vacation, I was assigned the homework to build a model of a volcano. I, like an obedient student, noted it down in my diary and came back home. Every year, my plan for summer vacation was to finish the homework in the first couple of weeks itself and then spend the rest of the vacation chilling out, but that never happened. That year wasn’t different. But it was different in a sense. I did finish all my homework in first few weeks and spent the last few weeks making the volcano.

Now, before I tell anything further, let me tell you that I’ve realized that I’ve inherited, not cultivated, my gene of ‘building’ things. Everyone in my family appreciates making stuff. I was told by my classmates that there are shops in the market that sold these pre-built models of globes and volcanos. I presented the proposal to my father, who straight away denied stating the reason, “If you’ll build, you’ll learn. If you don’t, you won’t.”

I wasn’t really happy about the situation because making the model would take away at least a week out of my chilling time. Nevertheless, I started making. I started by zeroing on a solid base, which I made out of a thick plywood. I coated the plywood with paper mash to give it a texture. I then started looking out for a foundational shape on top of which I could build my volcano. I found an unused earthen utensil.

By this time, I was joined by my brothers in helping me build the volcano. I decided to cover the earthen utensil using paper mash in the shape of a volcano and planned to color it in bright red as if lava is pouring out. Apparently, the plan didn’t impress my brothers. They said, “Paper mash?! Really?! Bad choice. You’ll paint the lava?! Bad choice again. If we are doing it, then let’s do it properly.” Then they concluded their complaints with the phrase, “LAVA MUST FLOW.”

We threw away my paper mash base, and instead built again using plaster of Paris. We used the earthen utensil and erected a pipe in the center of it before covering it up with thick layers of plaster of Paris. We then brought out our set of oil colors and colored it in not just bright red, but in the shades of black, green and red. The project took us a week to complete, and it looked like a real volcano, not the ones you see in cartoons.

It was the time for lava. My elder brother mixed red food color and baking soda and poured it in the pipe that made the mouth of the volcano. We left it to dry under the sun and within a day, it was ready. It turned out to be quite heavy. I remember, how when the schools reopened, I was holding the model of volcano wrapped in the newspaper and was trying to find a seat on the school bus.

Upon reaching the school, everyone kept their models in a corner of the class. Everyone who was assigned the homework to make the model of the volcano had submitted very similar looking models as if one person made them all. I realized my model was way different than theirs. I liked mine but I was embarrassed to reveal my over-engineered model and therefore, I submitted mine covered in the newspaper. I didn’t unwrap it.
Everyone, one by one, showed their models to the teacher and got the marks awarded for it. The teacher too mentioned, “You weren’t supposed to buy the models. You were supposed to make them yourself.” At that point, I wanted to stand up and tell the teacher that I had made mine and it sat in the corner of the class wrapped under the newspapers. But I didn’t. More than pride, I was embarrassed to have such a different volcano than everyone else.

In my mind, I was saying, “If my brothers hadn’t overtaken my project, I would have shown my model too and got the marks awarded.”

Months passed and my model still lay there in the corner, wrapped in the newspaper. The year was approaching the conclusion and by then, I had given up hopes of ever revealing my homework to the teacher. One day, when not many students were present in the class, the teacher announced, “I won’t teach today as there aren’t many people. You people can do whatever you feel like.” She then turned to the class monitor and asked, “Let’s clean the almirah. It contains lots of waste from the summer vacation submissions.”

Along with the class monitor, the teacher started cleaning the almirah, throwing everything that it contained. Many models were broken by then, and she picked up and threw them in the dustbin. Somewhere near the bottom of the almirah, she encountered a model covered in the newspaper. She tried to lift it and noticed it was unusually heavy. She turned to the class monitor and asked, “What’s this?”

“I don’t know, madam.”

She tore the newspaper and under it sat my model. My volcano. The one with black, green and red shades. It had accumulated some dust then but the teacher dusted it, picked it up and kept it on the table. She saw it from various angles as if she was trying to find something on it. She seemed to find it when she called out, “Mohit.”

I stood up. She asked, “Is it yours?”

“Yes, madam.”

“I don’t remember seeing it during the submissions. Have you submitted it yet?”

“No, madam.”

“Why?”

“Because… Because, it’s different, madam. It’s different from the other volcanos that you saw.”

She smiled at me, I turned embarrassingly redder. She then said, “This volcano will always stay in the almirah of the staff room, Mohit. This is beautiful. And you’re therefore awarded full marks for your summer vacation.”

I then, said, “This works too, madam.”

She didn’t understand what I said. I clarified, “If you pour some vinegar in the mouth of the volcano, the lava will flow. My brothers said, ‘Lava must flow.’”

I don’t know if she ever tried pouring in the vinegar but I do know that she kept that volcano on top of the staff room’s almirah. That almirah was to showcase the best of the models every year. The top of the almirah was what Oscars are to movies. Every day, I’d cross the staff room gazing at my volcano that sat silently on top of the almirah. It stayed there for several years and then I left the school.

Perhaps, summer vacation homework is to make us learn something and what I learned that year was —

If you’ll make it, you’ll learn it. If you don’t, you won’t.
I shouldn’t be afraid to show up just because I am different.
And, the lava must flow.
 ''',
        tag='Volcano',title='Volcano',image='https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    )
    story6 = Story(
        id='6', userId='5',story=''' Bilal was alone at home on a Saturday evening, and on such occasions, he preferred watching porn. He bolted his room from inside and turned his laptop on. Plugging in his earphones, he played porn on the internet. After a while, his eyes fell on a sparkling, glittering ad that seemed to dance on the right side of the screen. The ad had one huge word — UNBOX — written over it. And below the huge word, had, “Imran recommends this to Bilal” written.

Imran was Bilal’s best friend. For a minute, Bilal couldn’t believe how an ad could know about his friend. While there was nothing flattering to attract Bilal to the ad but the mention of his best friend’s name made him click on the ad regardless.

The ad took him to a web page that listed an app with the tagline, “Unbox your future”. He scrolled down the web page and found another mention of Imran. This time, besides the phrase, “Imran recommends this to Bilal”, there was a testimonial from Imran as well. It read, “Have heard of such things only in stories. What this app does is a miracle. You’ll have to try it yourself to believe it.”

This evoked a storm of curiosity in Bilal. He didn’t read any further and directly clicked on the ‘Download’ button that triggered a download on his phone. Within minutes, a new icon sat on Bilal’s home screen staring at him. The icon had an image of a spooky-looking crystal ball. He clicked open the app.

The first screen read — “Unbox shows you a video. One video.”

He tapped. The second screen read — “The video contains a thirty-second clip from your future.”

He tapped. The third screen read — “Once you watch it, you can’t unwatch it. Proceed only if you understand the consequences of knowing your future.”

The screen had two buttons — “Close app” and “Watch”. Without a second thought, Bilal tapped the button to watch the clip from his future.

A countdown of ten seconds began on the screen with a button below it that said, “Bailout”. Bilal didn’t bail out. He waited patiently for the countdown to run out. A blurred video started playing. In the video, Bilal could identify himself. He saw he was running after a couple of goons and shouting, “Stop you bastards! You cannot kill my mother and run away.” The video became clearer and Bilal could see himself clearly. He was sweating, had teary eyes and was relentlessly running after the goons. Before he could register what the clip was about, the video clip ended.

A thank you message popped up on the screen, “Thank you for watching. We wish we could tell you when this video clip will take place in reality, but we’re afraid, we cannot.”

He tapped. And another message greeted, “Have a great day!”

Bilal called Imran only to realize that Imran had never heard of the Unbox app. He was left with a knowledge of future that he wished he didn’t know. ''',
        tag='Unbox',title='Unbox',image='https://images.pexels.com/photos/327131/pexels-photo-327131.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )
    story7 = Story(
        id='7', userId='2',story=''' Steve was among those who took pride in being called busy. He was a salesman, single and smart. He was among those who wake up early in the morning, go to workout, go to work jumping from one meeting to another, come back home by dusk, spend time with the pet and go to sleep by nine o’clock.

He was in denial of his loneliness and somehow this had made him make extra efforts to look busy to the world. No matter what happens, no one must know Steve is lonely! Getting labeled busy is much better than getting labeled lonely, he thought.

Sometimes, he made special effort to look busy. One time, he had a sales meeting in the lobby of a five-star hotel at ten in the morning. The other person was there on time and called Steve several times to take an update on his arrival. Every time, Steve told him he would be there in next ten minutes. Steve wasn’t really running late. He could be found sitting in a nearby cafe sipping coffee and looking at his wrist watch. He was sitting there since half past nine. As soon as the clock struck half past ten, he got up, brushed his blazer and walked the two-minute long distance to the hotel’s lobby.

“Hi, Mr. Smith. Thank you for waiting. I got stuck in this other meeting. The team will take over that meeting and I am all yours for next one hour. Would you like to have something? Tea? Coffe? Water?”

Mr. Smith had never seen a guy who reaches late and shows such enthusiasm. Looking this enthusiasm in Steve gave Mr. Smith a sense that it wasn’t the first time he was late to a meeting. And who is regularly late to the meetings? Busy people. And who is busy? Important people. For Mr. Smith, Steve seemed to be an important person. He smiled and replied, “Water will do just fine, Steve.”

Steve’s trick had never failed. Being late to the meetings had helped Steve close more sales. He closed as many sales in a week as others did in the whole quarter. No one knew his trick. His compensation was appraised every three months and was promoted every six months. The more late he got to meetings, the more sales he closed. The more sales he closed, the more he got promoted. The more he got promoted, the busier he got.

Every once in awhile, when going to bed at night, he used to count how many sales he had closed in that month. It used to be a three digit number mostly. He then used to count how many friends he had, and that count never went past zero. Before he could contemplate anything of his situation, he would fall asleep, only to wake up the next day — busier.

On one such night, as his eyes were drooping, his phone rang.

“Hello.”

“Hi Steve,” a girl called out his name.

“Who’s this?”

“Stella.”

“Stella? S… t… e… l… l… a… Stella. STELLA! Hi, Stella. How have you been? Long time.”

“Yeah, ten years almost.”

“It had been ten years! Time moves fast.”

“It doesn’t. I miss you, friend.”

 ''',
        tag='Time to move fast',title='Time to move fast',image='https://images.pexels.com/photos/226400/pexels-photo-226400.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )
    story8 = Story(
        id='8', userId='3',story=''' Not many people know about my admiration for pancakes. I love them. I love when maple syrup flows over it, and I use my fork and knife to cut a piece, dip in the maple syrup and put it in my mouth to savor the taste. It’s not like I have pancakes day in and day out. I love having them when I’m having them.

There’s a cafe on my way to the gym that serves delicious pancakes but the catch is that it serves them only between 8 am and 11 am — that’s the breakfast timing there. I call it a catch because I’ve tried several times but I could never reach the cafe before 11 am in the morning. Every time I pass in front of the cafe, my tongue remembers the taste the pancake dipped in maple syrup. Yum!

For a couple of weeks now, I’ve been making up my mind to have some pancakes there. I don’t eat anything besides a couple of bananas before my workout. It had to happen after the workout. My workout timings were from 10 am to 11 am in the morning, post which I’d reach my office, work for till midnight-ish, reach home, have salad, read something, play some chess and go to bed by 2 am. Next day, I’d wake up at 8, get hold of work, read something, get ready and leave for the workout by 10 am.

Two days ago, my brother and I decided to have a pancake somehow today. After waking up in the morning today, I skipped reading to save some time. We rushed out of the home by 9 am and we had dumbbells in our hands half an hour later. After working out for an hour, we rushed to the wet area to take a shower. We’re out of the club by 10:45 am. The cafe was ten minutes away. My brother drove like batman driving batmobile — overtaking everyone — and parked the car in front of the cafe by 10:50 am.

The ordering area was on the first floor; we rushed and were at the counters by 10:53 am. Just made it in time!

The attendant behind the counter took our order and asked us to wait for a few minutes while the order gets prepared. Our mouths were watering meanwhile. After weeks of planning, after several failed attempts, we had just placed our order for the pancakes. The next two minutes were the slowest to pass.

The attendant came back and said, “Sir, I’m sorry. We’ve run out of premix. Pancakes won’t be possible today. You might want to order something else.”

Our faces fell. “WHAT!” we exclaimed in unison.

She confirmed, “I’m sorry.”

My brother looked in my eyes and said, “We’ll come back again tomorrow.”

I added, “We’ll come back every day until we get to have the pancakes.”

We went out the door with an agenda on our minds. Tomorrow, we’ll run for the pancakes again. Until we get some. ''',
        tag='Running for pancakes',title='Running for pancakes',image='https://images.pexels.com/photos/326168/pexels-photo-326168.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )
    story9 = Story(
        id='9', userId='4',story=''' “LARA, SIT DOWN,” the teacher was yelling at the top of his voice. “I NEED YOU TO SHUT YOUR MOUTH AND TAKE YOUR SEAT RIGHT NOW.”

Lara, an inquisitive girl, who had an expression of confusion all over her face, in her irritatingly calm manner tried to defend herself, “But sir, I just wanted to know…”

Before she could finish her sentence, a loud roar fell on her ear drums, “GET OUT OF MY CLASS. RIGHT NOW.” She looked up to find the teacher’s hand pointing towards the door. She turned her head around to see other students. Ones in the front benches were stunned looking at the scene. Ones in the back benches were giggling and happy to see someone annoying the person who disturbed them everytime they tried having their lunch amid an ongoing class. The ones in the middle of these two extremes casually ignored the drama and kept themselves immersed in their own worlds of gossip.

Lara, with her head hung down, walked out of the classroom and headed towards the garden. This wasn’t the first time she was thrown out of the classroom. If someone had to come searching for Lara, she would prefer searching for her in the garden first. That’s the reputation she had made for herself. She was notoriously famous in the whole school for her gifted talent of annoying teachers.

On one occasion, a teacher was telling the students how polar bears hibernate throughout the winters. Lara then asked, “Are there any other animal that pays unusual heed to winters?”

“There are many, Lara.” The teacher replied.

“Who all?”

“There are many, Lara. If I start listing them down, it’d take a long time. Ask me later, okay?”

Instead of accepting the answer, she said, “I’ve seen squirrels collecting nuts so that they can last through winters.”

The teacher looked stupefied. She said, “Yes, squirrels, for example. They don’t hibernate but they collect nuts. Right.”

“But I wonder something, miss,” Lara replied, and everyone realized what sort of question followed the phrase, “I wonder who taught squirrels to collect nuts. If a baby is born as winter approach, they could have seen their mothers collecting nuts. But I wonder about the baby squirrels who are born in summer. Before the winter arrives, their mother leaves them on their own. Who teaches them then?”

And within a few minutes, she found herself out of the class, strolling in the garden. Like always, she stood under the tree and pretended to talk to squirrels. Perhaps, she was asking them the same question. ''',
        tag='Question',title='Question',image='https://images.pexels.com/photos/3151907/pexels-photo-3151907.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )
    story10 = Story(
        id='10', userId='8',story=''' Everyone knew Mrs. Stella lived alone in a tiny log house at the end of the road and yet they found her cheerful every time they ran into her. Sometimes they stopped her and asked the secret of her happiness, to which she always replied, “My friends.”

Her smile — the smile of an elderly lonely woman — discouraged almost everyone to ask any follow-up question. Almost everyone. Almost. Joey was the notorious kid down the block who never gave up. He’d ask, “I am your friend. Who else? Where are they? Will they play with me?”

She’d shrug her shoulders with a faint smile on her lips, as if they are trying to conceal a secret, and pull out a chocolate out of her bag for Joey. “Here’s your chocolate, Joey,” she’d say extending her hand. Joey would grab the chocolate and run away to play with his friends. Not today. Today he seemed determined. He declined the chocolate and insisted on meeting her other friends.

She kept telling him, “Joey. I’ll make you meet them some other day.”

“I want to meet them today, Mrs. Stella.”

“What if they don’t want to play with you?”

“They won’t play with me, Mrs. Stella?” Joey said in a tone of disappointment.

Mrs. Stella’s face fell. To cheer Joey up, she said, “Come on, let’s find out then. Let’s go and meet them.”

Joey’s eyes sparkled and a smile through which white bright teeth were visible was all over his little face. He exclaimed, “We are going to meet your friends!”

Both began walking down the street, Joey following Mrs. Stella and enjoying his chocolate. “Are we there yet, Mrs. Stella?”

“Not yet.”

After a few minutes, still engrossed in his chocolate, Joey asked, “Are we there yet, Mrs. Stella?”

“Not yet, Joey.”

Again after a few minutes, “Are we there yet?”

“We indeed are.”

Joey’s eyes moved up for the first time from his chocolate and found himself standing in front of a building that bore an uninteresting gray board on which golden letters spelled ‘Library’.

“Here?” Joey asked dumbfounded.

“Come on. Let’s go inside.”

They both entered the library and in the main hall, Joey found himself standing in the middle of huge racks containing hundreds of thousands of books in total.

Brimming with confusion, Joey asked, “Where are your friends, Mrs. Stella? There’s no one here.”

Mrs. Stella smiled at him. Holding his shoulders and moving in various directions, she animatedly told, “Here are my friends, Joey. Frank lives in the third rack, fifth shelf. He graduated yesterday. His mother is proud of him. Patricia in first rack, second shelf. Her boyfriend proposed to her this week. She is ecstatic these days. Leon in the last shelf on this rack. He has finally moved to a different school where I hope he doesn’t get beaten by the bullies again. Beatrice lives downstairs. She is traveling to Prague next week. Johnsie lives mostly on this rack. She just lost her arm. Poor child. James lives upstairs. He just got married. Here are my friends, Joey. They are my friends.”

Joey’s face bore an even more confused expression. He tried to comprehend what he just heard. Unable to find a relevant answer, he remarked, “I don’t think your friends will play with me,” and ran outside the building leaving Mrs. Stella alone among her friends.

 ''',
        tag='Librarian',title='Librarian',image='https://images.pexels.com/photos/3732527/pexels-photo-3732527.jpeg?auto=compress&cs=tinysrgb&w=1600'
    )
    story11 = Story(
        id='11', userId='6',story=''' Afterlife isn’t what I thought it’d be. I expected an arching door welcoming me. I expected to be greeted under the bright sun on green grasslands. All this in case I was going to what living beings called The Heaven. In case I was sorted into The Hell, I had a different set of expectations. Blinding darkness all around. Raging fire. And Satan’s roaring laughs. Nope. Afterlife is nothing like I expected.

Instead, I found myself standing in a pearly white room — probably, a dome it was as I couldn’t see any corner. I was naked. I turned around on the spot several times to locate another person whom I can ask for directions, but all I found was a screen greeting me. It read -

Chandler Bing. Karma — 27

And below this information were two big buttons labeled ‘Spend’ and ‘Give’. There were no instructions what so ever. Seeing a two digit number in front of my name was already disappointing and the lack of further information made me anxious.

“Am I supposed to press either of the buttons?” I wondered.

I could spend it but don’t know what this low karma would get me. I could give but don’t know to whom. Like living beings usually do, I shouted. “What am I supposed to do?”

No answer. Afterlife is not unlike life for it doesn’t give answers either.

I am not the one who gives up easily. I tried again. And again. And again.

“Is anyone here”?

“What will happen if I press ‘Spend’”?

“What if I press ‘Give’”?

No answers at all. The low number didn’t encourage spending, and therefore, I chose to give the karma away.

And before I knew the screen disappeared and the white dome started taking shape, as if it was dispersing into the thin air and shapes started forming. My vision blurred. I forgot my language. My size shrunk and I found myself wrapped in a blanket, naked, in the hands of a woman, whom I somehow recognized to be my new mother.

I was reborn. Reincarnated would be a better description for I had all my past memories but there was no language for me to narrate those memories to the world. I knew what afterlife looked like.

Instead, I used the only language I knew. I started crying.

I still wonder what would have happened if I had pressed the other button.

 ''',
        tag='Give',title='Give',image='https://cdn.pixabay.com/photo/2017/11/14/00/57/christmas-2947257__340.jpg'
    )
    story12 = Story(
        id='12', userId='7',story=''' Iam in jail. A small cell to be more accurate. It’s dark in here. I shouldn’t have been here. What I call ‘heroism’, this world calls a ‘murder’. I just prevented a zombie apocalypse — by killing the first one to turn — my own wife. For a very brief moment right after I pulled the dagger out of her back, I felt like a hero, and then it dawned on me that the very world I saved, will become my enemy thereafter.

A night before while going to bed, Jesse, like every day, told me she loved me, kissed me on the forehead and wished me good night. I nodded my head, pulled up the sheet and closed my eyes. I slept facing away from her because she still was reading a book with the lights on her side switched on.

It was then that I felt Jesse’s hand in my hair. “This is going to be a good night,” I thought to myself and sunk further under the sheet. Jesse moved the hand from my head to the shoulder and I decided to turn myself to face her, and in my hand was the dagger that I had hidden for the purpose of that night.

As soon as she saw the dagger, she retracted her hand, threw the book, turned around and was about to begin running. I was quick. With a swift movement of my hand, the dagger was through her back and her screams were silenced even before they could come out of her mouth. This is the moment when I felt like a hero.

The man in a black suit appeared through the door and congratulated me. He was the same man who told me last week that Jesse would turn into a zombie tonight. “You did a good job, Mr. White. Your sacrifice will be remembered for a long time. You are the hero that this world needed,” said the man. I nodded. The pride was visible in my smile. The man turned around and went away from the same door that he came in. This is the moment when I realized what I’d done.

The next thing I remember is a vague part of the judgment — “This murder is similar to the last twenty-five murders this town has seen. And apparently, all of these men have saved the world from a zombie apocalypse. Like others, put him in a dark cell.”

I don’t think the world needs a hero. Perhaps this world needs an apocalypse. And when it comes, I will be safe in this dark cell. ''',
        tag='Apocalypse',title='pocalypse',image='https://cdn.pixabay.com/photo/2019/10/07/11/26/winter-landscape-4532412__340.jpg'
    )
    story13 = Story(
        id='13', userId='6',story=''' “Goooooood Moooooorning!” Vishwas exclaimed in full zeal.

“What is so good about the morning?!”

“That was rude.”

“Vishwas. Tell me one thing. How would you react if I will have an affair?”

Silence! This question made him uncomfortable. He couldn’t speak.

Several thoughts went on in his mind. “Did she see me with Ana? She knows her, but just the name. Did she check my phone? What will I tell her? She loves me a lot.”

Looking at Vishwas lost in his thoughts, Namrata wondered, “Why did I ask him this question? He is not ready yet. I am not ready yet. Is Ajay ready?

*bell rings*

Vishwas opens the door and stands there like a statue, almost forgetting to welcome the guests.

“Namrata! Your husband is so unwelcoming. Didn’t you tell him, we are coming for brunch today?” said a very familiar voice which turned her into statue as well.

The boss had come to visit with his wife, Ana. ''',
        tag='Expected lies',title='Expected lies',image='https://cdn.pixabay.com/photo/2018/01/04/14/11/viburnum-3060769__340.jpg'
    )
    story14 = Story(
        id='14', userId='8',story=''' “Hey Namrata, Will it be possible for you to reach home on your own.”

As I will be late today.” *vishwas over the phone”

“You will get late! Ah.. ok!” *Namrata replied*

“Oh! So Mr.Punctual is getting late? That’s Nice” *Ajay said*

“Hhmmm..” *Namrata nodded*

“Where are you lost? You should be happy that now we will have more time to spend together.” *Ajay said*

“Vishwas never gets late. I hope everything is fine with him.” *Namrata replied*

“As if it really matters to you. Just chuck that loser out of your life. I think he has somebody in his life too. Haha… Now dont worry and lets go out for dinner” said Ajay.

“How dare you to say that? He is my husband and you dont have any right to say anything about him. And what do you mean that he is also in a realtionship. He loves me.” *Namrata replied*

“Ohhh. Someone got offended. I take my words back. Now lets proceed?.” *Ajay said*

“No Ajay, I need to leave. I am not feeling well.” Namrata takes her bag and leave for her house.

It was a sleepless night for her. The very thought of Vishwa’s affair was killing her. It was like a sudden relaisation that had happened to her. She found herslef in Vishwas’s shoes and the pain was unbearable. ''',
        tag='Realizations',title='Realizations',image='https://cdn.pixabay.com/photo/2020/01/05/07/22/winter-4742436__340.jpg'
    )
    story15 = Story(
        id='15', userId='7',story=''' he old man stood up to leave. He folded his hands and said, “Beta, I hope there are no hard feelings for any of us. Please try to sort out things with Sanjay, he is a nice guy and he has been suffering a lot lately.”

He saw Ria and brought his hand near her head to give her blessings and then left. Ria and Aman were completely confused and Mrs. Malhotra kept on weeping unable to figure out how to make things better.

After a while they asked her mother about everything that had happened. Mrs. Malhotra told them that the old man that was there in their house was Miss. Lilly’s father and he had come to clarify all the misunderstandings.

“Mom please explain everything. I’m not getting this at all!” Ria said in a confused tone.

“Your dad wasn’t cheating on us, he was just helping someone in need.”

“But, Miss. Lilly? What about her?” Ria asked.

“Lilly is your father’s distant cousin who had come here in search of a job. They had met only once when he was of 12 and Lilly, just 1. After that, because of some family issues they never met again until Lilly got a job offer at your dad’s company. Some months later they got to know about each other when her father, the man who came today, was diagnosed with cancer and your father went to see him with some other colleagues. Your father, as you know his nature, started helping them monetarily and didn’t inform me as he knew I would not support that. I hated his habit of showering money on his good for nothing relatives.”

“What? Cousins? And that ring that you found?” Ria asked.

“Lilly loved your father’s partner and they were going to get married soon. He went to buy an engagement ring with her as his partner had gone somewhere for some time. Lilly had given him the ring to hand it over to the person she was getting married to.”

“Ohh my God! She died in that accident and dad took all the blame on himself. It wasn’t his fault!”, Ria started crying. She realized that they had made a major mistake.

“He was in such a wretched condition as he thought of himself as a murderer and because of that his uncle was left alone, fighting from cancer. He went to see his uncle everyday out of concern and guilt. We, on the other hand, accused him of cheating on us. He had no way to overcome that depression and I was not there to make him feel better, to support him.” Mrs. Malhotra felt guilty.

Ria and her mother decided to go back to her father to apologize and clear all the confusion.

 ''',
        tag='Guilt',title='Guilt',image='https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875__340.jpg'
    )


    db.session.add(story1)
    db.session.add(story2)
    db.session.add(story3)
    db.session.add(story4)
    db.session.add(story5)
    db.session.add(story6)
    db.session.add(story7)
    db.session.add(story8)
    db.session.add(story9)
    db.session.add(story10)
    db.session.add(story11)
    db.session.add(story12)
    db.session.add(story13)
    db.session.add(story14)
    db.session.add(story15)
    db.session.commit()

def undo_stories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.stories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM stories")

    db.session.commit()
