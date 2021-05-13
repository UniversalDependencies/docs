---
layout: base
title:  'Statistics of discourse in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `discourse`

This relation is universal.

46 nodes (0%) are attached to their parents as `discourse`.

38 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.30434782608696.

The following 12 pairs of parts of speech are connected with `discourse`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (25; 54% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (9; 20% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (3; 7% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 discourse	color:blue
1	Tournons	tourner	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	wordform=tournons
2	dans	dans	ADP	_	_	4	case	_	_
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Morsure	Morsure	PROPN	_	Gender=Fem|Number=Sing	1	obl:mod	_	_
5	:	:	PUNCT	_	_	6	punct	_	_
6	Ah	ah	INTJ	_	_	1	discourse	_	wordform=ah
7	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Ô	ô	INTJ	_	_	3	discourse	_	wordform=ô
2	ma	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|PronType=Prs	3	det	_	_
3	vigne	vigne	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	bien	bien	ADV	_	_	5	advmod	_	_
5	aimée	aimer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Oui	oui	INTJ	_	_	5	discourse	_	SpaceAfter=No|wordform=oui
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	excellent	excellent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	magnifique	magnifique	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	magistral	magistral	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	_
10	!	!	PUNCT	_	_	5	punct	_	_

~~~


