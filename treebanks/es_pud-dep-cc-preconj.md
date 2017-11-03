---
layout: base
title:  'Statistics of cc:preconj in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-cc.html">cc</a></tt>.

12 nodes (0%) are attached to their parents as `cc:preconj`.

12 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16666666666667.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (5; 42% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (3; 25% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 17% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Tanto	_	ADV	RB	_	3	cc:preconj	_	_
2	la	_	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	investigación	_	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	_
4	como	_	ADP	IN	_	6	cc	_	_
5	las	_	DET	DT	Gender=Fem|Number=Plur	6	det	_	_
6	expediciones	_	NOUN	NN	Gender=Fem|Number=Plur	3	conj	_	_
7	a	_	ADP	IN	_	9	case	_	_
8	la	_	DET	DT	Gender=Fem|Number=Sing	9	det	_	_
9	isla	_	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	_
10	continúan	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc:preconj	color:blue
1	Nicolai	_	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	colabora	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
3	con	_	ADP	IN	_	5	case	_	_
4	varias	_	DET	DT	Gender=Fem|Number=Plur	5	det	_	_
5	pistas	_	NOUN	NN	Gender=Fem|Number=Plur	2	obl	_	_
6	cinematográficas	_	ADJ	JJ	Gender=Fem|Number=Plur	5	amod	_	_
7	tanto	_	ADV	RB	_	9	cc:preconj	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	Morricone	_	PROPN	NNP	Gender=Masc|Number=Sing	5	nmod	_	_
10	como	_	ADP	IN	_	11	cc	_	_
11	Metti	_	PROPN	NNP	Gender=Masc|Number=Sing	9	conj	_	SpaceAfter=No
12	,	_	PUNCT	,	_	13	punct	_	_
13	juntos	_	ADJ	JJ	Gender=Masc|Number=Plur	9	amod	_	_
14	en	_	ADP	IN	_	16	case	_	_
15	una	_	DET	DT	Gender=Fem|Number=Sing	16	det	_	_
16	noche	_	NOUN	NN	Gender=Fem|Number=Sing	13	obl	_	_
17	en	_	ADP	IN	_	19	case	_	_
18	la	_	DET	DT	Gender=Fem|Number=Sing	19	det	_	_
19	cena	_	NOUN	NN	Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
20	;	_	PUNCT	:	_	23	punct	_	_
21	algunas	_	NOUN	NN	Gender=Fem|Number=Plur	23	nsubj:pass	_	_
22	eran	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Pass	23	aux:pass	_	_
23	escritas	_	VERB	VBN	Gender=Fem|Number=Plur	2	parataxis	_	_
24	por	_	ADP	IN	_	25	case	_	_
25	ambos	_	NOUN	NN	Gender=Masc|Number=Plur	23	obl	_	SpaceAfter=No
26	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cc:preconj	color:blue
1	¿	_	PUNCT	.	_	5	punct	_	SpaceAfter=No
2	O	_	CCONJ	CC	_	5	cc:preconj	_	_
3	es	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	cop	_	_
4	un	_	DET	DT	Gender=Masc|Number=Sing	5	det	_	_
5	estándar	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
6	o	_	CCONJ	CC	_	7	cc	_	_
7	tarifa	_	NOUN	NN	Gender=Fem|Number=Sing	5	conj	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	pago	_	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	_
10	anticipado	_	ADJ	JJ	Gender=Masc|Number=Sing	9	amod	_	_
11	cara	_	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
12	?	_	PUNCT	.	_	5	punct	_	_

~~~


