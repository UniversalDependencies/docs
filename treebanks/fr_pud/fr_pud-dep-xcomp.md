---
layout: base
title:  'Statistics of xcomp in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `xcomp`

This relation is universal.

397 nodes (2%) are attached to their parents as `xcomp`.

396 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.40554156171285.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (264; 66% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (45; 11% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (35; 9% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (28; 7% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (17; 4% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	Tout	tout	ADJ	PDT	Gender=Masc|Number=Sing	3	amod	_	wordform=tout
2	le	le	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	monde	monde	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	ne	ne	ADV	RB	Polarity=Neg	5	advmod	_	_
5	peut	pouvoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	pas	pas	ADV	RB	Polarity=Neg	5	advmod	_	_
7	s'	se	PRON	PRP	Gender=Masc|Number=Sing|Person=3	8	obj	_	SpaceAfter=No
8	élever	élever	VERB	VB	VerbForm=Inf	5	xcomp	_	_
9	à	à	ADP	IN	_	13	case	_	_
10	le	le	DET	_	_	9	fixed	_	_
11	dessus	dessus	X	GW	_	9	fixed	_	_
12	de	de	ADP	IN	_	9	fixed	_	_
13	ça	ça	PRON	PDEM	_	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	C’	ce	PRON	PDEM	_	4	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	son	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	det	_	_
4	rêve	rêve	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
5	de	de	ADP	IN	_	6	case	_	_
6	terminer	terminer	VERB	VB	VerbForm=Inf	4	xcomp	_	_
7	sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	_	_
8	carrière	carrière	NOUN	NN	Gender=Fem|Number=Sing	6	obj	_	_
9	ici	ici	ADV	RB	_	6	advmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Catherine	Catherine	PROPN	NNP	Gender=Fem|Number=Sing	5	nsubj	_	_
2	II	II	NUM	CD	_	1	nummod	_	Proper=True|wordform=ii
3	s’	se	PRON	PRP	Gender=Fem|Number=Sing|Person=3	5	obj	_	SpaceAfter=No|wordform=s'
4	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
5	montrée	montrer	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	très	très	ADV	RB	_	7	advmod	_	_
7	satisfaite	satisfait	ADJ	JJ	Gender=Fem|Number=Sing	5	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	.	_	5	punct	_	_

~~~


