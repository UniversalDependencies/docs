---
layout: base
title:  'Statistics of orphan in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `orphan`

This relation is universal.

5 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 5 pairs of parts of speech are connected with `orphan`: <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 orphan	color:blue
1	La	il	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	scrittura	scrittura	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj	_	_
3	era	essere	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	4	aux	_	_
4	andata	andare	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past	0	root	_	_
5	perduta	perduto	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|Voice=Pass	4	acl	_	_
6	e	e	CCONJ	CC	_	8	cc	_	_
7	i	il	DET	DT	Gender=Masc|Number=Plur	8	det	_	_
8	manoscritti	manoscritto	NOUN	NN	Gender=Masc|Number=Plur	4	conj	_	orig_deprel=nsubj
9	micenei	miceneo	ADJ	JJ	Gender=Masc|Number=Plur	8	amod	_	Proper=True
10	dimenticati	dimenticare	VERB	VBN	Gender=Masc|Number=Plur|Tense=Past|Voice=Pass	8	orphan	_	orig_deprel=acl|SpaceAfter=No
11	,	,	PUNCT	,	_	4	punct	_	_
12	ma	ma	CCONJ	CC	_	15	cc	_	_
13	i	il	DET	DT	Gender=Masc|Number=Plur	14	det	_	_
14	greci	greco	PROPN	NN	Gender=Masc|Number=Plur	15	nsubj	_	_
15	adottarono	adottare	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	4	conj	_	_
16	l'	il	DET	DT	Gender=Masc|Number=Sing	17	det	_	SpaceAfter=No
17	alfabeto	alfabeto	NOUN	NN	Gender=Masc|Number=Sing	15	obj	_	_
18	fenicio	fenicio	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	Proper=True|SpaceAfter=No
19	,	,	PUNCT	,	_	20	punct	_	_
20	modificando	modificare	VERB	VBG	Voice=Act	15	advcl	_	_
21	lo	lo	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	20	obj	_	_
22	per	per	ADP	IN	_	23	mark	_	_
23	creare	creare	VERB	VB	Voice=Act	20	xcomp	_	_
24	quello	quello	PRON	PRP	Gender=Masc|Number=Sing|PronType=Dem	23	obj	_	_
25	greco	greco	ADJ	JJ	Gender=Masc|Number=Sing	24	amod	_	Proper=True|SpaceAfter=No
26	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 orphan	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	1912	1912	NUM	CD	_	5	obl	_	_
4	fu	essere	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	5	aux:pass	_	_
5	fondata	fondare	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past	0	root	_	_
6	la	il	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
7	prima	primo	ADJ	JJ	Gender=Fem|Number=Sing	8	amod	_	_
8	casa	casa	NOUN	NN	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
9	cinematografica	cinematografico	ADJ	JJ	Gender=Fem|Number=Sing	8	amod	_	_
10	(	(	PUNCT	(	_	11	punct	_	SpaceAfter=No
11	Athina	Athina	PROPN	NNP	Gender=Fem|Number=Sing	8	appos	_	_
12	Film	Film	PROPN	NN	Gender=Fem|Number=Sing	11	flat	_	SpaceAfter=No
13	)	)	PUNCT	)	_	11	punct	_	_
14	e	e	CCONJ	CC	_	17	cc	_	_
15	in	in	ADP	IN	_	17	case	_	_
16	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	1916	1916	NUM	CD	_	5	conj	_	_
18	la	il	DET	DT	Gender=Fem|Number=Sing	19	det	_	_
19	Asty	Asty	PROPN	NNP	Gender=Fem|Number=Sing	17	orphan	_	orig_deprel=nsubj:pass
20	Film	Film	PROPN	NN	Gender=Fem|Number=Sing	19	flat	_	SpaceAfter=No
21	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	Durán	Durán	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	fa	fare	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
3	da	da	ADP	IN	_	4	case	_	_
4	portavoce	portavoce	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
5	e	e	CCONJ	CC	_	6	cc	_	_
6	Ángel	Ángel	PROPN	NNP	Gender=Masc|Number=Sing	2	conj	_	orig_deprel=nsubj
7	Pintado	Pintado	PROPN	NNP	Gender=Masc|Number=Sing	6	flat	_	_
8	da	da	ADP	IN	_	6	orphan	_	orig_deprel=obl
9	tesoriere	tesoriere	NOUN	NN	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


