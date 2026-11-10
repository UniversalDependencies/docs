---
layout: base
title:  'Statistics of csubj in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `csubj`

This relation is universal.

32 nodes (0%) are attached to their parents as `csubj`.

31 instances of `csubj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.03125.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (14; 44% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (12; 38% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	E	e	CCONJ	_	_	2	cc	_	_
2	acrescentava	acrescentar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
3	:	:	PUNCT	_	_	6	punct	_	_
4	-	-	PUNCT	_	_	6	punct	_	_
5	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	preciso	preciso	ADJ	_	Gender=Masc|Number=Sing	2	ccomp:speech	_	_
7	derrubar	derrubar	VERB	_	VerbForm=Inf	6	csubj	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	tirano	tirano	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 csubj	color:blue
1	Ver	ver	VERB	_	VerbForm=Inf	10	csubj	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Rio	Rio	PROPN	_	_	1	obj	_	_
4	de	de	ADP	_	_	5	case	_	_
5	Janeiro	Janeiro	PROPN	_	_	3	flat:name	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	para	para	ADP	_	_	8	case	_	_
8	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	equivalia	equivaler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
11	a	a	ADP	_	_	13	case	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	sonho	sonho	NOUN	_	Gender=Masc|Number=Sing	10	obl	_	_
14	de	de	ADP	_	_	16	case	_	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	hebreu	hebreu	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_
17	cativo	cativo	ADJ	_	Gender=Masc|Number=Sing	16	amod	_	SpaceAfter=No
18	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 csubj	color:blue
1	De	de	ADP	_	_	2	case	_	_
2	manhã	manhã	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	com	com	ADP	_	_	5	case	_	_
5	efeito	efeito	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	costume	costume	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
9	de	de	ADP	_	_	11	case	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Mateus	Mateus	PROPN	_	_	8	nmod	_	_
12	estatelar	estatelar	VERB	_	Number=Sing|Person=3|VerbForm=Inf	8	csubj	_	_
13	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	12	expl	_	_
14	,	,	PUNCT	_	_	17	punct	_	_
15	em	em	ADP	_	_	17	case	_	_
16	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	meio	meio	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	_
18	de	de	ADP	_	_	20	case	_	_
19	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	jardim	jardim	NOUN	_	Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
21	,	,	PUNCT	_	_	24	punct	_	_
22	com	com	ADP	_	_	24	case	_	_
23	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	24	det	_	_
24	olhos	olho	NOUN	_	Gender=Masc|Number=Plur	12	obl	_	_
25	em	em	ADP	_	_	27	case	_	_
26	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	_
27	casa	casa	NOUN	_	Gender=Fem|Number=Sing	24	nmod	_	SpaceAfter=No
28	,	,	PUNCT	_	_	29	punct	_	_
29	namorado	namorado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	12	advcl	_	SpaceAfter=No
30	,	,	PUNCT	_	_	34	punct	_	_
31	durante	durante	ADP	_	_	34	case	_	_
32	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
33	longa	longo	ADJ	_	Gender=Fem|Number=Sing	34	amod	_	_
34	hora	hora	NOUN	_	Gender=Fem|Number=Sing	12	obl	_	SpaceAfter=No
35	,	,	PUNCT	_	_	34	punct	_	_
36	até	até	ADP	_	ExtPos=SCONJ	39	mark	_	_
37	que	que	SCONJ	_	_	36	fixed	_	_
38	vinham	vir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	39	aux	_	_
39	chamar	chamar	VERB	_	VerbForm=Inf	12	advcl	_	_
40	lo	lo	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	39	obj	_	_
41	para	para	ADP	_	_	42	mark	_	_
42	almoçar	almoçar	VERB	_	VerbForm=Inf	39	advcl	_	SpaceAfter=No
43	.	.	PUNCT	_	_	8	punct	_	_

~~~


