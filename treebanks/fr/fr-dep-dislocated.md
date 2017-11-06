---
layout: base
title:  'Statistics of dislocated in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `dislocated`

This relation is universal.

28 nodes (0%) are attached to their parents as `dislocated`.

26 instances of `dislocated` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.71428571428571.

The following 10 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (7; 25% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (5; 18% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (5; 18% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 dislocated	color:blue
1	Tout	tout	DET	_	Gender=Masc|Number=Sing	2	det	_	_
2	ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	13	dislocated	_	_
3	que	que	PRON	_	PronType=Rel	7	obj	_	_
4	l'	l'	PART	_	_	5	expl	_	SpaceAfter=No
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	peux	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
7	chercher	chercher	VERB	_	VerbForm=Inf	6	xcomp	_	_
8	en	en	ADP	_	_	9	case	_	_
9	pitou	pitou	PROPN	_	_	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	7	punct	_	_
11	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	13	nsubj	_	_
12	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
13	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	:)	:)	SYM	_	_	13	dep	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	marocains	marocain	NOUN	_	Gender=Masc|Number=Plur	7	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	plus	plus	SCONJ	_	_	7	cc	_	_
5	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
6	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	réprimés	réprimer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	plus	plus	SCONJ	_	_	11	cc	_	_
10	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	_
11	baisent	baiser	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	main	main	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	_
14	de	de	ADP	_	_	16	case	_	_
15	leur	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	16	det	_	_
16	roi	roi	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dislocated	color:blue
1	«	«	PUNCT	_	_	4	punct	_	_
2	Être	être	VERB	_	VerbForm=Inf	4	dislocated	_	_
3	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	4	nsubj	_	SpaceAfter=No
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	valeur	valeur	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	_
8	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	variable	variable	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	liée	lier	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	10	amod	_	_
12	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


