---
layout: base
title:  'Statistics of amod in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `amod`

This relation is universal.

3812 nodes (5%) are attached to their parents as `amod`.

2887 instances of `amod` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25367261280168.

The following 11 pairs of parts of speech are connected with `amod`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (3670; 96% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (95; 2% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (19; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	sauf	sauf	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	_	1	nmod	_	SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nummod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	_	10	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	Indochine	Indochine	PROPN	_	_	0	root	_	_
2	française	français	ADJ	_	Gender=Fem|Number=Sing	1	amod	_	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	2	expl:subj	_	_
2	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aller	aller	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	écouter	écouter	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	et	et	CCONJ	_	_	6	cc	_	_
6	voir	voir	VERB	_	VerbForm=Inf	4	conj	_	_
7	tout	tout	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


