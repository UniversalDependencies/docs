---
layout: base
title:  'Statistics of dep in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `dep`

This relation is universal.

4 nodes (0%) are attached to their parents as `dep`.

4 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (1; 25% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 dep	color:blue
1	En	_	ADP	IN	_	3	case	_	_
2	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	mejor	_	NOUN	NN	Gender=Masc|Number=Sing	7	obl	_	_
4	de	_	ADP	IN	_	6	case	_	_
5	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	casos	_	NOUN	NN	Gender=Masc|Number=Plur	3	nmod	_	_
7	peca	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	inocencia	_	NOUN	NN	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	,	_	PUNCT	,	_	16	punct	_	_
11	y	_	CCONJ	CC	_	16	cc	_	_
12	en	_	ADP	IN	_	15	case	_	_
13	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
14	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	dep	_	_
15	peor	_	NOUN	NN	Gender=Masc|Number=Sing	16	obl	_	_
16	permitiría	_	VERB	VBC	Aspect=Imp|Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	7	conj	_	_
17	que	_	SCONJ	IN	_	29	mark	_	_
18	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	_
19	grupos	_	NOUN	NN	Gender=Masc|Number=Plur	29	nsubj	_	_
20	de	_	ADP	IN	_	21	case	_	_
21	presión	_	NOUN	NN	Gender=Fem|Number=Sing	19	nmod	_	_
22	a	_	ADP	IN	_	26	case	_	_
23	favor	_	NOUN	NN	Gender=Masc|Number=Sing	22	fixed	_	_
24	de	_	ADP	IN	_	22	fixed	_	_
25	las	el	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	26	det	_	_
26	armas	_	NOUN	NN	Gender=Fem|Number=Plur	19	nmod	_	_
27	vuelvan	_	AUX	VBC	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	29	aux	_	_
28	a	_	ADP	IN	_	27	fixed	_	_
29	evitar	_	VERB	VB	Aspect=Imp|VerbForm=Fin	16	ccomp	_	_
30	sus	_	PRON	DTP$	Gender=Fem|Number=Plur|Person=3|Poss=Yes|PronType=Prs	31	det	_	_
31	responsabilidades	_	NOUN	NN	Gender=Fem|Number=Plur	29	obj	_	SpaceAfter=No
32	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 34 dep	color:blue
1	Sin	_	ADP	IN	_	10	discourse	_	_
2	embargo	_	NOUN	NN	Gender=Masc|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	candidato	_	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
6	de	de	ADP	INDT	_	8	case	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Partido	_	NOUN	NN	Gender=Masc|Number=Sing	5	nmod	_	Proper=True
9	Republicano	_	ADJ	JJ	Gender=Masc|Number=Sing	8	amod	_	Proper=True
10	rompió	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	con	_	ADP	IN	_	13	case	_	_
12	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	retórica	_	NOUN	NN	Gender=Fem|Number=Sing	10	obl	_	_
14	precedente	_	ADJ	JJ	Gender=Fem|Number=Sing	13	amod	_	_
15	sobre	_	ADP	IN	_	17	case	_	_
16	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	restricción	_	NOUN	NN	Gender=Fem|Number=Sing	13	nmod	_	_
18	de	_	ADP	IN	_	20	case	_	_
19	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	inmigración	_	NOUN	NN	Gender=Fem|Number=Sing	17	nmod	_	_
21	y	_	CCONJ	CC	_	22	cc	_	_
22	afirmó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	conj	_	_
23	que	_	SCONJ	IN	_	27	mark	_	_
24	si	_	SCONJ	IN	_	26	mark	_	_
25	fuese	_	AUX	VBC	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	26	cop	_	_
26	presidente	_	NOUN	NN	Gender=Masc|Number=Sing	27	advcl	_	_
27	reconocería	_	VERB	VBC	Aspect=Imp|Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	22	ccomp	_	_
28	a	_	ADP	IN	_	32	case	_	_
29	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
30	"	_	PUNCT	``	_	32	punct	_	SpaceAfter=No
31	gran	_	ADJ	JJ	Gender=Masc|Number=Sing	32	amod	_	_
32	número	_	NOUN	NN	Gender=Masc|Number=Sing	27	obl	_	SpaceAfter=No
33	"	_	PUNCT	''	_	32	punct	_	_
34	inmigrantes	_	NOUN	NN	Gender=Masc|Number=Plur	32	dep	_	_
35	legales	_	ADJ	JJ	Gender=Masc|Number=Plur	34	amod	_	_
36	mediante	_	ADP	IN	_	39	case	_	_
37	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	39	det	_	_
38	"	_	PUNCT	``	_	39	punct	_	SpaceAfter=No
39	sistema	_	NOUN	NN	Gender=Masc|Number=Sing	32	nmod	_	_
40	de	_	ADP	IN	_	41	case	_	_
41	méritos	_	NOUN	NN	Gender=Masc|Number=Plur	39	nmod	_	SpaceAfter=No
42	"	_	PUNCT	''	_	39	punct	_	SpaceAfter=No
43	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 dep	color:blue
1	Empezó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	en	_	ADP	IN	_	3	case	_	_
3	RSC	_	PROPN	NNP	Number=Sing	1	obl	_	_
4	a	_	ADP	IN	_	5	case	_	_
5	mediados	_	NOUN	NN	Gender=Masc|Number=Plur	1	obl	_	_
6	de	_	ADP	IN	_	8	case	_	_
7	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	años	_	NOUN	NN	Gender=Masc|Number=Plur	5	nmod	_	_
9	60	_	NUM	CD	Gender=Masc|NumType=Card	8	appos	_	_
10	representando	_	VERB	VBG	Aspect=Imp|VerbForm=Fin|Voice=Act	1	advcl	_	_
11	a	_	ADP	IN	_	13	case	_	_
12	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	interno	_	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	_
14	de	_	ADP	IN	_	16	case	_	_
15	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	psiquiátrico	_	NOUN	NN	Gender=Masc|Number=Sing	13	nmod	_	_
17	en	_	ADP	IN	_	18	case	_	_
18	Marat	_	PROPN	NNP	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
19	/	_	PUNCT	-	_	20	punct	_	SpaceAfter=No
20	Sade	_	PROPN	NNP	Gender=Masc|Number=Sing	18	dep	_	SpaceAfter=No
21	.	_	PUNCT	.	_	1	punct	_	_

~~~


