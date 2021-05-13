---
layout: base
title:  'Statistics of advmod:lmod in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="da_ddt-dep-advmod.html">advmod</a></tt>.

560 nodes (1%) are attached to their parents as `advmod:lmod`.

535 instances of `advmod:lmod` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97321428571429.

The following 5 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (548; 98% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (9; 2% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advmod:lmod	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Se	se	VERB	_	Mood=Imp	0	root	_	_
3	lige	lige	ADV	_	_	4	advmod	_	_
4	frem	frem	ADV	_	_	2	advmod:lmod	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:lmod	color:blue
1	På	på	ADP	_	AdpType=Prep	2	case	_	_
2	vej	vej	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	obl	_	_
3	ud	ud	ADV	_	_	2	advmod:lmod	_	_
4	fra	fra	ADP	_	AdpType=Prep	5	case	_	_
5	Wimpy	Wimpy	PROPN	_	_	3	obl	_	_
6	passer	passe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
8	på	på	ADP	_	AdpType=Prep	11	mark	_	_
9	ikke	ikke	ADV	_	_	10	advmod	_	_
10	at	at	PART	_	PartType=Inf	11	mark	_	_
11	betale	betale	VERB	_	VerbForm=Inf|Voice=Act	6	advcl	_	_
12	med	med	ADP	_	AdpType=Prep	14	case	_	_
13	danske	dansk	ADJ	_	Degree=Pos|Number=Plur	14	amod	_	_
14	kroner	krone	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	11	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 35 advmod:lmod	color:blue
1	Skuespilleren	skuespiller	NOUN	_	Definite=Def|Gender=Com|Number=Sing	20	nsubj	_	_
2	og	og	CCONJ	_	_	3	cc	_	_
3	regissøren	regissør	NOUN	_	Definite=Def|Gender=Com|Number=Sing	1	conj	_	_
4	Maximillian	Maximillian	PROPN	_	_	1	appos	_	_
5	Schell	Schell	PROPN	_	_	4	flat	_	SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	der	der	PRON	_	PartType=Inf	8	nsubj	_	_
8	spillede	spille	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
9	sammen	sammen	ADV	_	_	8	advmod	_	_
10	med	med	ADP	_	AdpType=Prep	11	case	_	_
11	hende	hun	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=3|PronType=Prs	9	obl	_	_
12	i	i	ADP	_	AdpType=Prep	13	case	_	_
13	filmen	film	NOUN	_	Definite=Def|Gender=Com|Number=Sing	8	obl	_	_
14	"	"	PUNCT	_	_	15	punct	_	SpaceAfter=No
15	Dommen	dom	NOUN	_	Definite=Def|Gender=Com|Number=Sing	13	appos	_	_
16	i	i	ADP	_	AdpType=Prep	17	case	_	_
17	Nürnberg	Nürnberg	PROPN	_	_	15	nmod	_	SpaceAfter=No
18	"	"	PUNCT	_	_	15	punct	_	SpaceAfter=No
19	,	,	PUNCT	_	_	8	punct	_	_
20	sagde	sige	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
21	,	,	PUNCT	_	_	20	punct	_	_
22	da	da	SCONJ	_	_	26	mark	_	_
23	kisten	kiste	NOUN	_	Definite=Def|Gender=Com|Number=Sing	26	nsubj	_	_
24	langsomt	langsomt	ADV	_	Degree=Pos	26	advmod	_	_
25	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	26	aux	_	_
26	sænket	sænke	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	20	advmod	_	_
27	i	i	ADP	_	AdpType=Prep	28	case	_	_
28	jorden	jord	NOUN	_	Definite=Def|Gender=Com|Number=Sing	26	obl	_	SpaceAfter=No
29	,	,	PUNCT	_	_	26	punct	_	_
30	"	"	PUNCT	_	_	34	punct	_	SpaceAfter=No
31	Kære	kær	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	32	amod	_	_
32	Marlene	Marlene	PROPN	_	_	34	vocative	_	_
33	-	-	PUNCT	_	_	32	punct	_	_
34	velkommen	velkommen	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	20	amod	_	_
35	hjem	hjem	ADV	_	_	34	advmod:lmod	_	SpaceAfter=No
36	.	.	PUNCT	_	_	20	punct	_	_
37	Jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	38	nsubj	_	_
38	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	20	ccomp	_	SpaceAfter=No
39	,	,	PUNCT	_	_	38	punct	_	_
40	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	43	nsubj	_	_
41	ville	ville	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	43	aux	_	_
42	have	have	AUX	_	VerbForm=Inf|Voice=Act	43	aux	_	_
43	elsket	elske	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	38	ccomp	_	_
44	de	den	DET	_	Number=Plur|PronType=Dem	45	det	_	_
45	mange	mange	ADJ	_	Degree=Pos|Number=Plur	43	obj	_	_
46	bifald	bifald	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	45	obl	_	SpaceAfter=No
47	"	"	PUNCT	_	_	38	punct	_	SpaceAfter=No
48	,	,	PUNCT	_	_	38	punct	_	_
49	med	med	ADP	_	AdpType=Prep	50	case	_	_
50	adresse	adresse	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	20	obl	_	_
51	til	til	ADP	_	AdpType=Prep	54	case	_	_
52	de	den	DET	_	Number=Plur|PronType=Dem	54	det	_	_
53	godt	godt	ADV	_	Degree=Pos	54	advmod	_	_
54	tusinde	tusinde	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	50	nmod	_	_
55	mennesker	menneske	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	54	nmod	_	SpaceAfter=No
56	,	,	PUNCT	_	_	54	punct	_	_
57	der	der	PRON	_	PartType=Inf	62	nsubj	_	_
58	uden	uden	ADV	_	_	62	advmod	_	_
59	for	for	ADP	_	AdpType=Prep	60	case	_	_
60	kirkegården	kirkegård	NOUN	_	Definite=Def|Gender=Com|Number=Sing	58	obl	_	_
61	havde	have	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	62	aux	_	_
62	klappet	klappe	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	54	acl:relcl	_	_
63	taktfast	taktfast	ADV	_	Degree=Pos	62	advmod	_	SpaceAfter=No
64	,	,	PUNCT	_	_	62	punct	_	_
65	da	da	SCONJ	_	_	71	mark	_	_
66	cadillac'en	cadillac	NOUN	_	Definite=Def|Gender=Com|Number=Sing	71	nsubj	_	_
67	med	med	ADP	_	AdpType=Prep	70	case	_	_
68	hendes	hendes	DET	_	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	69	det	_	_
69	kiste	kiste	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	66	nmod	_	_
70	ombord	ombord	ADV	_	_	69	advmod	_	_
71	defilerede	defilere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	62	advmod	_	_
72	forbi	forbi	ADV	_	_	71	advmod	_	SpaceAfter=No
73	.	.	PUNCT	_	_	20	punct	_	_

~~~


