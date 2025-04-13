---
layout: base
title:  'Statistics of orphan in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 orphan	color:blue
1	Esta	este	DET	DT	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	cepa	cepa	NOUN	NN	Gender=Fem|Number=Sing	3	nsubj	_	_
3	ayuda	ayudar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	con	con	ADP	IN	_	6	case	_	_
5	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	dolor	dolor	NOUN	NN	Gender=Masc|Number=Sing	3	obl	_	_
7	de	de	ADP	IN	_	8	case	_	_
8	espalda	espalda	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	PunctType=Comm	10	punct	_	_
10	esta	este	DET	DT	Gender=Fem|Number=Sing|PronType=Dem	3	conj	_	orig_deprel=nsubj
11	con	con	ADP	IN	_	12	case	_	orig_deprel=obl
12	las	el	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	_
13	náuseas	náusea	NOUN	NN	Gender=Fem|Number=Plur	10	orphan	_	SpaceAfter=No
14	,	,	PUNCT	,	PunctType=Comm	18	punct	_	_
15	este	este	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	16	det	_	_
16	producto	producto	NOUN	NN	Gender=Masc|Number=Sing	18	nsubj	_	_
17	te	tú	PRON	PRP	Case=Acc|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	18	obj	_	_
18	hace	hacer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
19	dormir	dormir	VERB	VB	VerbForm=Inf	18	xcomp	_	_
20	por	por	ADP	IN	_	22	case	_	_
21	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	noche	noche	NOUN	NN	Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
23	,	,	PUNCT	,	PunctType=Comm	24	punct	_	_
24	explica	explicar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
25	Dietrich	Dietrich	PROPN	NNP	Gender=Masc|Number=Sing	24	nsubj	_	SpaceAfter=No
26	,	,	PUNCT	,	PunctType=Comm	29	punct	_	_
27	de	de	ADP	IN	_	29	case	_	_
28	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	sede	sede	NOUN	NN	Gender=Fem|Number=Sing	25	nmod	_	_
30	de	de	ADP	IN	_	32	case	_	_
31	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	32	det	_	_
32	compañía	compañía	NOUN	NN	Gender=Fem|Number=Sing	29	nmod	_	_
33	en	en	ADP	IN	_	34	case	_	_
34	Denver	Denver	PROPN	NNP	Number=Sing	29	nmod	_	SpaceAfter=No
35	,	,	PUNCT	,	PunctType=Comm	36	punct	_	_
36	Colorado	Colorado	PROPN	NNP	Number=Sing	34	appos	_	SpaceAfter=No
37	,	,	PUNCT	,	PunctType=Comm	40	punct	_	_
38	donde	donde	ADV	WRB	PronType=Rel	40	advmod	_	_
39	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	40	expl:pass	_	_
40	vende	vender	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	acl:relcl	_	_
41	hierba	hierba	NOUN	NN	Gender=Fem|Number=Sing	40	nsubj:pass	_	_
42	legalmente	legalmente	ADV	RB	_	40	advmod	_	SpaceAfter=No
43	.	.	PUNCT	.	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 orphan	color:blue
1	La	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	parte	parte	NOUN	NN	Gender=Fem|Number=Sing	7	nsubj:pass	_	_
3	norte	norte	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
4	de	de	ADP	IN	_	5	case	_	_
5	Cáucaso	Cáucaso	PROPN	NNP	Number=Sing	2	nmod	_	_
6	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	7	expl:pass	_	_
7	conoce	conocer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	como	como	ADP	IN	_	9	case	_	_
9	Ciscaucasia	Ciscaucasia	PROPN	NNP	Number=Sing	7	obl	_	_
10	y	y	CCONJ	CC	_	12	cc	_	_
11	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	parte	parte	NOUN	NN	Gender=Fem|Number=Sing	7	conj	_	_
13	sur	sur	NOUN	NN	Gender=Masc|Number=Sing	12	appos	_	_
14	como	como	ADP	IN	_	15	case	_	_
15	Transcaucásica	Transcaucásica	PROPN	NNP	Number=Sing	12	orphan	_	SpaceAfter=No
16	.	.	PUNCT	.	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 orphan	color:blue
1	En	en	ADP	IN	_	2	case	_	_
2	1912	1912	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	4	obl	_	_
3	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	fundada	fundar	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	primera	primero	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
7	compañía	compañía	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
8	de	de	ADP	IN	_	9	case	_	_
9	películas	película	NOUN	NN	Gender=Fem|Number=Plur	7	nmod	_	_
10	(	(	PUNCT	(	PunctSide=Ini|PunctType=Brck	11	punct	_	SpaceAfter=No
11	Athina	Athina	PROPN	NNP	Number=Sing	7	appos	_	_
12	Film	Film	PROPN	NNP	Number=Sing	11	flat:name	_	SpaceAfter=No|Proper=True
13	)	)	PUNCT	)	PunctSide=Fin|PunctType=Brck	11	punct	_	_
14	y	y	CCONJ	CC	_	16	cc	_	_
15	en	en	ADP	IN	_	16	case	_	orig_deprel=obl
16	1916	1916	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	4	conj	_	SpaceAfter=No
17	,	,	PUNCT	,	PunctType=Comm	18	punct	_	_
18	Asty	Asty	PROPN	NNP	Number=Sing	16	orphan	_	_
19	Film	Film	PROPN	NNP	Number=Sing	18	flat:name	_	SpaceAfter=No|orig_deprel=nsubj:pass|Proper=True
20	.	.	PUNCT	.	PunctType=Peri	4	punct	_	_

~~~


