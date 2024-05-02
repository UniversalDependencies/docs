---
layout: base
title:  'Statistics of compound in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et_edt-dep-compound-prt.html">compound:prt</a></tt>.

427 nodes (0%) are attached to their parents as `compound`.

373 instances of `compound` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11475409836066.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (347; 81% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (45; 11% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (14; 3% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (7; 2% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	Teie	sina	PRON	P	Case=Gen|Number=Plur|Person=2|PronType=Prs	3	nmod	3:nmod	_
2	uus	uus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	film	film	NOUN	S	Case=Nom|Number=Sing	10	nsubj:cop	10:nsubj	NE=B-Prod
4	"	"	PUNCT	Z	_	7	punct	5:punct	NE=I-Prod|SpaceAfter=No
5	8	8	NUM	N	NumForm=Digit|NumType=Card	7	nummod	3:appos	NE=I-Prod
6	½	½	NUM	N	NumForm=Digit|NumType=Frac	5	compound	5:compound	NE=I-Prod
7	naist	naine	NOUN	S	Case=Par|Number=Sing	3	appos	3:appos	NE=I-Prod|SpaceAfter=No
8	"	"	PUNCT	Z	_	7	punct	5:punct	NE=I-Prod
9	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	austusavaldus	austus_avaldus	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
11	Fellinile	Fellini	PROPN	S	Case=All|Number=Sing	10	nmod	10:nmod	NE=B-Per|SpaceAfter=No
12	.	.	PUNCT	Z	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	DVD	DVD	NOUN	Y	Abbr=Yes	2	nmod	2:nmod	_
2	loojate	looja	NOUN	S	Case=Gen|Number=Plur	3	nmod	3:nmod	_
3	murest	mure	NOUN	S	Case=Ela|Number=Sing	6	obl	6:obl	_
4	võib	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
5	aru	aru	NOUN	S	Case=Par|Number=Sing	6	compound	6:compound	_
6	saada	saama	VERB	V	VerbForm=Inf	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Uurijad	uurija	NOUN	S	Case=Nom|Number=Plur	2	nsubj	2:nsubj	_
2	sõitsid	sõitma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	minema	minema	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	2	compound	2:compound	SpaceAfter=No
4	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


