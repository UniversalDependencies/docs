---
layout: base
title:  'Statistics of appos in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `appos`

This relation is universal.

97 nodes (0%) are attached to their parents as `appos`.

97 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.15463917525773.

The following 13 pairs of parts of speech are connected with `appos`: <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (37; 38% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (21; 22% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (13; 13% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (10; 10% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (4; 4% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_pud-pos-X.html">X</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="it_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 appos	color:blue
1	E	e	CCONJ	CC	_	6	cc	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	ovviamente	ovvio	ADV	RB	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	c'	ci	PRON	EX	_	6	expl	_	SpaceAfter=No
6	è	essere	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
7	Bob	Bob	PROPN	NNP	Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	una	uno	DET	DT	Gender=Fem|Number=Sing	10	det	_	_
10	fonte	fonte	NOUN	NN	Gender=Fem|Number=Sing	7	appos	_	_
11	costante	costante	ADJ	JJ	Gender=Fem|Number=Sing	10	amod	_	_
12	di	di	ADP	IN	_	13	case	_	_
13	divertimento	divertimento	NOUN	NN	Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	Winstone	Winstone	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	conobbe	conoscere	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
3	sua	suo	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	4	det:poss	_	_
4	moglie	moglie	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	Elaine	Elaine	PROPN	NNP	Gender=Fem|Number=Sing	4	appos	_	SpaceAfter=No
7	,	,	PUNCT	,	_	4	punct	_	_
8	durante	durante	ADP	IN	_	10	case	_	_
9	le	il	DET	DT	Gender=Fem|Number=Plur	10	det	_	_
10	riprese	ripresa	NOUN	NN	Gender=Fem|Number=Plur	2	obl	_	_
11	di	di	ADP	IN	_	12	case	_	_
12	That	That	PROPN	NNP	Gender=Masc|Number=Sing	10	nmod	_	_
13	Summer	Summer	PROPN	NNP	Gender=Masc|Number=Sing	12	flat	_	_
14	in	in	ADP	IN	_	16	case	_	_
15	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	1979	1979	NUM	CD	_	10	nmod	_	SpaceAfter=No
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 appos	color:blue
1	Il	il	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
2	suo	suo	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	4	det:poss	_	_
3	ultimo	ultimo	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
4	saggio	saggio	NOUN	NN	Gender=Masc|Number=Sing	7	nsubj	_	_
5	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	7	cop	_	_
6	su	su	ADP	IN	_	7	case	_	_
7	Margaret	Margaret	PROPN	NNP	Gender=Fem|Number=Sing	0	root	_	_
8	Doublas	Doublas	PROPN	NNP	Gender=Fem|Number=Sing	7	flat	_	SpaceAfter=No
9	,	,	PUNCT	,	_	7	punct	_	_
10	Contessa	Contessa	PROPN	NN	Gender=Fem|Number=Sing	7	appos	_	_
11	di	di	ADP	IN	_	12	case	_	_
12	Lennox	Lennox	PROPN	NNP	Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	7	punct	_	_

~~~


