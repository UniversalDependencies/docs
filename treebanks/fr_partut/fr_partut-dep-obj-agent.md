---
layout: base
title:  'Statistics of obj:agent in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `obj:agent`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-obj.html">obj</a></tt>.

9 nodes (0%) are attached to their parents as `obj:agent`.

8 instances of `obj:agent` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.22222222222222.

The following 2 pairs of parts of speech are connected with `obj:agent`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (8; 89% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 obj:agent	color:blue
1	Il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	y	y	ADV	B	_	3	advmod	_	_
3	a	avoir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	lieu	lieu	NOUN	S	Gender=Masc|Number=Sing	3	obj	_	_
5	de	de	ADP	E	_	6	mark	_	_
6	consulter	consulter	VERB	V	VerbForm=Inf	4	acl	_	_
7	et	et	CCONJ	CC	_	10	cc	_	_
8	de	de	ADP	E	_	10	mark	_	_
9	faire	faire	AUX	V	VerbForm=Inf	10	aux:caus	_	_
10	collaborer	collaborer	VERB	V	VerbForm=Inf	6	conj	_	_
11	activement	activement	ADV	B	_	10	advmod	_	_
12	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	13	det	_	_
13	parties	partie	NOUN	S	Gender=Fem|Number=Plur	10	obj:agent	_	_
14	intéressées	intéressé	ADJ	A	Gender=Fem|Number=Plur	13	amod	_	_
15	à	à	ADP	E	_	17	case	_	_
16	cette	cette	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	17	det	_	_
17	analyse	analyse	NOUN	S	Gender=Fem|Number=Sing	14	obl	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obj:agent	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	conséquences	conséquence	NOUN	S	Gender=Fem|Number=Plur	7	nsubj:caus	_	_
3	ne	ne	PART	PART	Polarity=Neg	7	advmod	_	_
4	se	se	PRON	P	Person=3|PronType=Prs	7	obj:agent	_	_
5	font	faire	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux:caus	_	_
6	pas	pas	ADV	BN	Polarity=Neg	7	advmod	_	_
7	attendre	attendre	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	7	punct	_	_

~~~


