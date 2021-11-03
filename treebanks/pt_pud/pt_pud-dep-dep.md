---
layout: base
title:  'Statistics of dep in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `dep`

This relation is universal.

6 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (2; 33% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 17% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 dep	color:blue
1	De	_	ADP	IN	_	2	case	_	_
2	volta	volta	NOUN	NN	Gender=Fem|Number=Sing	8	obl	_	_
3	a	a	ADP	INDT	_	5	case	_	_
4	o	o	DET	_	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	trem	trem	NOUN	NN	Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	,	_	2	punct	_	_
7	nós	_	PRON	PRP	Case=Nom|Number=Plur|Person=1	8	nsubj	_	_
8	continuamos	continuar	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
9	em	em	ADP	IN	_	10	case	_	_
10	direção	direção	NOUN	NN	Gender=Fem|Number=Sing	8	obl	_	_
11	a	a	ADP	INDT	_	14	case	_	_
12	o	o	DET	_	Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	o	o	DET	DT	Gender=Masc|Number=Sing	14	dep	_	_
14	sul	sul	NOUN	NN	Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 49	bgColor:blue
# visual-style 49	fgColor:white
# visual-style 49 41 dep	color:blue
1	Mas	_	CCONJ	CC	_	38	discourse	_	_
2	quando	_	SCONJ	IN	_	6	mark	_	_
3	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Senado	senado	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	Proper=True
5	lhe	_	PRON	PRP	Case=Dat|Number=Sing|Person=3	6	iobj	_	_
6	respondeu	responder	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	38	advcl	_	_
7	com	_	ADP	IN	_	8	case	_	_
8	autoridade	autoridade	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	_	_
10	proibindo	_	VERB	VBG	_	6	acl	_	SpaceAfter=No
11	-	-	PUNCT	-	_	12	punct	_	SpaceAfter=No
12	lhe	_	PRON	PRP	Case=Acc|Number=Sing|Person=3	10	obj	_	_
13	de	de	ADP	IN	_	14	case	_	_
14	competir	_	VERB	VB	_	10	xcomp	_	_
15	em	em	ADP	INDT	_	17	case	_	_
16	o	o	DET	_	Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	consulado	consulado	NOUN	NN	Gender=Masc|Number=Sing	14	obl	_	_
18	geral	geral	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	_
19	e	e	CCONJ	CC	_	20	cc	_	_
20	oferecendo	_	VERB	VBG	_	10	conj	_	SpaceAfter=No
21	-	-	PUNCT	-	_	22	punct	_	SpaceAfter=No
22	lhe	_	PRON	PRP	Case=Dat|Number=Sing|Person=3	20	iobj	_	_
23	a	o	DET	DT	Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	opção	opção	NOUN	NN	Gender=Fem|Number=Sing	20	obj	_	_
25	de	de	ADP	IN	_	27	case	_	_
26	ou	_	CCONJ	CC	_	27	cc:preconj	_	_
27	retirar	_	VERB	VB	_	24	xcomp	_	_
28	suas	_	PRON	DTP$	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|PronType=Prs	29	det	_	_
29	tropas	tropa	NOUN	NN	Gender=Fem|Number=Plur	27	obj	_	_
30	ou	_	CCONJ	CC	_	34	cc	_	_
31	se	_	PRON	SE	Person=3	34	expl:pv	_	_
32	tornar	_	AUX	VB	_	34	cop	_	_
33	um	um	DET	DT	Gender=Masc|Number=Sing	34	det	_	_
34	inimigo	inimigo	NOUN	NN	Gender=Masc|Number=Sing	27	conj	_	_
35	público	público	ADJ	JJ	Gender=Masc|Number=Sing	34	amod	_	SpaceAfter=No
36	,	,	PUNCT	,	_	6	punct	_	_
37	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	38	nsubj	_	_
38	entendeu	entender	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
39	que	que	SCONJ	IN	_	49	mark	_	_
40	qualquer	_	DET	DT	Gender=Fem|Number=Sing	41	det	_	_
41	alternativa	_	NOUN	NN	Gender=Fem|Number=Sing	49	dep	_	_
42	que	_	PRON	WP	_	44	obj	_	_
43	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	44	nsubj	_	_
44	escolhesse	_	VERB	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Past	41	acl:relcl	_	SpaceAfter=No
45	,	,	PUNCT	,	_	41	punct	_	_
46	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	49	nsubj	_	_
47	se	_	PRON	SE	Person=3	49	expl:pv	_	_
48	entregaria	_	AUX	VBC	Mood=Cnd|Number=Sing|Person=3	49	cop	_	_
49	desarmado	desarmado	ADJ	JJ	Gender=Masc|Number=Sing	38	ccomp	_	_
50	em	em	ADP	INDT	_	52	case	_	_
51	as	o	DET	_	Gender=Fem|Number=Plur|PronType=Art	52	det	_	_
52	mãos	mão	NOUN	NN	Gender=Fem|Number=Plur	49	obl	_	_
53	de	de	ADP	INDT	_	56	case	_	_
54	os	o	DET	_	Gender=Masc|Number=Plur|PronType=Art	56	det	_	_
55	seus	_	PRON	DTP$	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|PronType=Prs	56	det	_	_
56	inimigos	inimigo	NOUN	NN	Gender=Masc|Number=Plur	52	nmod	_	_
57	políticos	político	ADJ	JJ	Gender=Masc|Number=Plur	56	amod	_	SpaceAfter=No
58	.	.	PUNCT	.	_	38	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 23 dep	color:blue
1	Já	já	ADV	RB	_	5	advmod	_	_
2	não	não	ADV	RB	Polarity=Neg	5	advmod	_	_
3	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
4	um	um	DET	DT	Gender=Masc|Number=Sing	5	det	_	_
5	efeito	efeito	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
6	que	_	PRON	WP	_	7	nsubj	_	_
7	remete	remeter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	acl:relcl	_	_
8	para	para	ADP	IN	_	10	case	_	_
9	os	o	DET	DT	Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	anos	ano	NOUN	NN	Gender=Masc|Number=Plur	7	obl	_	_
11	setenta	_	NUM	CD	_	10	appos	_	SpaceAfter=No
12	,	,	PUNCT	,	_	25	punct	_	_
13	a	o	DET	DT	Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	flocagem	_	NOUN	NN	Gender=Fem|Number=Sing	25	nsubj	_	_
15	-	-	PUNCT	-	_	16	punct	_	_
16	ou	_	CCONJ	CC	_	18	cc	_	_
17	a	o	DET	DT	Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	cobertura	cobertura	NOUN	NN	Gender=Fem|Number=Sing	14	conj	_	_
19	de	de	ADP	IN	_	21	case	_	_
20	uma	um	DET	DT	Gender=Fem|Number=Sing	21	det	_	_
21	superfície	superfície	NOUN	NN	Gender=Fem|Number=Sing	18	nmod	_	_
22	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	23	cop	_	_
23	material	material	ADJ	JJ	Gender=Fem|Number=Sing	14	dep	_	_
24	-	-	PUNCT	-	_	23	punct	_	_
25	está	estar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	parataxis	_	_
26	novamente	novamente	ADV	RB	_	25	advmod	_	_
27	em	em	ADP	INDT	_	29	case	_	_
28	a	o	DET	_	Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	moda	moda	NOUN	NN	Gender=Fem|Number=Sing	25	obl	_	SpaceAfter=No
30	.	.	PUNCT	.	_	5	punct	_	_

~~~


