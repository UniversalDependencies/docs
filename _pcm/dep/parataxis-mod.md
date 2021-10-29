---
layout: relation
title: 'parataxis:mod'
shortdef: 'parataxis:mod'
udver: '2'
---

The relation `parataxis:mod` is used for clausal modifiers.

~~~ conllu
# visual-style 2 6 parataxis:obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white

1	#	#	PUNCT	_	_	13	punct	_	_
2	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	3	subj	_	_
3	fit	fit	AUX	_	Mood=Pot	13	parataxis:mod	_	_
4	even	even	ADV	_	_	5	mod	_	_
5	dey	dey	VERB	_	VerbType=Cop	3	comp:aux	_	_
6	for	for	ADP	_	_	5	comp:pred	_	_
7	queue	queue	NOUN	_	_	6	comp:obj	_	_
8	for	for	ADP	_	_	5	mod	_	_
9	one	one	NUM	_	NumType=Card	10	det:num	_	_
10	week	week	NOUN	_	_	8	comp:obj	_	_
11	<	<	PUNCT	_	_	3	punct	_	_
12	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	13	subj	_	_
13	no	no	AUX	_	Polarity=Neg	0	root	_	_
14	go	go	AUX	_	Aspect=Prosp	13	comp:aux	_	_
15	collect	collect	VERB	_	_	14	comp:aux	_	_
16	receipt	receipt	NOUN	_	_	15	comp:obj	_	_
17	//	//	PUNCT	_	_	13	punct	_	_

1	PUNCT	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	ABIL	_	_	_	_	0	_	_	_
4	even	_	_	_	_	0	_	_	_
5	be	_	_	_	_	0	_	_	_
6	for	_	_	_	_	0	_	_	_
7	queue	_	_	_	_	0	_	_	_
8	for	_	_	_	_	0	_	_	_
9	one	_	_	_	_	0	_	_	_
10	week	_	_	_	_	0	_	_	_
11	PUNCT	_	_	_	_	0	_	_	_
12	you	_	_	_	_	0	_	_	_
13	NEG	_	_	_	_	0	_	_	_
14	PROSP	_	_	_	_	0	_	_	_
15	collect	_	_	_	_	0	_	_	_
16	receipt	_	_	_	_	0	_	_	_
17	PUNCT	_	_	_	_	0	_	_	_

1	you	_	_	_	_	0	_	_	_
2	can	_	_	_	_	0	_	_	_
3	even	_	_	_	_	0	_	_	_
4	be	_	_	_	_	0	_	_	_
5	in	_	_	_	_	0	_	_	_
6	line	_	_	_	_	0	_	_	_
7	for	_	_	_	_	0	_	_	_
8	one	_	_	_	_	0	_	_	_
9	week	_	_	_	_	0	_	_	_
10	and	_	_	_	_	0	_	_	_
11	you	_	_	_	_	0	_	_	_
12	won't	_	_	_	_	0	_	_	_
13	be	_	_	_	_	0	_	_	_
14	able	_	_	_	_	0	_	_	_
15	to	_	_	_	_	0	_	_	_
16	get	_	_	_	_	0	_	_	_
17	a	_	_	_	_	0	_	_	_
18	receipt	_	_	_	_	0	_	_	_

~~~
