---
layout: base
title:  'Statistics of det in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `det`

This relation is universal.

2051 nodes (12%) are attached to their parents as `det`.

2032 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13554363725012.

The following 5 pairs of parts of speech are connected with `det`: <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-DET.html">DET</a></tt> (1960; 96% instances), <tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pprincipe-pos-DET.html">DET</a></tt> (44; 2% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-DET.html">DET</a></tt> (41; 2% instances), <tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pprincipe-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Representava	representar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	_
3	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	jibóia	jibóia	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	_
5	que	que	PRON	_	PronType=Rel	6	nsubj	_	_
6	engolia	engolir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl:relcl	_	_
7	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	fera	fera	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	Sabia	saber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	distinguir	distinguir	VERB	_	VerbForm=Inf	1	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	em	em	ADP	_	_	6	case	_	_
5	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	relance	relance	NOUN	_	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	China	China	PROPN	_	_	2	obj	_	_
10	e	e	CCONJ	_	_	12	cc	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Arizona	Arizona	PROPN	_	_	9	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Seria	ser	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	3	cop	_	_
3	preciso	preciso	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
4	botar	botar	VERB	_	VerbForm=Inf	3	csubj	_	_
5	um	um	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	4	obj	_	_
6	por	por	ADP	_	ExtPos=ADP	10	case	_	_
7	cima	cima	NOUN	_	Gender=Fem|Number=Sing	6	fixed	_	_
8	de	de	ADP	_	_	6	fixed	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	5	nmod	_	SpaceAfter=No
11	...	...	PUNCT	_	_	3	punct	_	_

~~~


