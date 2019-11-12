---
layout: base
title:  'Statistics of cc in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `cc`

This relation is universal.

545 nodes (2%) are attached to their parents as `cc`.

545 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.79082568807339.

The following 10 pairs of parts of speech are connected with `cc`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (218; 40% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (204; 37% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (50; 9% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (45; 8% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
1	Des	_	DET	DT	Gender=Fem|Number=Plur	2	det	_	_
2	recherches	_	NOUN	NN	Gender=Fem|Number=Plur	9	nsubj	_	_
3	et	_	CCONJ	CC	_	5	cc	_	_
4	des	_	DET	DT	Gender=Fem|Number=Plur	5	det	_	_
5	expéditions	_	NOUN	NN	Gender=Fem|Number=Plur	2	conj	_	_
6	sur	_	ADP	IN	_	8	case	_	_
7	l'	_	DET	DT	Gender=Fem|Number=Sing	8	det	_	SpaceAfter=No
8	île	_	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	_
9	sont	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
10	en	_	ADP	IN	_	11	case	_	_
11	cours	_	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	Et	_	CCONJ	CC	_	7	cc	_	_
2	ensuite	_	ADV	RB	_	7	advmod	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	la	_	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	pub	_	NOUN	NN	Gender=Fem|Number=Sing	7	nsubj	_	_
6	se	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	7	obj	_	_
7	termine	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
8	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Durán	_	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	agit	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	en	_	ADP	IN	_	6	case	_	_
4	tant	_	ADV	RB	_	3	fixed	_	_
5	que	_	SCONJ	IN	_	3	fixed	_	_
6	porte-parole	_	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
7	et	_	CCONJ	CC	_	8	cc	_	_
8	Ángel	_	PROPN	NNP	Gender=Masc|Number=Sing	2	conj	_	orig_deprel=nsubj
9	Pintado	_	PROPN	NNP	Gender=Masc|Number=Sing	8	flat:name	_	_
10	comme	_	ADP	IN	_	11	case	_	orig_deprel=obl
11	trésorier	_	NOUN	NN	Gender=Masc|Number=Sing	8	orphan	_	SpaceAfter=No
12	.	_	PUNCT	.	_	2	punct	_	_

~~~


