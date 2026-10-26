---
layout: base
title:  'Statistics of iobj in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_partut-dep-iobj-agent.html">iobj:agent</a></tt>.

115 nodes (0%) are attached to their parents as `iobj`.

114 instances of `iobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1304347826087.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (96; 83% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (13; 11% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 iobj	color:blue
1	Moi	moi	PRON	PE	Number=Sing|Person=1|PronType=Prs	10	dislocated	_	_
2	non	non	ADV	BN	ExtPos=ADV|PronType=Neg	1	advmod	_	_
3	plus	plus	ADV	B	_	2	fixed	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
6	ne	ne	PART	PART	Polarity=Neg	10	advmod	_	_
7	m'	moi	PRON	P	Person=1|PronType=Prs	10	iobj	_	SpaceAfter=No
8	avez	avoir	AUX	VA	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	pas	pas	ADV	BN	Polarity=Neg	10	advmod	_	_
10	donné	donner	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	parole	parole	NOUN	S	Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 iobj	color:blue
1	Atteignez	atteindre	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	de	de	ADP	RD	_	4	reparandum	_	_
3	800	800	NUM	N	NumType=Card	4	nummod	_	_
4	millions	million	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
5	de	de	ADP	E	_	6	case	_	_
6	clients	client	NOUN	S	Gender=Masc|Number=Plur	4	nmod	_	_
7	potentiels	potentiel	ADJ	A	Gender=Masc|Number=Plur	6	amod	_	_
8	là	là	ADV	B	_	1	advmod	_	_
9	où	où	ADV	PR	PronType=Rel	12	iobj	_	_
10	ils	lui	PRON	PE	Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	_
11	se	soi	PRON	P	Person=3|PronType=Prs|Reflex=Yes	12	expl:pv	_	_
12	trouvent	trouver	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 35 iobj	color:blue
1	Considérant	considérer	VERB	V	Tense=Pres|VerbForm=Part	0	root	_	_
2	que	que	SCONJ	CS	_	15	mark	_	_
3	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	méconnaissance	méconnaissance	NOUN	S	Gender=Fem|Number=Sing	15	nsubj	_	_
5	et	et	CCONJ	CC	_	7	cc	_	_
6	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	mépris	mépris	NOUN	S	Gender=Masc|Number=Sing	4	conj	_	_
8	de	de	ADP	E	_	10	case	_	_
9	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	droits	droit	NOUN	S	Gender=Masc|Number=Plur	7	nmod	_	_
11	de	de	ADP	E	_	13	case	_	_
12	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	13	det	_	SpaceAfter=No
13	homme	homme	NOUN	S	Gender=Masc|Number=Sing	10	nmod	_	_
14	ont	avoir	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	conduit	conduire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	ccomp	_	_
16	à	à	ADP	E	_	18	case	_	_
17	des	un	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	18	det	_	_
18	actes	acte	NOUN	S	Gender=Masc|Number=Plur	15	obl	_	_
19	de	de	ADP	E	_	20	case	_	_
20	barbarie	barbarie	NOUN	S	Gender=Fem|Number=Sing	18	nmod	_	_
21	qui	qui	PRON	PR	PronType=Rel	22	nsubj	_	_
22	révoltent	révolter	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	18	acl:relcl	_	_
23	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	conscience	conscience	NOUN	S	Gender=Fem|Number=Sing	22	obj	_	_
25	de	de	ADP	E	_	27	case	_	_
26	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	27	det	_	SpaceAfter=No
27	humanité	humanité	NOUN	S	Gender=Fem|Number=Sing	24	nmod	_	_
28	et	et	CCONJ	CC	_	58	cc	_	_
29	que	que	SCONJ	CS	_	58	mark	_	_
30	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	31	det	_	SpaceAfter=No
31	avènement	avènement	NOUN	S	Gender=Masc|Number=Sing	58	nsubj:pass	_	_
32	d'	de	ADP	E	_	34	case	_	SpaceAfter=No
33	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	monde	monde	NOUN	S	Gender=Masc|Number=Sing	31	nmod	_	_
35	où	où	ADV	PR	PronType=Rel	40	iobj	_	_
36	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	37	det	_	_
37	êtres	être	NOUN	S	Gender=Masc|Number=Plur	40	nsubj	_	_
38	humains	humain	ADJ	A	Gender=Masc|Number=Plur	37	amod	_	_
39	seront	être	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	40	cop	_	_
40	libres	libre	ADJ	A	Gender=Masc|Number=Plur	34	acl:relcl	_	_
41	de	de	ADP	E	_	42	mark	_	_
42	parler	parler	VERB	V	VerbForm=Inf	40	advcl	_	_
43	et	et	CCONJ	CC	_	45	cc	_	_
44	de	de	ADP	E	_	45	mark	_	_
45	croire	croire	VERB	V	VerbForm=Inf	42	conj	_	SpaceAfter=No
46	,	,	PUNCT	FF	_	40	punct	_	_
47	libérés	libérer	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	40	advcl	_	_
48	de	de	ADP	E	_	50	case	_	_
49	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	50	det	_	_
50	terreur	terreur	NOUN	S	Gender=Fem|Number=Sing	47	obl	_	_
51	et	et	CCONJ	CC	_	54	cc	_	_
52	de	de	ADP	E	_	54	case	_	_
53	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	54	det	_	_
54	misère	misère	NOUN	S	Gender=Fem|Number=Sing	50	conj	_	SpaceAfter=No
55	,	,	PUNCT	FF	_	31	punct	_	_
56	a	avoir	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	58	aux	_	_
57	été	être	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	58	aux:pass	_	_
58	proclamé	proclamer	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	15	conj	_	_
59	comme	comme	ADP	E	_	63	case	_	_
60	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	63	det	_	_
61	plus	plus	ADV	B	_	62	advmod	_	_
62	haute	haut	ADJ	A	Gender=Fem|Number=Sing	63	amod	_	_
63	aspiration	aspiration	NOUN	S	Gender=Fem|Number=Sing	58	obl	_	_
64	de	de	ADP	E	_	66	case	_	_
65	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	66	det	_	SpaceAfter=No
66	homme	homme	NOUN	S	Gender=Masc|Number=Sing	63	nmod	_	SpaceAfter=No
67	.	.	PUNCT	FS	_	1	punct	_	_

~~~


