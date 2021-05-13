---
layout: base
title:  'Statistics of cc:preconj in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-cc.html">cc</a></tt>.

8 nodes (0%) are attached to their parents as `cc:preconj`.

8 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.875.

The following 7 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (2; 25% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 13% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc:preconj	color:blue
1	Entre	_	ADP	IN	_	3	case	_	_
2	os	o	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
3	seres	_	NOUN	NN	Gender=Masc|Number=Plur	11	nmod	_	ToDo=nmod
4	humanos	humano	ADJ	JJ	Gender=Masc|Number=Plur	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	tanto	tanto	ADV	RB	_	7	cc:preconj	_	_
7	homens	homem	NOUN	NN	Gender=Masc|Number=Plur	11	nsubj	_	_
8	como	_	CCONJ	CC	_	9	cc	_	_
9	mulheres	mulher	NOUN	NN	Gender=Fem|Number=Plur	7	conj	_	_
10	são	ser	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	11	cop	_	_
11	cantores	cantor	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
12	fervorosos	fervoroso	ADJ	JJ	Gender=Masc|Number=Plur	11	amod	_	SpaceAfter=No
13	,	,	PUNCT	,	_	20	punct	_	_
14	e	e	CCONJ	CC	_	20	cc	_	_
15	fazer	_	VERB	VB	_	20	csubj	_	_
16	música	_	NOUN	NN	Gender=Fem|Number=Sing	15	obj	_	_
17	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	20	cop	_	_
18	principalmente	principalmente	ADV	RB	_	20	advmod	_	_
19	uma	um	DET	DT	Gender=Fem|Number=Sing	20	det	_	_
20	atividade	atividade	NOUN	NN	Gender=Fem|Number=Sing	11	conj	_	_
21	comunitária	comunitário	ADJ	JJ	Gender=Fem|Number=Sing	20	amod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 cc:preconj	color:blue
1	Em	em	ADP	INDT	_	3	case	_	_
2	a	o	DET	_	Gender=Fem|Number=Sing	3	det	_	_
3	Europa	Europa	PROPN	NNP	Gender=Fem|Number=Sing	15	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	antes	antes	ADV	RB	_	15	advmod	_	_
6	de	de	ADP	INDT	_	8	case	_	_
7	a	o	DET	_	Gender=Fem|Number=Sing	8	det	_	_
8	explosão	explosão	NOUN	NN	Gender=Fem|Number=Sing	5	obl	_	_
9	de	de	ADP	INDT	_	11	case	_	_
10	a	o	DET	_	Gender=Fem|Number=Sing	11	det	_	_
11	guerra	guerra	NOUN	NN	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
12	,	,	PUNCT	,	_	5	punct	_	_
13	os	o	DET	DT	Gender=Masc|Number=Plur	14	det	_	_
14	Aliados	aliado	NOUN	NN	Gender=Masc|Number=Plur	15	nsubj	_	_
15	tinham	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
16	vantagens	vantagem	NOUN	NN	Gender=Fem|Number=Plur	15	obj	_	_
17	significativas	significativo	ADJ	JJ	Gender=Fem|Number=Plur	16	amod	_	SpaceAfter=No
18	,	,	PUNCT	,	_	20	punct	_	_
19	tanto	tanto	ADV	RB	_	20	cc:preconj	_	_
20	populacionais	populacional	ADJ	JJ	Gender=Fem|Number=Plur	16	amod	_	_
21	como	_	CCONJ	CC	_	22	cc	_	_
22	econômicas	econômico	ADJ	JJ	Gender=Fem|Number=Plur	20	conj	_	SpaceAfter=No
23	.	.	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 35 cc:preconj	color:blue
1	E	_	CCONJ	CC	_	28	discourse	_	_
2	com	_	ADP	IN	_	4	case	_	_
3	a	o	DET	DT	Gender=Fem|Number=Sing	4	det	_	_
4	China	China	PROPN	NNP	Gender=Fem|Number=Sing	28	nmod	_	ToDo=nmod
5	pronta	pronto	ADJ	JJ	Gender=Fem|Number=Sing	4	amod	_	_
6	para	para	ADP	IN	_	17	case	_	_
7	se	_	PRON	SE	Person=3	17	expl:pv	_	_
8	tornar	_	AUX	VB	_	17	cop	_	SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	_	_
10	em	em	ADP	INDT	_	13	case	_	_
11	a	o	DET	_	Gender=Fem|Number=Sing	13	det	_	_
12	próxima	próximo	ADJ	JJ	Gender=Fem|Number=Sing	13	amod	_	_
13	década	década	NOUN	NN	Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No|ToDo=nmod
14	,	,	PUNCT	,	_	13	punct	_	_
15	o	o	DET	DT	Gender=Masc|Number=Sing	17	det	_	_
16	maior	maior	ADJ	JJS	Gender=Masc|Number=Sing	17	amod	_	_
17	mercado	mercado	NOUN	NN	Gender=Masc|Number=Sing	5	xcomp	_	_
18	de	de	ADP	IN	_	19	case	_	_
19	aviação	aviação	NOUN	NN	Gender=Fem|Number=Sing	17	nmod	_	ToDo=nmod
20	de	de	ADP	INDT	_	22	case	_	_
21	o	o	DET	_	Gender=Masc|Number=Sing	22	det	_	_
22	mundo	mundo	NOUN	NN	Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No|ToDo=nmod
23	,	,	PUNCT	,	_	4	punct	_	_
24	o	o	DET	DT	Gender=Masc|Number=Sing	25	det	_	_
25	espectáculo	espectáculo	NOUN	NN	Gender=Masc|Number=Sing	28	nsubj	_	_
26	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	28	cop	_	_
27	uma	um	DET	DT	Gender=Fem|Number=Sing	28	det	_	_
28	oportunidade	oportunidade	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
29	para	para	ADP	IN	_	31	case	_	_
30	Pequim	Pequim	PROPN	NNP	Gender=Fem|Number=Sing	31	nsubj	_	_
31	mostrar	_	VERB	VB	_	28	xcomp	_	_
32	as	o	DET	PDT	Gender=Fem|Number=Plur	34	det	_	_
33	suas	_	PRON	DTP$	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|PronType=Prs	34	det	_	_
34	ambições	ambição	NOUN	NN	Gender=Fem|Number=Plur	31	obj	_	_
35	tanto	_	ADP	IN	_	38	cc:preconj	_	ToDo=ex-adp-child
36	em	em	ADP	INDT	_	38	case	_	_
37	a	o	DET	_	Gender=Fem|Number=Sing	38	det	_	_
38	aviação	aviação	NOUN	NN	Gender=Fem|Number=Sing	31	obl	_	_
39	civil	civil	ADJ	JJ	Gender=Fem|Number=Sing	38	amod	_	_
40	como	como	ADP	IN	_	42	cc	_	ToDo=ex-adp-child
41	de	de	ADP	IN	_	42	case	_	ToDo=ex-adp-child
42	defesa	_	NOUN	NN	Gender=Fem|Number=Sing	38	conj	_	SpaceAfter=No
43	.	.	PUNCT	.	_	28	punct	_	_

~~~


