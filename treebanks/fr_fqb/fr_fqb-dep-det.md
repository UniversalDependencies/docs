---
layout: base
title:  'Statistics of det in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `det`

This relation is universal.

3808 nodes (16%) are attached to their parents as `det`.

3808 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1202731092437.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (3193; 84% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (538; 14% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (53; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="fr_fqb-pos-X.html">X</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	Qui	qui	PRON	_	PronType=Int	3	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	remporté	remporter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	Oscar	Oscar	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	pour	pour	ADP	_	_	9	case	_	_
7	"	"	PUNCT	_	_	9	punct	_	SpaceAfter=No
8	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	belle	beau	ADJ	_	Gender=Fem|Number=Sing	3	advcl	_	_
10	et	et	CCONJ	_	_	12	cc	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	bête	bête	NOUN	_	Gender=Fem|Number=Sing	9	conj	_	SpaceAfter=No
13	"	"	PUNCT	_	_	9	punct	_	_
14	?	?	PUNCT	_	_	3	punct	_	_

~~~


