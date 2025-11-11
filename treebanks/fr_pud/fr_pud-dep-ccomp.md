---
layout: base
title:  'Statistics of ccomp in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `ccomp`

This relation is universal.

188 nodes (1%) are attached to their parents as `ccomp`.

182 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.50531914893617.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (142; 76% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (12; 6% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_pud-pos-DET.html">DET</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Disons	dire	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	wordform=disons
2	seulement	seulement	ADV	RB	_	1	advmod	_	_
3	qu’	que	ADP	IN	_	5	mark	_	SpaceAfter=No|wordform=qu'
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	tort	tort	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Je	il	PRON	PRP	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	wordform=je
2	crois	croire	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	qu’	que	ADP	IN	_	6	mark	_	SpaceAfter=No|wordform=qu'
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	_
5	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	juste	juste	ADJ	JJ	Gender=Masc|Number=Sing	2	ccomp	_	_
7	de	de	ADP	IN	_	8	mark	_	_
8	dire	dire	VERB	VB	VerbForm=Inf	6	csubj	_	_
9	que	que	SCONJ	IN	_	13	mark	_	_
10	Rocco	Rocco	PROPN	NNP	Gender=Masc|Number=Sing	13	nsubj	_	_
11	Catalano	Catalano	PROPN	NNP	Gender=Masc|Number=Sing	10	flat:name	_	_
12	ne	ne	ADV	RB	Polarity=Neg	13	advmod	_	_
13	vit	vivre	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	ccomp	_	_
14	que	que	ADV	RB	_	13	advmod	_	_
15	pour	pour	ADP	IN	_	17	case	_	_
16	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	style	style	NOUN	NN	Gender=Masc|Number=Sing	13	obl	_	_
18	rétro	rétro	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp	color:blue
1	Ronald	Ronald	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Reagan	Reagan	PROPN	NNP	Gender=Masc|Number=Sing	1	flat:name	_	_
3	croyait	croire	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	IN	_	7	mark	_	_
5	Dieu	Dieu	PROPN	NNP	Gender=Masc|Number=Sing	7	nsubj	_	_
6	avait	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	aux:tense	_	_
7	épargné	épargner	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	ccomp	_	_
8	sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Poss=Yes|PronType=Prs	9	det	_	_
9	vie	vie	NOUN	NN	Gender=Fem|Number=Sing	7	obj	_	_
10	afin	afin	ADV	IN	_	7	advmod	_	_
11	qu'	que	SCONJ	IN	_	13	mark	_	SpaceAfter=No
12	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
13	puisse	pouvoir	VERB	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
14	accomplir	accomplir	VERB	VB	VerbForm=Inf	13	xcomp	_	_
15	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	objectif	objectif	NOUN	NN	Gender=Masc|Number=Sing	14	obj	_	_
17	plus	plus	ADV	RBR	_	18	advmod	_	_
18	grand	grand	ADJ	JJ	Gender=Masc|Number=Sing	16	amod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


