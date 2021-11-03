---
layout: base
title:  'Statistics of punct in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `punct`

This relation is universal.

2565 nodes (11%) are attached to their parents as `punct`.

1607 instances of `punct` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.88421052631579.

The following 13 pairs of parts of speech are connected with `punct`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (1206; 47% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (660; 26% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (181; 7% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (143; 6% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (134; 5% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (74; 3% instances), <tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (65; 3% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (49; 2% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (38; 1% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="pt_pud-pos-DET.html">DET</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="pt_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 punct	color:blue
1	O	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	esquema	esquema	NOUN	NN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	faz	fazer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	dinheiro	dinheiro	NOUN	NN	Gender=Masc|Number=Sing	3	obj	_	_
5	através	através	ADV	RB	_	7	case	_	_
6	de	de	ADP	IN	_	5	fixed	_	_
7	patrocínios	patrocínio	NOUN	NN	Gender=Masc|Number=Plur	3	obl	_	_
8	e	e	CCONJ	CC	_	9	cc	_	_
9	publicidade	publicidade	NOUN	NN	Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	$	_	SYM	SYM	_	0	root	_	SpaceAfter=No
2	5,000	_	NUM	CD	_	1	nummod	_	OrigForm=$5000
3	por	por	ADP	IN	_	4	case	_	_
4	pessoa	pessoa	NOUN	NN	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	máximo	máximo	NOUN	NN	Gender=Masc|Number=Sing	1	appos	_	_
8	permitido	permitido	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 punct	color:blue
1	O	o	DET	PDT	Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
2	seu	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	4	det	_	_
3	primeiro	primeiro	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
4	rei	rei	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
5	foi	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
6	Mojmir	Mojmir	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
7	I	_	ADJ	JJ	Gender=Masc|Number=Sing	6	compound	_	Proper=True
8	(	(	PUNCT	(	_	10	punct	_	SpaceAfter=No
9	que	_	PRON	WP	_	10	nsubj	_	_
10	governou	governar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	_
11	de	de	ADP	IN	_	12	case	_	_
12	830	_	NUM	CD	Gender=Masc	10	obl	_	_
13	a	_	ADP	IN	_	14	case	_	_
14	846	_	NUM	CD	Gender=Masc	12	nmod	_	SpaceAfter=No
15	)	)	PUNCT	)	_	10	punct	_	SpaceAfter=No
16	.	.	PUNCT	.	_	6	punct	_	_

~~~


