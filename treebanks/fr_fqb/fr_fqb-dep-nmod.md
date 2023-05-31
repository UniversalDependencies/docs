---
layout: base
title:  'Statistics of nmod in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `nmod`

This relation is universal.

1848 nodes (8%) are attached to their parents as `nmod`.

1836 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.77218614718615.

The following 12 pairs of parts of speech are connected with `nmod`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1073; 58% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (644; 35% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (60; 3% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (31; 2% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (16; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	_	1	nsubj	_	_
4	qu'	que	SCONJ	_	_	6	mark	_	SpaceAfter=No
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	aide	aide	NOUN	_	Number=Sing	1	dislocated	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	logement	logement	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	Qui	qui	PRON	_	PronType=Int	4	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	Premier	premier	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	4	amod	_	_
4	ministre	ministre	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	de	de	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	Irlande	Irlande	PROPN	_	Gender=Fem|Number=Sing	4	nmod	_	_
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod	color:blue
1	Qui	qui	PRON	_	PronType=Int	3	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	fondé	fonder	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Nation	Nation	PROPN	_	_	3	obj	_	_
6	de	de	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	Islam	Islam	PROPN	_	_	5	nmod	_	_
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


