---
layout: base
title:  'Statistics of obl:arg in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_partut-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_partut-dep-obl-mod.html">obl:mod</a></tt>.

34 nodes (0%) are attached to their parents as `obl:arg`.

34 instances of `obl:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.88235294117647.

The following 5 pairs of parts of speech are connected with `obl:arg`: <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (29; 85% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-SYM.html">SYM</a></tt> (2; 6% instances), <tt><a href="fr_partut-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_partut-pos-DET.html">DET</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:arg	color:blue
1	Plus	plus	ADV	B	_	0	root	_	_
2	de	de	ADP	E	_	4	case	_	_
3	800	800	NUM	N	NumType=Card	4	nummod	_	_
4	millions	million	NOUN	S	Gender=Fem|Number=Plur	1	obl:arg	_	_
5	de	de	ADP	E	_	6	case	_	_
6	clients	client	NOUN	S	Gender=Masc|Number=Plur	4	nmod	_	_
7	potentiels	potentiel	ADJ	A	Gender=Masc|Number=Plur	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:arg	color:blue
1	Plus	plus	ADV	B	_	0	root	_	_
2	de	de	ADP	E	_	4	case	_	_
3	50	50	NUM	N	NumType=Card	4	nummod	_	SpaceAfter=No
4	%	%	SYM	X	_	1	obl:arg	_	_
5	d'	de	ADP	E	_	6	case	_	SpaceAfter=No
6	augmentation	augmentation	NOUN	S	Gender=Fem|Number=Sing	4	nmod	_	_
7	de	de	ADP	E	_	9	case	_	_
8	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	locations	location	NOUN	S	Gender=Fem|Number=Plur	6	nmod	_	_
10	par	par	ADP	E	_	11	case	_	_
11	rapport	rapport	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
12	à	à	ADP	E	_	14	case	_	_
13	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	14	det	_	SpaceAfter=No
14	année	année	NOUN	S	Gender=Fem|Number=Sing	11	nmod	_	_
15	précédente	précédent	ADJ	A	Gender=Fem|Number=Sing	14	amod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 20 obl:arg	color:blue
1	Une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	présence	présence	NOUN	S	Gender=Fem|Number=Sing	22	nsubj	_	_
3	sur	sur	ADP	E	_	4	case	_	_
4	Facebook	Facebook	PROPN	SP	_	2	nmod	_	_
5	par	par	ADP	E	_	7	case	_	_
6	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	intermédiaire	intermédiaire	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
8	de	de	ADP	E	_	10	case	_	_
9	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	Page	Page	PROPN	SP	_	7	nmod	_	_
11	ou	ou	CCONJ	CC	_	14	cc	_	_
12	de	de	ADP	E	_	14	case	_	_
13	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	14	det	_	_
14	évènements	évènement	NOUN	S	Gender=Fem|Number=Plur	10	conj	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	2	punct	_	_
16	en	en	ADP	E	ExtPos=ADV	2	advmod	_	_
17	plus	plus	ADV	B	_	16	fixed	_	_
18	de	de	ADP	E	_	20	case	_	_
19	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	20	det	_	_
20	publicités	publicité	NOUN	S	Gender=Fem|Number=Plur	16	obl:arg	_	SpaceAfter=No
21	,	,	PUNCT	FF	_	20	punct	_	_
22	peut	pouvoir	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
23	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	24	iobj	_	_
24	permettre	permettre	VERB	V	VerbForm=Inf	22	xcomp	_	_
25	de	de	ADP	E	_	26	mark	_	_
26	convertir	convertir	VERB	V	VerbForm=Inf	24	xcomp	_	_
27	votre	son	DET	AP	Gender=Masc|Number=Sing|PronType=Prs	28	det	_	_
28	message	message	NOUN	S	Gender=Masc|Number=Sing	26	obj	_	_
29	publicitaire	publicitaire	ADJ	A	Number=Sing	28	amod	_	_
30	en	en	ADP	E	_	32	case	_	_
31	«	«	PUNCT	FB	_	32	punct	_	SpaceAfter=No
32	recommandation	recommandation	NOUN	S	Gender=Fem|Number=Sing	26	obl	_	SpaceAfter=No
33	»	»	PUNCT	FB	_	32	punct	_	_
34	à	à	ADP	E	_	36	case	_	_
35	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	36	det	_	SpaceAfter=No
36	aide	aide	NOUN	S	Gender=Fem|Number=Sing	26	obl	_	_
37	de	de	ADP	E	_	38	case	_	_
38	contenu	contenu	NOUN	S	Gender=Masc|Number=Sing	36	nmod	_	_
39	des	un	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	40	det	_	_
40	amis	ami	NOUN	S	Gender=Masc|Number=Plur	38	nmod	_	_
41	de	de	ADP	E	_	43	case	_	_
42	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	43	det	_	SpaceAfter=No
43	utilisateur	utilisateur	NOUN	S	Gender=Masc|Number=Sing	40	nmod	_	_
44	déjà	déjà	ADV	B	_	45	advmod	_	_
45	affiliés	affilier	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	40	acl	_	_
46	à	à	ADP	E	_	48	case	_	_
47	vos	son	DET	AP	Gender=Masc|Number=Plur|PronType=Prs	48	det	_	_
48	produits	produit	NOUN	S	Gender=Masc|Number=Plur	45	obl	_	SpaceAfter=No
49	.	.	PUNCT	FS	_	22	punct	_	_

~~~


