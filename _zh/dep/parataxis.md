---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

Parataxis is a relation for "side-by-side sentences" including reported speech (1), parenthetical comments and clausal interjections (2), tag questions (3), and generally pairs of clauses that are pragmatically understood to be related in a discursive way despite lacking linking words between them (4). Clauses introduced after a colon (冒號 / _màohào_ "：") or long dash (破折號 / _puòzhéhào_ "──") also exemplify this kind of usage (5).

~~~ conllu
# visual-style 4 11 parataxis	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	他	_	PRON	_	_	4	nsubj	_	3SG.M
2	突然	_	ADV	_	_	4	advmod	_	suddenly
3	大聲	_	ADV	_	_	4	advmod	_	loudly
4	叫	_	VERB	_	_	0	root	_	yell
5	：	_	PUNCT	_	_	11	punct	_	_
6	「	_	PUNCT	_	_	11	punct	_	_
7	我	_	PRON	_	_	11	nsubj	_	1SG
8	是	_	VERB	_	_	11	cop	_	be
9	個	_	NOUN	_	_	11	det	_	CL:generic
10	大	_	ADJ	_	_	11	amod	_	big
11	笨蛋	_	NOUN	_	_	4	parataxis	_	idiot
12	！	_	PUNCT	_	_	11	punct	_	_
13	」	_	PUNCT	_	_	11	punct	_	_

1	"He	_	_	_	_	0	_	_	_
2	suddenly	_	_	_	_	0	_	_	_
3	yelled	_	_	_	_	0	_	_	_
4	out	_	_	_	_	0	_	_	_
5	loud,	_	_	_	_	0	_	_	_
6	'I'm	_	_	_	_	0	_	_	_
7	a	_	_	_	_	0	_	_	_
8	big	_	_	_	_	0	_	_	_
9	idiot!'"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 8 parataxis	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	這	_	DET	_	_	2	det	_	this
2	市場	_	NOUN	_	_	4	nsubj	_	market
3	也	_	ADV	_	_	4	advmod	_	also
4	有	_	VERB	_	_	0	root	_	have
5	臭豆腐	_	NOUN	_	_	4	obj	_	stinky-tofu
6	（	_	PUNCT	_	_	8	punct	_	_
7	超	_	ADV	_	_	8	advmod	_	super
8	好吃	_	ADJ	_	_	4	parataxis	_	tasty
9	的	_	PART	_	_	8	discourse:sp	_	SP
10	！	_	PUNCT	_	_	8	punct	_	_
11	）	_	PUNCT	_	_	8	punct	_	_

1	"This	_	_	_	_	0	_	_	_
2	market	_	_	_	_	0	_	_	_
3	also	_	_	_	_	0	_	_	_
4	has	_	_	_	_	0	_	_	_
5	stinky	_	_	_	_	0	_	_	_
6	tofu	_	_	_	_	0	_	_	_
7	(it's	_	_	_	_	0	_	_	_
8	super	_	_	_	_	0	_	_	_
9	tasty!)."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 5 parataxis	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG
2	生氣	_	VERB	_	_	0	root	_	get-angry
3	了	_	PART	_	_	2	discourse:sp	_	SP
4	，	_	PUNCT	_	_	5	punct	_	_
5	是	_	VERB	_	_	2	parataxis	_	be
6	不	_	ADV	_	_	7	advmod	_	NEG
7	是	_	VERB	_	_	5	conj	_	be
8	？	_	PUNCT	_	_	5	punct	_	_

1	"He's	_	_	_	_	0	_	_	_
2	angry,	_	_	_	_	0	_	_	_
3	isn't	_	_	_	_	0	_	_	_
4	he?"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 10 parataxis	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
1	他	_	PRON	_	_	4	nsubj	_	3SG.M
2	是	_	VERB	_	_	4	cop	_	be
3	紀律	_	NOUN	_	_	4	compound	_	discipline
4	部隊	_	NOUN	_	_	0	root	_	team
5	，	_	PUNCT	_	_	10	punct	_	_
6	你	_	PRON	_	_	10	nsubj	_	2SG
7	也	_	ADV	_	_	10	advmod	_	also
8	將	_	ADV	_	_	10	advmod	_	soon
9	會	_	AUX	_	_	10	aux	_	will
10	是	_	VERB	_	_	4	parataxis	_	be

1	"He	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	member	_	_	_	_	0	_	_	_
5	of	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	disciplinary	_	_	_	_	0	_	_	_
8	team	_	_	_	_	0	_	_	_
9	--	_	_	_	_	0	_	_	_
10	you	_	_	_	_	0	_	_	_
11	will	_	_	_	_	0	_	_	_
12	also	_	_	_	_	0	_	_	_
13	be	_	_	_	_	0	_	_	_
14	one	_	_	_	_	0	_	_	_
15	soon."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 11 parataxis	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	買	_	VERB	_	_	0	root	_	buy
3	這	_	DET	_	_	5	det	_	this
4	本	_	NOUN	_	_	3	clf	_	CL:book
5	書	_	NOUN	_	_	2	obj	_	book
6	吧	_	SP	_	_	2	discourse:sp	_	SP
7	──	_	PUNCT	_	_	11	punct	_	2SG
8	那	_	DET	_	_	9	det	_	that
9	本	_	NOUN	_	_	11	nsubj	_	CL:book
10	不	_	ADV	_	_	11	advmod	_	NEG
11	好	_	ADJ	_	_	2	parataxis	_	good

1	"You	_	_	_	_	0	_	_	_
2	should	_	_	_	_	0	_	_	_
3	buy	_	_	_	_	0	_	_	_
4	this	_	_	_	_	0	_	_	_
5	book;	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	one	_	_	_	_	0	_	_	_
8	is	_	_	_	_	0	_	_	_
9	not	_	_	_	_	0	_	_	_
10	good."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:59:07 CET 2021 -->
