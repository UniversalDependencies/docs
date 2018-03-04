---
layout: base
title:  'Statistics of ccomp in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `ccomp`

This relation is universal.

1380 nodes (0%) are attached to their parents as `ccomp`.

1257 instances of `ccomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.05652173913044.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (956; 69% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (132; 10% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (105; 8% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (92; 7% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (29; 2% instances), <tt><a href="fr-pos-ADV.html">ADV</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (19; 1% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="fr-pos-ADV.html">ADV</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr-pos-NUM.html">NUM</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	«	«	PUNCT	_	_	2	punct	_	_
2	Est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	2	expl	_	_
4	qu'	que	SCONJ	_	_	7	mark	_	SpaceAfter=No
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	y	y	PRON	_	_	7	expl	_	_
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	poème	poème	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
10	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
11	matin	matin	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	_
12	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	troisième	troisième	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
5	fois	fois	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
8	venons	venir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	avec	avec	ADP	_	_	13	case	_	_
11	et	et	CCONJ	_	_	12	cc	_	_
12	sans	sans	ADP	_	_	10	conj	_	_
13	enfants	enfant	NOUN	_	Gender=Masc|Number=Plur	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	confirme	confirmer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	_	_	8	mark	_	_
4	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	clinique	clinique	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	très	très	ADV	_	_	8	advmod	_	_
8	recommandable	recommandable	ADJ	_	Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


