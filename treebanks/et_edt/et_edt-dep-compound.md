---
layout: base
title:  'Statistics of compound in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et_edt-dep-compound-prt.html">compound:prt</a></tt>.

479 nodes (0%) are attached to their parents as `compound`.

458 instances of `compound` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04384133611691.

The following 7 pairs of parts of speech are connected with `compound`: <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (444; 93% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (14; 3% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (10; 2% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	Kokku	kokku	ADV	D	_	2	advmod	_	_
2	anti	andma	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	neid	see	PRON	P	Case=Par|Number=Plur|PronType=Dem	2	obj	_	_
4	Eestis	Eesti	PROPN	S	Case=Ine|Number=Sing	2	obl	_	_
5	umbes	umbes	ADV	D	_	6	advmod	_	_
6	paar	paar	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	7	compound	_	_
7	tuhat	tuhat	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	2	nummod	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Uurijad	uurija	NOUN	S	Case=Nom|Number=Plur	2	nsubj	_	_
2	sõitsid	sõitma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	minema	minema	VERB	V	Case=All|VerbForm=Sup|Voice=Act	2	compound	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound	color:blue
1	Vesinik	vesinik	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	moodustab	moodustama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Päikese	Päike	PROPN	S	Case=Gen|Number=Sing	9	nmod	_	_
4	ja	ja	CCONJ	J	_	7	cc	_	_
5	paljude	palju	PRON	P	Case=Gen|Number=Plur|PronType=Ind	6	nmod	_	_
6	teiste	teine	DET	P	Case=Gen|Number=Plur|PronType=Dem	7	det	_	_
7	tähtede	täht	NOUN	S	Case=Gen|Number=Plur	3	conj	_	_
8	tavapärasest	tava_pärane	ADJ	A	Case=Ela|Degree=Pos|Number=Sing	9	amod	_	_
9	koostisest	koostis	NOUN	S	Case=Ela|Number=Sing	2	obl	_	_
10	73	73	NUM	N	NumForm=Digit|NumType=Card	11	compound	_	_
11	%	%	SYM	N	NumForm=Digit|NumType=Card	2	obj	_	_
12	ja	ja	CCONJ	J	_	13	cc	_	_
13	heelium	heelium	NOUN	S	Case=Nom|Number=Sing	2	conj	_	_
14	25	25	NUM	N	NumForm=Digit|NumType=Card	15	compound	_	_
15	%	%	SYM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	Z	_	2	punct	_	_

~~~


