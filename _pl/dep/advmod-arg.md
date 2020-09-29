---
layout: relation
title: 'advmod:arg'
shortdef: 'adverbial complement'
udver: '2'
---

The `advmod:arg` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for adverbial complements that are required to complete the meaning of a verb. The adverbial complements are realised as adverbs or adverbial phrases. 

~~~ conllu
# visual-style 2 3 advmod:arg color:blue
1	Każdy	każdy	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	2	nsubj	_	_
2	chce	chcieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	dobrze	dobrze	ADV	adv:pos	Degree=Pos	2	advmod:arg	_	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	2	punct	_	_
~~~

~~~ conllu
1	Everyone	_	_	_	_	_	_	_	_
2	means	_	_	_	_	_	_	_	_
3	well	_	_	_	_	_	_	_	_
4	.	_	_	_	_	_	_	_	_
~~~

~~~ conllu
# visual-style 17 19 advmod:arg color:blue
1	Dzisiaj	dzisiaj	ADV	adv	_	17	advmod	_	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	5	punct	_	_
3	kiedy	kiedy	ADV	adv	PronType=Rel	5	advmod	_	_
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	_	_
5	odwiedzam	odwiedzać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
6	żadnych	żaden	DET	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|PronType=Neg	7	det	_	_
7	ogrodów	ogród	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	obj	_	_
8	zoologicznych	zoologiczny	ADJ	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	5	punct	_	_
10	zdanie	zdanie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	17	nsubj	_	_
11	M-skiego	M-ski	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
12	o	o	ADP	prep:loc	AdpType=Prep	14	case	_	Case=Loc
13	najpiękniejszym	piękny	ADJ	adj:sg:loc:n:sup	Case=Loc|Degree=Sup|Gender=Neut|Number=Sing	14	amod	_	_
14	zoo	zoo	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	10	nmod	_	_
15	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	16	case	_	Case=Loc
16	Europie	Europa	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	14	nmod	_	_
17	brzmi	brzmieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
18	bardzo	bardzo	ADV	adv:pos	Degree=Pos	19	advmod	_	_
19	śmiesznie	śmiesznie	ADV	adv:pos	Degree=Pos	17	advmod:arg	_	_
20	i	i	CCONJ	conj	_	21	cc	_	_
21	głupio	głupio	ADV	adv:pos	Degree=Pos	19	conj	17:advmod:arg	SpaceAfter=No
22	.	.	PUNCT	interp	PunctType=Peri	17	punct	_	_
~~~

~~~ conllu
1	Today	_	_	_	_	_	_	_	_
2	,	_	_	_	_	_	_	_	_
3	when	_	_	_	_	_	_	_	_
4	I	_	_	_	_	_	_	_	_
5	do	_	_	_	_	_	_	_	_
6	not	_	_	_	_	_	_	_	_
7	visit	_	_	_	_	_	_	_	_
8	any	_	_	_	_	_	_	_	_
9	zoos	_	_	_	_	_	_	_	_
10	,	_	_	_	_	_	_	_	_
11	M's	_	_	_	_	_	_	_	_
12	statement	_	_	_	_	_	_	_	_
13	about	_	_	_	_	_	_	_	_
14	the	_	_	_	_	_	_	_	_
15	most	_	_	_	_	_	_	_	_
16	beautiful	_	_	_	_	_	_	_	_
17	zoo	_	_	_	_	_	_	_	_
18	in	_	_	_	_	_	_	_	_
19	Europe	_	_	_	_	_	_	_	_
20	sounds	_	_	_	_	_	_	_	_
21	very	_	_	_	_	_	_	_	_
22	funny	_	_	_	_	_	_	_	_
23	and	_	_	_	_	_	_	_	_
24	silly	_	_	_	_	_	_	_	_
25	.	_	_	_	_	_	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:31:42 CEST 2020 -->
