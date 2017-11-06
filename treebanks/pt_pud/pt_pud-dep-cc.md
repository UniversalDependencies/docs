---
layout: base
title:  'Statistics of cc in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="pt_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

542 nodes (2%) are attached to their parents as `cc`.

540 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.40405904059041.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (226; 42% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (182; 34% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (50; 9% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (38; 7% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (12; 2% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-DET.html">DET</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	O	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	esquema	_	NOUN	NN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	faz	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	dinheiro	_	NOUN	NN	Gender=Masc|Number=Sing	3	obj	_	_
5	através	_	ADV	RB	_	7	case	_	_
6	de	_	ADP	IN	_	5	fixed	_	_
7	patrocínios	_	NOUN	NN	Gender=Masc|Number=Plur	3	obl	_	_
8	e	_	CCONJ	CC	_	9	cc	_	_
9	publicidade	_	NOUN	NN	Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc	color:blue
1	Ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	tem	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	um	_	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
4	jogo	_	NOUN	NN	Gender=Masc|Number=Sing	2	obj	_	_
5	duro	_	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
6	mas	_	CCONJ	CC	_	8	cc	_	_
7	também	_	ADV	RB	_	6	fixed	_	_
8	tem	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	_
9	umas	_	DET	DT	Gender=Fem|Number=Plur	10	det	_	_
10	mãos	_	NOUN	NN	Gender=Fem|Number=Plur	8	obj	_	_
11	suaves	_	ADJ	JJ	Gender=Fem|Number=Plur	10	amod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 cc	color:blue
1	Weiss	_	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	foi	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux:pass	_	_
3	honrado	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Sing	0	root	_	_
4	com	_	ADP	IN	_	5	case	_	_
5	prêmios	_	NOUN	NN	Gender=Masc|Number=Plur	3	obl	_	_
6	de	_	ADP	IN	_	7	case	_	_
7	literatura	_	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	cidades	_	NOUN	NN	Gender=Fem|Number=Plur	5	nmod	_	_
10	como	_	ADP	IN	_	11	case	_	_
11	Colônia	_	NOUN	NN	Gender=Fem|Number=Sing	9	nmod	_	Proper=True
12	e	_	CCONJ	CC	_	13	cc	_	_
13	Bremen	_	PROPN	NNP	Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
14	.	_	PUNCT	.	_	3	punct	_	_

~~~


