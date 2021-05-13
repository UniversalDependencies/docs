---
layout: base
title:  'Statistics of det in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `det`

This relation is universal.

3857 nodes (16%) are attached to their parents as `det`.

3857 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1068187710656.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (3467; 90% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (255; 7% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (36; 1% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (30; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (17; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (17; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (17; 0% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (7; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	5000	5000	NUM	CD	_	2	nummod	_	_
2	dollars	dollar	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	par	ADP	IN	_	4	case	_	_
4	personne	personne	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	maximum	maximum	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	autoriser	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	wordform=il
2	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	travaillé	travailler	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	pour	pour	ADP	IN	_	6	case	_	_
5	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	BBC	BBC	PROPN	NNP	Gender=Fem|Number=Sing	3	obl	_	_
7	pendant	pendant	ADP	IN	_	9	case	_	_
8	une	un	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	décennie	décennie	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	Un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=un
2	niveau	niveau	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
3	qui	qui	PRON	WP	PronType=Rel	13	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	8	punct	_	_
5	dans	dans	ADP	IN	_	8	case	_	_
6	les	le	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
7	deux	deux	NUM	CD	_	8	nummod	_	_
8	cas	cas	NOUN	NN	Gender=Masc|Number=Plur	13	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	_
10	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
11	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	plus	plus	ADV	RBR	_	13	advmod	_	_
13	haut	haut	ADJ	JJ	Gender=Masc|Number=Sing	2	acl:relcl	_	_
14	de	de	ADP	IN	_	16	case	_	_
15	l'	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
16	UE	UE	PROPN	NNP	Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


