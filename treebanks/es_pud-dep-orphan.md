---
layout: base
title:  'Statistics of orphan in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `orphan`

This relation is universal.

5 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2.

The following 5 pairs of parts of speech are connected with `orphan`: <tt><a href="es_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 orphan	color:blue
1	En	_	ADP	IN	_	2	case	_	_
2	1912	_	NUM	CD	Gender=Masc	4	obl	_	_
3	fue	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	4	aux:pass	_	_
4	fundada	_	VERB	VBN	Gender=Fem|Number=Sing	0	root	_	_
5	la	_	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
6	primera	_	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
7	compañía	_	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	películas	_	NOUN	NN	Gender=Fem|Number=Plur	7	nmod	_	_
10	(	_	PUNCT	(	_	11	punct	_	SpaceAfter=No
11	Athina	_	PROPN	NNP	Number=Sing	7	appos	_	_
12	Film	_	NOUN	NN	Number=Sing	11	flat:name	_	Proper=True|SpaceAfter=No
13	)	_	PUNCT	)	_	11	punct	_	_
14	y	_	CCONJ	CC	_	16	cc	_	_
15	en	_	ADP	IN	_	16	case	_	orig_deprel=obl
16	1916	_	NUM	CD	Gender=Masc	2	conj	_	SpaceAfter=No
17	,	_	PUNCT	,	_	18	punct	_	_
18	Asty	_	PROPN	NNP	Number=Sing	15	orphan	_	_
19	Film	_	NOUN	NN	Number=Sing	18	flat:name	_	orig_deprel=nsubj:pass|Proper=True|SpaceAfter=No
20	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 orphan	color:blue
1	Esta	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	cepa	_	NOUN	NN	Gender=Fem|Number=Sing	3	nsubj	_	_
3	ayuda	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	con	_	ADP	IN	_	6	case	_	_
5	el	_	DET	DT	Gender=Masc|Number=Sing	6	det	_	_
6	dolor	_	NOUN	NN	Gender=Masc|Number=Sing	3	obl	_	_
7	de	_	ADP	IN	_	8	case	_	_
8	espalda	_	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	_	PUNCT	,	_	10	punct	_	_
10	esta	_	DET	DT	Gender=Fem|Number=Sing	3	conj	_	orig_deprel=nsubj
11	con	_	ADP	IN	_	12	case	_	orig_deprel=obl
12	las	_	DET	DT	Gender=Fem|Number=Plur	13	det	_	_
13	náuseas	_	NOUN	NN	Gender=Fem|Number=Plur	10	orphan	_	SpaceAfter=No
14	,	_	PUNCT	,	_	18	punct	_	_
15	este	_	DET	DT	Gender=Masc|Number=Sing	16	det	_	_
16	producto	_	NOUN	NN	Gender=Masc|Number=Sing	18	nsubj	_	_
17	te	_	PRON	PRP	Case=Dat|Number=Sing|Person=2	18	iobj	_	_
18	hace	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	parataxis	_	_
19	dormir	_	VERB	VB	Aspect=Imp|Voice=Act	18	xcomp	_	_
20	por	_	ADP	IN	_	22	case	_	_
21	la	_	DET	DT	Gender=Fem|Number=Sing	22	det	_	_
22	noche	_	NOUN	NN	Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
23	,	_	PUNCT	,	_	24	punct	_	_
24	explica	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	parataxis	_	_
25	Dietrich	_	PROPN	NNP	Gender=Masc|Number=Sing	24	nsubj	_	SpaceAfter=No
26	,	_	PUNCT	,	_	29	punct	_	_
27	de	_	ADP	IN	_	29	case	_	_
28	la	_	DET	DT	Gender=Fem|Number=Sing	29	det	_	_
29	sede	_	NOUN	NN	Gender=Fem|Number=Sing	25	nmod	_	_
30	de	_	ADP	IN	_	32	case	_	_
31	la	_	DET	DT	Gender=Fem|Number=Sing	32	det	_	_
32	compañía	_	NOUN	NN	Gender=Fem|Number=Sing	29	nmod	_	_
33	en	_	ADP	IN	_	34	case	_	_
34	Denver	_	PROPN	NNP	Number=Sing	29	nmod	_	SpaceAfter=No
35	,	_	PUNCT	,	_	36	punct	_	_
36	Colorado	_	PROPN	NNP	Number=Sing	34	appos	_	SpaceAfter=No
37	,	_	PUNCT	,	_	40	punct	_	_
38	donde	_	ADV	WRB	_	40	advmod	_	_
39	se	_	PRON	SE	Number=Sing|Person=3	40	compound:prt	_	_
40	vende	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	34	acl:relcl	_	_
41	hierba	_	NOUN	NN	Gender=Fem|Number=Sing	40	nsubj:pass	_	_
42	legalmente	_	ADV	RB	_	40	advmod	_	SpaceAfter=No
43	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 orphan	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	parte	_	NOUN	NN	Gender=Fem|Number=Sing	7	nsubj:pass	_	_
3	norte	_	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
4	de	_	ADP	IN	_	5	case	_	_
5	Cáucaso	_	PROPN	NNP	Number=Sing	2	nmod	_	_
6	se	_	PRON	SE	Number=Sing|Person=3	7	compound:prt	_	_
7	conoce	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
8	como	_	ADP	IN	_	9	case	_	_
9	Ciscaucasia	_	PROPN	NNP	Number=Sing	7	obl	_	_
10	y	_	CCONJ	CC	_	12	cc	_	_
11	la	_	DET	DT	Gender=Fem|Number=Sing	12	det	_	_
12	parte	_	NOUN	NN	Gender=Fem|Number=Sing	7	orphan	_	orig_deprel=nsubj:pass
13	sur	_	NOUN	NN	Gender=Masc|Number=Sing	12	appos	_	_
14	como	_	ADP	IN	_	15	case	_	orig_deprel=obl
15	Transcaucásica	_	PROPN	NNP	Number=Sing	12	orphan	_	SpaceAfter=No
16	.	_	PUNCT	.	_	7	punct	_	_

~~~


