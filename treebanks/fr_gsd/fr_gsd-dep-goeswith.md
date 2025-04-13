---
layout: base
title:  'Statistics of goeswith in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `goeswith`

This relation is universal.

37 nodes (0%) are attached to their parents as `goeswith`.

37 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02702702702703.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (24; 65% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (6; 16% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (4; 11% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (3; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Pas	pas	ADV	_	Polarity=Neg	3	advmod	_	wordform=pas
2	de	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	sèche	sèche-cheveux	NOUN	_	Gender=Masc|Number=Sing|Typo=Yes	0	root	_	CorrectForm=sèche-cheveux
4	cheveux	_	X	_	_	3	goeswith	_	_
5	ni	ni	CCONJ	_	_	7	cc	_	_
6	de	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	prise	prise	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	_
8	rasoir	rasoir	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
9	dans	dans	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	salle	salle	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bains	bain	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Peut	peut-être	ADV	_	Typo=Yes	6	advmod	_	CorrectForm=peut-être
2	être	_	X	_	_	1	goeswith	_	_
3	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	SpaceAfter=No
4	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	wordform=ce
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	loup	loup	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Cxn=Interrogative-Polar-Direct|CxnElt=6:Interrogative-Polar-Direct.Clause
7	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 goeswith	color:blue
1	En	en	ADP	_	_	2	case	_	wordform=en
2	1866	1866	NUM	_	Number=Plur	11	obl:mod	_	_
3	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	catégorie	catégorie	NOUN	_	Gender=Fem|Number=Sing	11	nsubj:pass	_	_
5	nouvelle	nouveau	ADJ	_	Gender=Fem|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	grand	grand-croix	ADJ	_	Gender=Masc|Number=Sing|Typo=Yes	4	appos	_	CorrectForm=grand-croix
8	croix	_	X	_	_	7	goeswith	_	SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	créée	créer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


