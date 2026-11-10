---
layout: base
title:  'Statistics of csubj in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `csubj`

This relation is universal.

11 nodes (0%) are attached to their parents as `csubj`.

10 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.27272727272727.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (5; 45% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (4; 36% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Però	però	SCONJ	_	_	3	mark	_	_
2	saiva	ëse	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	3	cop	_	_
3	diffiçile	diffiçile	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
4	tegnî	tegnî	VERB	_	Tense=Pres|VerbForm=Inf	3	csubj	_	_
5	"	"	PUNCT	_	_	9	punct	_	SpaceAfter=No
6	Ma	ma	CCONJ	_	_	9	cc	_	_
7	se	se	SCONJ	_	_	9	mark	_	_
8	ghe	ghe	PRON	_	PronType=Dem	9	obl:arg	_	_
9	penso	pensâ	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	obj	_	SpaceAfter=No
10	"	"	PUNCT	_	_	9	punct	_	_
11	pe	pe	ADP	_	_	14	case	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	nòstro	nòstro	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	14	det	_	_
14	inno	inno	NOUN	_	Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 csubj	color:blue
1	Ma	ma	CCONJ	_	_	8	cc	_	_
2	à	à	ADP	_	_	4	case	_	_
3	quello	quello	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	ponto	ponto	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	_
5	lì	lì	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	cöse	cöse	PRON	_	PronType=Int	8	obl:arg	_	_
8	serve	servî	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	ciù	ciù	ADV	_	_	8	advmod	_	_
10	cianze	cianze	VERB	_	Tense=Pres|VerbForm=Inf	8	csubj	_	SpaceAfter=No
11	?	?	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 14 csubj	color:blue
1	Ben	ben	INTJ	_	_	30	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	za	za	ADV	_	_	6	advmod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	i	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	tempi	tempo	NOUN	_	Gender=Masc|Number=Plur	30	obl	_	_
7	che	che	PRON	_	PronType=Rel	9	obl	_	_
8	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	gïava	giâ	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|Typo=Yes|VerbForm=Fin	6	acl:relcl	_	CorrectForm=giava
10	pe	pe	ADP	_	_	12	case	_	_
11	quelli	quello	DET	_	Gender=Masc|Number=Plur|PronType=Dem	12	det	_	_
12	bricchi	bricco	NOUN	_	Gender=Masc|Number=Plur	9	obl	_	SpaceAfter=No
13	,	,	PUNCT	_	_	6	punct	_	_
14	arriescî	arriescî	VERB	_	Tense=Pres|VerbForm=Inf	30	csubj	_	_
15	à	à	ADP	_	_	16	mark	_	_
16	vedde	vedde	VERB	_	Tense=Pres|VerbForm=Inf	14	xcomp	_	_
17	e	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	18	det	_	_
18	òpie	òpia	NOUN	_	Gender=Fem|Number=Plur	16	obj	_	_
19	spantegæ	spantegâ	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	18	acl	_	_
20	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	pö	pö	NOUN	_	Gender=Masc|Number=Sing	19	obl	_	_
22	inte	inte	ADP	_	_	25	case	_	_
23	tutto	tutto	DET	_	Gender=Masc|Number=Sing|PronType=Tot	25	det	_	_
24	l'	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	SpaceAfter=No
25	introtæra	introtæra	NOUN	_	Gender=Masc|Number=Sing	19	obl	_	_
26	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	30	expl	_	_
27	l'	l'	PART	_	_	30	dep	_	SpaceAfter=No
28	ea	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	30	cop	_	_
29	unna	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	impreisa	impreisa	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
31	,	,	PUNCT	_	_	32	punct	_	_
32	imaginemmo	imaginâ	VERB	_	Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	30	parataxis	_	_
33	se	se	PRON	_	Number=Plur|Person=1|PronType=Prs	32	expl:pv	_	_
34	à	à	ADP	_	_	36	case	_	_
35	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	36	det	_	_
36	giornâ	giornâ	NOUN	_	Gender=Fem|Number=Sing	32	obl	_	_
37	d'	de	ADP	_	_	38	case	_	SpaceAfter=No
38	ancheu	ancheu	NOUN	_	Gender=Masc|Number=Sing	36	nmod	_	SpaceAfter=No
39	.	.	PUNCT	_	_	30	punct	_	_

~~~


