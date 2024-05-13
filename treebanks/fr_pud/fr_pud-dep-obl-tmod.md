---
layout: base
title:  'Statistics of obl:tmod in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-obl.html">obl</a></tt>.

80 nodes (0%) are attached to their parents as `obl:tmod`.

58 instances of `obl:tmod` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.2125.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (51; 64% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (12; 15% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 obl:tmod	color:blue
1	Guitariste	_	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
2	passionné	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Part	1	ccomp	_	SpaceAfter=No
3	,	_	PUNCT	,	_	4	punct	_	_
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	1	appos	_	_
5	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux	_	_
6	participé	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
7	à	_	ADP	IN	_	9	case	_	_
8	un	_	DET	DT	Gender=Masc|Number=Sing	9	det	_	_
9	concert	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	_
10	la	_	DET	DT	Gender=Fem|Number=Sing	12	det	_	_
11	même	_	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	_
12	année	_	NOUN	NN	Gender=Fem|Number=Sing	6	obl:tmod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:tmod	color:blue
1	Son	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	album	_	NOUN	NN	Gender=Masc|Number=Sing	11	nsubj	_	_
3	Wild	_	ADJ	JJ	Number=Sing	4	amod	_	Proper=True
4	West	_	NOUN	NN	Number=Sing	2	appos	_	Proper=True
5	(	_	PUNCT	(	_	6	punct	_	SpaceAfter=No
6	1981	_	NUM	CD	_	2	obl:tmod	_	SpaceAfter=No
7	)	_	PUNCT	)	_	6	punct	_	_
8	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	aux	_	_
9	été	_	AUX	VBN	Gender=Masc|Number=Sing	11	cop	_	_
10	l’	_	DET	DT	Gender=Fem|Number=Sing	11	det	_	OrigForm=l'|SpaceAfter=No
11	une	_	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
12	de	_	ADP	IN	_	15	case	_	_
13	ses	_	PRON	DTP$	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|PronType=Prs	15	nmod:poss	_	_
14	meilleures	_	ADJ	JJR	Gender=Fem|Number=Plur	15	amod	_	_
15	ventes	_	NOUN	NN	Gender=Fem|Number=Plur	11	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:tmod	color:blue
1	Les	_	DET	DT	Gender=Masc|Number=Plur	2	det	_	_
2	officiers	_	NOUN	NN	Gender=Masc|Number=Plur	4	nsubj	_	_
3	ont	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	4	aux	_	_
4	réussi	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	,	_	PUNCT	,	_	6	punct	_	_
6	dimanche	_	NOUN	NNP	Gender=Masc|Number=Sing	4	obl:tmod	_	_
7	matin	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl:tmod	_	SpaceAfter=No
8	,	_	PUNCT	,	_	6	punct	_	_
9	à	_	ADP	IN	_	10	mark	_	_
10	maîtriser	_	VERB	VB	_	4	xcomp	_	_
11	l’	_	DET	DT	Gender=Masc|Number=Sing	12	det	_	OrigForm=l'|SpaceAfter=No
12	homme	_	NOUN	NN	Gender=Masc|Number=Sing	10	obj	_	_
13	de	_	ADP	IN	_	15	case	_	_
14	53	_	NUM	CD	_	15	nummod	_	_
15	ans	_	NOUN	NN	Gender=Masc|Number=Plur	12	nmod	_	_
16	à	à	ADP	INDT	_	21	case	_	_
17	le	le	DET	_	Gender=Masc|Number=Sing	16	fixed	_	_
18	cours	_	NOUN	NN	Gender=Masc|Number=Sing	16	fixed	_	_
19	de	_	ADP	IN	_	16	fixed	_	_
20	l’	_	DET	DT	Gender=Masc|Number=Sing	21	det	_	OrigForm=l'|SpaceAfter=No
21	incident	_	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
22	.	_	PUNCT	.	_	4	punct	_	_

~~~


