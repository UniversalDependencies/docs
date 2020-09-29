---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

Parataxis is a relation for "side-by-side sentences" including reported speech (1), parenthetical comments and clausal interjections (2), tag questions (3), and generally pairs of clauses that are pragmatically understood to be related in a discursive way despite lacking linking words between them (4). Clauses introduced after a colon (冒號 "：") or long dash (破折號 "──") also exemplify this kind of usage (5).

~~~ conllu
# visual-style 4 11 parataxis	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	佢	_	PRON	_	_	4	nsubj	_	3SG.M
2	突然間	_	ADV	_	_	4	advmod	_	suddenly
3	大聲	_	ADV	_	_	4	advmod	_	loudly
4	叫	_	VERB	_	_	0	root	_	yell
5	：	_	PUNCT	_	_	11	punct	_	_
6	「	_	PUNCT	_	_	11	punct	_	_
7	我	_	PRON	_	_	11	nsubj	_	1SG
8	係	_	VERB	_	_	11	cop	_	be
9	個	_	NOUN	_	_	11	det	_	CL:generic
10	大	_	ADJ	_	_	11	amod	_	big
11	傻瓜	_	NOUN	_	_	4	parataxis	_	idiot
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
# visual-style 3 7 parataxis	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	呢度	_	PRON	_	_	3	obl	_	here
2	都	_	ADV	_	_	3	advmod	_	also
3	有	_	VERB	_	_	0	root	_	have
4	臭豆腐	_	NOUN	_	_	3	obj	_	stinky-tofu
5	（	_	PUNCT	_	_	7	punct	_	_
6	非常之	_	ADV	_	_	7	advmod	_	super
7	好食	_	ADJ	_	_	3	parataxis	_	tasty
8	㗎	_	PART	_	_	7	discourse:sp	_	SP
9	！	_	PUNCT	_	_	7	punct	_	_
10	）	_	PUNCT	_	_	7	punct	_	_

1	"They	_	_	_	_	0	_	_	_
2	also	_	_	_	_	0	_	_	_
3	have	_	_	_	_	0	_	_	_
4	stinky	_	_	_	_	0	_	_	_
5	tofu	_	_	_	_	0	_	_	_
6	here	_	_	_	_	0	_	_	_
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
2	嬲	_	VERB	_	_	0	root	_	get-angry
3	嘑	_	PART	_	_	2	discourse:sp	_	SP
4	，	_	PUNCT	_	_	5	punct	_	_
5	係	_	VERB	_	_	2	parataxis	_	be
6	唔	_	ADV	_	_	7	advmod	_	NEG
7	係	_	VERB	_	_	5	conj	_	be
8	？	_	PUNCT	_	_	5	punct	_	_

1	"He's	_	_	_	_	0	_	_	_
2	angry,	_	_	_	_	0	_	_	_
3	isn't	_	_	_	_	0	_	_	_
4	he?"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 9 parataxis	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	佢	_	PRON	_	_	4	nsubj	_	3SG.M
2	係	_	VERB	_	_	4	cop	_	be
3	紀律	_	NOUN	_	_	4	compound	_	discipline
4	部隊	_	NOUN	_	_	0	root	_	team
5	，	_	PUNCT	_	_	9	punct	_	_
6	你	_	PRON	_	_	9	nsubj	_	2SG
7	都	_	ADV	_	_	9	advmod	_	also
8	會	_	AUX	_	_	9	aux	_	will
9	係	_	VERB	_	_	4	parataxis	_	be

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
14	one."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 11 parataxis	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	買	_	VERB	_	_	0	root	_	buy
3	呢	_	DET	_	_	5	det	_	this
4	本	_	NOUN	_	_	3	clf	_	CL:book
5	書	_	NOUN	_	_	2	obj	_	book
6	喇	_	SP	_	_	2	discourse:sp	_	SP
7	──	_	PUNCT	_	_	11	punct	_	2SG
8	嗰	_	DET	_	_	9	det	_	that
9	本	_	NOUN	_	_	11	nsubj	_	CL:book
10	唔	_	ADV	_	_	11	advmod	_	NEG
11	好	_	ADJ	_	_	2	parataxis	_	good
12	呀	_	PART	_	_	11	discourse:sp	_	SP

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
<!-- Interlanguage links updated Út zář 29 20:23:42 CEST 2020 -->
