---
layout: base
title:  'Statistics of aux in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `aux`

This relation is universal.

2891 nodes (3%) are attached to their parents as `aux`.

2728 instances of `aux` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19578000691802.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (2624; 91% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (118; 4% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (83; 3% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (41; 1% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (12; 0% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Muidugi	muidugi	ADV	D	_	4	advmod	_	_
2	poleks	olema	AUX	V	Mood=Cnd|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	keegi	keegi	PRON	P	Case=Nom|Number=Sing|PronType=Ind	4	nsubj	_	_
4	osanud	oskama	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	teda	tema	PRON	P	Case=Par|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
6	sealt	sealt	ADV	D	_	7	advmod	_	_
7	otsida	otsima	VERB	V	VerbForm=Inf	4	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Kuidas	kuidas	ADV	D	_	6	mark	_	_
2	saab	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
3	olla	olema	AUX	V	VerbForm=Inf	6	cop	_	_
4	sisendus	sisendus	NOUN	S	Case=Nom|Number=Sing	6	nsubj:cop	_	_
5	nii	nii	ADV	D	_	6	advmod	_	_
6	reaalne	reaalne	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
7	ja	ja	CCONJ	J	_	8	cc	_	_
8	ulatuslik	ulatuslik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	conj	_	_
9	-	-	PUNCT	Z	_	11	punct	_	_
10	terve	terve	PRON	A	Case=Nom|Number=Sing|PronType=Tot	11	det	_	_
11	elu	elu	NOUN	S	Case=Nom|Number=Sing	8	parataxis	_	SpaceAfter=No
12	?	?	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Meil	mina	PRON	P	Case=Ade|Number=Plur|Person=1|PronType=Prs	0	root	_	_
2	ei	ei	AUX	V	Mood=Ind|Polarity=Neg|VerbForm=Fin	5	aux	_	_
3	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
4	praegu	praegu	ADV	D	_	1	advmod	_	_
5	aega	aeg	NOUN	S	Case=Par|Number=Sing	1	nsubj:cop	_	_
6	puhata	puhkama	VERB	V	VerbForm=Inf	5	acl	_	SpaceAfter=No
7	!	!	PUNCT	Z	_	1	punct	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	1	punct	_	_

~~~


