---
layout: base
title:  'Statistics of csubj in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="it_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

34 nodes (0%) are attached to their parents as `csubj`.

31 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.23529411764706.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (17; 50% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (8; 24% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (6; 18% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	È	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	cop	_	_
2	difficile	difficile	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
3	credere	credere	VERB	VB	Voice=Act	2	csubj	_	_
4	che	che	SCONJ	IN	_	7	mark	_	_
5	l'	il	DET	DT	Gender=Fem|Number=Sing	6	det	_	SpaceAfter=No
6	Italia	Italia	PROPN	NNP	Gender=Fem|Number=Sing	7	nsubj	_	_
7	abbia	avere	VERB	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	ccomp	_	_
8	meno	meno	ADV	RBR	_	9	advmod	_	_
9	chilometri	chilometro	NOUN	NN	Gender=Masc|Number=Plur	7	obj	_	_
10	di	di	ADP	IN	_	11	case	_	_
11	metropolitana	metropolitano	NOUN	NN	Gender=Fem|Number=Sing	9	nmod	_	_
12	di	di	ADP	IN	_	13	case	_	_
13	Madrid	Madrid	PROPN	NNP	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 csubj	color:blue
1	Norman	Norman	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj	_	_
2	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	cop	_	_
3	uno	uno	NUM	CD	Gender=Masc	0	root	_	_
4	di	di	ADP	IN	_	8	case	_	_
5	i	il	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
6	miei	mio	PRON	DTP$	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|PronType=Prs	8	det:poss	_	_
7	cari	caro	ADJ	JJ	Gender=Masc|Number=Plur	8	amod	_	_
8	amici	amico	NOUN	NN	Gender=Masc|Number=Plur	3	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	3	punct	_	_
10	quindi	quindi	ADV	RB	_	13	advmod	_	_
11	mi	mi	PRON	PRP	Case=Acc|Number=Sing|Person=1	13	obj	_	_
12	ha	avere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	aux	_	_
13	seccato	seccare	VERB	VBN	Tense=Past	3	parataxis	_	_
14	parecchio	parecchio	ADV	RB	_	13	advmod	_	_
15	veder	vedere	VERB	VB	Voice=Act	13	csubj	_	_
16	lo	lo	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	obj	_	_
17	in	in	ADP	IN	_	19	case	_	_
18	quello	quello	DET	DT	Gender=Masc|Number=Sing	19	det	_	_
19	stato	stato	NOUN	NN	Gender=Masc|Number=Sing	15	obl	_	_
20	emotivo	emotivo	ADJ	JJ	Gender=Masc|Number=Sing	19	amod	_	SpaceAfter=No
21	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	È	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	cop	_	_
2	suo	suo	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	3	det:poss	_	_
3	desiderio	desiderio	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
4	terminare	terminare	VERB	VB	Voice=Act	3	csubj	_	_
5	qui	qui	ADV	RB	_	4	advmod	_	_
6	la	il	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
7	sua	suo	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	8	det:poss	_	_
8	carriera	carriera	NOUN	NN	Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


