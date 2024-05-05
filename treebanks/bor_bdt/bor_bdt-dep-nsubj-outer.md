---
layout: base
title:  'Statistics of nsubj:outer in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="bor_bdt-dep-nsubj.html">nsubj</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:outer`.

8 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.625.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 nsubj:outer	color:blue
1	Uw	uw	INTJ	intj	_	4	discourse	_	_
2	!	!	PUNCT	punct	_	1	punct	_	_
3	Boe	boe	NOUN	n	Number=Plur	4	nsubj	_	_
4	motyre	moty	VERB	v	Mood=Ind	0	root	_	_
5	cedododai	_	ADP	posp	Clusivity=Ex|Number=Plur|Person=1	4	obl	_	_
6	.	.	PUNCT	punct	_	4	punct	_	_
7	Nowy	nowy	DET	dem	Deixis=Med	8	det	_	_
8	cemedage	_	NOUN	n	Clusivity=Ex|Number=Plur|Number[psor]=Plur|Person=1	12	nsubj:outer	_	_
9	ma	ma	CCONJ	cconj	_	8	cc	_	_
10	,	,	PUNCT	punct	_	8	punct	_	_
11	boe	boe	NOUN	n	Number=Plur|Person=3	12	nsubj	_	_
12	motyre	moty	VERB	v	Mood=Ind	4	parataxis	_	_
13	toro	toro	ADV	adv	Deixis=Remt	12	advmod	_	_
14	etododai	_	ADP	posp	Number=Plur|Person=3	12	obl	_	_
15	jamedy	jamedy	ADV	adv	_	12	advmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:outer	color:blue
1	Nowy	nowy	DET	dem	Deixis=Med	2	det	_	_
2	imedy	imedy	NOUN	n	Number=Sing	5	nsubj:outer	_	_
3	,	,	PUNCT	punct	_	2	punct	_	_
4	iere	ie	NOUN	n	Mood=Ind|Number=Sing|Person=3	5	nsubj	_	_
5	Meriri	Meriri	PROPN	propn	_	0	root	_	_
6	Baru	Baru	PROPN	propn	_	5	compound	_	_
7	,	,	PUNCT	punct	_	5	punct	_	_
8	Paiwedu	Paiwedu	PROPN	propn	_	5	appos	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 nsubj:outer	color:blue
1	Kujagu	kujagu	NOUN	n	_	13	nsubj:outer	_	_
2	maere	mae	ADV	adv	Mood=Ind	1	advmod	_	_
3	,	,	PUNCT	punct	_	1	punct	_	_
4	kigadu	kigadu	NOUN	n	_	1	conj	_	_
5	maere	mae	ADV	adv	Mood=Ind	4	advmod	_	_
6	,	,	PUNCT	punct	_	4	punct	_	_
7	co	co	NOUN	n	_	1	conj	_	_
8	maere	mae	ADV	adv	Mood=Ind	7	advmod	_	_
9	,	,	PUNCT	punct	_	7	punct	_	_
10	awygere	awy	PRON	pron	PronType=Dem	1	conj	_	_
11	,	,	PUNCT	punct	_	10	punct	_	_
12	enoroe	oroe	NOUN	n	Number=Plur|Person=3	13	nsubj	_	_
13	pemegare	pemega	NOUN	n	Mood=Ind	0	root	_	_
14	;	;	PUNCT	punct	_	13	punct	_	_
15	kodure	kodu	VERB	vi	Mood=Ind|Number=Sing|Person=3	13	parataxis	_	_
16	boiwuge	boiwu	ADV	adv	_	15	advmod	_	_
17	,	,	PUNCT	punct	_	15	punct	_	_
18	emagere	emage	PRON	pron	Mood=Ind|Number=Plur	20	discourse	_	_
19	enoroe	oroe	NOUN	n	Number=Plur	20	nsubj	_	_
20	pemegakare	pemega	NOUN	n	Mood=Ind|Polarity=Neg	13	conj	_	_

~~~


