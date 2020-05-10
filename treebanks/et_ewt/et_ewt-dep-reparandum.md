---
layout: base
title:  'Statistics of reparandum in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `reparandum`

This relation is universal.

6 nodes (0%) are attached to their parents as `reparandum`.

5 instances of `reparandum` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83333333333333.

The following 5 pairs of parts of speech are connected with `reparandum`: <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (2; 33% instances), <tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (1; 17% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 reparandum	color:blue
1	Üllatavalt	üllatavalt	ADV	D	_	2	advmod	2:advmod	_
2	kerge	kerge	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	4:amod	_
3	kerge	kerge	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	reparandum	2:reparandum	_
4	teema	teema	NOUN	S	Case=Nom|Number=Sing	5	nsubj	5:nsubj	_
5	oli	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 reparandum	color:blue
1	Enne	enne	ADP	K	AdpType=Prep	3	case	3:case	_
2	paastu	paast	NOUN	S	Case=Ill|Number=Sing	3	nmod	3:nmod	_
3	minekut	minek	NOUN	S	Case=Par|Number=Sing	5	obl	5:obl	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	ùlitàhtis	üli_tähtis	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
6	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	7:nmod	_
7	kehale	keha	NOUN	S	Case=All|Number=Sing	8	obl	8:obl	_
8	òelda	ütlema	VERB	V	VerbForm=Inf	5	csubj:cop	5:csubj	SpaceAfter=No
9	,	,	PUNCT	Z	_	12	punct	12:punct	_
10	et	et	SCONJ	J	_	12	mark	12:mark	_
11	homsest	homne	ADJ	A	Case=Ela|Degree=Pos|Number=Sing	12	obl	12:obl	_
12	làheme	minema	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	8:ccomp	_
13	paastule	paast	NOUN	S	Case=All|Number=Sing	12	obl	12:obl	SpaceAfter=No
14	,	,	PUNCT	Z	_	17	punct	17:punct	_
15	et	et	SCONJ	J	_	17	mark	17:mark	_
16	keha	keha	NOUN	S	Case=Par|Number=Sing	17	obj	17:obj	_
17	puhastada	puhastama	VERB	V	VerbForm=Inf	12	advcl	12:advcl	SpaceAfter=No
18	,	,	PUNCT	Z	_	20	punct	20:punct	_
19	jààkainetest	jääk_aine	NOUN	S	Case=Ela|Number=Plur	20	obl	20:obl	_
20	puhastada	puhastama	VERB	V	VerbForm=Inf	17	conj	17:conj	_
21	vòi	või	CCONJ	J	_	25	cc	25:cc	_
22	vòi	või	CCONJ	J	_	21	reparandum	21:reparandum	_
23	misiganes	mis_iganes	ADV	D	_	24	advmod	24:advmod	_
24	eesmàrgil	ees_märk	NOUN	S	Case=Ade|Number=Sing	25	obl	25:obl	_
25	paastume	paastuma	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	17:conj	SpaceAfter=No
26	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 reparandum	color:blue
1	Aga	aga	CCONJ	J	_	8	cc	8:cc	_
2	teoorias	teooria	NOUN	S	Case=Ine|Number=Sing	8	obl	8:obl	_
3	olen	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
4	muidugi	muidugi	ADV	D	_	8	advmod	8:advmod	_
5	oi	oi	INTJ	B	_	8	discourse	8:discourse	_
6	oi	oi	INTJ	B	_	5	reparandum	5:reparandum	_
7	kui	kui	ADV	D	_	8	mark	8:mark	_
8	tugev	tugev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_

~~~


