---
layout: base
title:  'Statistics of ccomp in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `ccomp`

This relation is universal.

1625 nodes (0%) are attached to their parents as `ccomp`.

1505 instances of `ccomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.97107692307692.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1024; 63% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (218; 13% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (105; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (104; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (82; 5% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (45; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	«	«	PUNCT	_	_	2	punct	_	_
2	Est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	2	nsubj	_	_
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	URSS	URSS	PROPN	_	_	4	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	disparue	disparu	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
5	avant	avant	ADV	_	_	4	advmod	_	_
6	que	que	SCONJ	_	_	10	mark	_	_
7	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	phase	phase	NOUN	_	Gender=Fem|Number=Sing	10	nsubj	_	_
9	n'	ne	ADV	_	Polarity=Neg	10	advmod	_	SpaceAfter=No
10	arrive	arriver	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
11	à	à	ADP	_	_	13	case	_	_
12	son	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	13	det	_	_
13	terme	terme	NOUN	_	Gender=Masc|Number=Sing	10	obl:arg	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 ccomp	color:blue
1	Cela	cela	PRON	_	Number=Sing|PronType=Dem	2	nsubj	_	_
2	signifie	signifier	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	qu'	que	SCONJ	_	_	11	mark	_	SpaceAfter=No
4	au-delà	au-delà	ADV	_	_	11	advmod	_	_
5	de	de	ADP	_	_	6	case	_	_
6	105	105	NUM	_	_	4	obl:arg	_	_
7	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	11	nsubj	_	_
8	n'	ne	ADV	_	Polarity=Neg	11	advmod	_	SpaceAfter=No
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	plus	plus	ADV	_	Polarity=Neg	11	advmod	_	_
11	acheteur	acheteur	NOUN	_	Gender=Masc|Number=Sing	2	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


