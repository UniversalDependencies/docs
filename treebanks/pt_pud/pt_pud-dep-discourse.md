---
layout: base
title:  'Statistics of discourse in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `discourse`

This relation is universal.

96 nodes (0%) are attached to their parents as `discourse`.

90 instances of `discourse` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.57291666666667.

The following 13 pairs of parts of speech are connected with `discourse`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (34; 35% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (28; 29% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (12; 13% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 6% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (3; 3% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	E	_	CCONJ	CC	_	5	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	3	punct	_	_
3	claro	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	tem	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	o	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	Bob	_	PROPN	NNP	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	,	_	PUNCT	,	_	11	punct	_	_
9	uma	_	DET	DT	Gender=Fem|Number=Sing	11	det	_	_
10	constante	_	ADJ	JJ	Gender=Fem|Number=Sing	11	amod	_	_
11	fonte	_	NOUN	NN	Gender=Fem|Number=Sing	7	appos	_	_
12	de	_	ADP	IN	_	13	case	_	_
13	entretenimento	_	NOUN	NN	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 discourse	color:blue
1	É	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	como	_	ADP	IN	_	4	case	_	_
3	um	_	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
4	superpoder	_	NOUN	NN	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
5	,	_	PUNCT	,	_	6	punct	_	_
6	a	a	ADP	INDT	_	1	discourse	_	_
7	as	o	DET	_	Gender=Fem|Number=Plur	6	fixed	_	_
8	vezes	_	NOUN	NN	Gender=Fem|Number=Plur	6	fixed	_	SpaceAfter=No
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Ainda	_	ADV	RB	_	4	discourse	_	_
2	assim	_	ADV	RB	_	1	fixed	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	há	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	perguntas	_	NOUN	NN	Gender=Fem|Number=Plur	4	obj	_	_
6	deixadas	_	VERB	VBN	Aspect=Perf|Gender=Fem|Number=Plur	5	acl	_	_
7	sem	_	ADP	IN	_	8	case	_	_
8	resposta	_	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	4	punct	_	_

~~~


