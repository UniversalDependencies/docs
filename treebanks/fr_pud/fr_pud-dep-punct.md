---
layout: base
title:  'Statistics of punct in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `punct`

This relation is universal.

2554 nodes (10%) are attached to their parents as `punct`.

1690 instances of `punct` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.4487079091621.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (1345; 53% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (641; 25% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (140; 5% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (134; 5% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (77; 3% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (66; 3% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (61; 2% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (47; 2% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (33; 1% instances), <tt><a href="fr_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="fr_pud-pos-DET.html">DET</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 punct	color:blue
1	C'	ce	PRON	PDEM	_	2	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	parfois	parfois	ADV	RB	_	2	advmod	_	_
4	comme	comme	ADP	IN	_	7	case	_	_
5	un	un	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
6	super	super	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	_
7	pouvoir	pouvoir	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	5000	5000	NUM	CD	_	2	nummod	_	_
2	dollars	dollar	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	par	ADP	IN	_	4	case	_	_
4	personne	personne	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	le	le	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	maximum	maximum	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	autoriser	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 punct	color:blue
1	Leur	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	3	det	_	wordform=leur
2	premier	premier	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	roi	roi	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	fut	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	_
5	Mojmír	Mojmír	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
6	Ier	premier	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	Proper=True|SpaceAfter=No|wordform=ier
7	,	,	PUNCT	,	_	9	punct	_	_
8	qui	qui	PRON	WP	Gender=Masc|Number=Sing	9	nsubj	_	_
9	régna	régner	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
10	de	de	ADP	IN	_	11	case	_	_
11	830	830	NUM	CD	_	9	obl	_	_
12	à	à	ADP	IN	_	13	case	_	_
13	846	846	NUM	CD	_	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


