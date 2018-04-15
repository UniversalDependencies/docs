---
layout: base
title:  'Statistics of nummod in UD_Polish-SZ'
udver: '2'
---

## Treebank Statistics: UD_Polish-SZ: Relations: `nummod`

This relation is universal.

339 nodes (0%) are attached to their parents as `nummod`.

312 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33923303834808.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_sz-pos-NUM.html">NUM</a></tt> (331; 98% instances), <tt><a href="pl_sz-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_sz-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="pl_sz-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_sz-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_sz-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	2	case	_	_
2	Polsce	Polska	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	4	case	_	_
4	okresie	okres	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	_
5	gotyku	gotyk	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
6	wykształciły	wykształcić	VERB	praet:pl:f:perf	Aspect=Perf|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	_	_
8	dwie	dwa	NUM	num:pl:nom:f:congr	Case=Nom|Gender=Fem|Number=Plur	9	nummod	_	_
9	szkoły	szkoła	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
10	witrażowe	witrażowy	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	interp	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Urząd	urząd	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	nie	nie	PART	qub	_	4	advmod	_	_
3	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	aux	_	_
4	porównywał	porównywać	VERB	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	obu	oba	NUM	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nummod	_	_
6	PIT-ów	PIT	PROPN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Nie	nie	PART	qub	_	2	advmod	_	_
2	znam	znać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ani	ani	PART	qub	_	5	nmod	_	_
4	dwóch	dwa	NUM	num:pl:gen:m1:congr	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	5	nummod	_	_
5	sprawiedliwych	sprawiedliwy	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	2	obj	_	SpaceAfter=No
6	!	!	PUNCT	interp	_	2	punct	_	_

~~~


