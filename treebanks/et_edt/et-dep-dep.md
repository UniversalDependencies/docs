---
layout: base
title:  'Statistics of dep in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `dep`

This relation is universal.

3 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66666666666667.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-X.html">X</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dep	color:blue
1	b	b	NOUN	Y	Abbr=Yes	5	dep	_	SpaceAfter=No
2	)	)	PUNCT	Z	_	5	punct	_	_
3	Kaarsillal	Kaar_sild	PROPN	S	Case=Ade|Number=Sing	5	obl	_	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	ohtlik	ohtlik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
6	ronida	ronima	VERB	V	VerbForm=Inf	5	csubj:cop	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 dep	color:blue
1	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No
2	Raha	raha	NOUN	S	Case=Gen|Number=Sing	6	obl	_	_
3	taga	taga	ADP	K	AdpType=Post	2	case	_	_
4	asi	asi	NOUN	S	Case=Nom|Number=Sing	6	nsubj	_	_
5	ei	ei	AUX	V	Mood=Ind|Polarity=Neg|VerbForm=Fin	6	aux	_	_
6	seisa	seisma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	dep	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	6	punct	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	6	punct	_	_
9	omandab	omandama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Paltsi	Palts	PROPN	S	Case=Gen|Number=Sing	11	nmod	_	_
11	jutt	jutt	NOUN	S	Case=Nom|Number=Sing	9	nsubj	_	_
12	laia	lai	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	13	amod	_	_
13	joone	joon	NOUN	S	Case=Gen|Number=Sing	9	obj	_	SpaceAfter=No
14	.	.	PUNCT	Z	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dep	color:blue
1	a	a	X	Y	Abbr=Yes	5	dep	_	SpaceAfter=No
2	)	)	PUNCT	Z	_	5	punct	_	_
3	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
4	ei	ei	AUX	V	Mood=Ind|Polarity=Neg|VerbForm=Fin	5	aux	_	_
5	meeldi	meeldima	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	teha	tegema	VERB	V	VerbForm=Inf	5	csubj	_	_
7	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	11	punct	_	_
9	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	11	obj	_	_
10	kõik	kõik	PRON	P	Case=Nom|Number=Plur|PronType=Tot	11	nsubj	_	_
11	teevad	tegema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	_	SpaceAfter=No
12	;	;	PUNCT	Z	_	5	punct	_	_

~~~


