---
layout: base
title:  'Statistics of obj:agent in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `obj:agent`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-obj.html">obj</a></tt>.

12 nodes (0%) are attached to their parents as `obj:agent`.

11 instances of `obj:agent` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 2 pairs of parts of speech are connected with `obj:agent`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (11; 92% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj:agent	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	conteur	conteur	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:caus	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:caus	_	_
5	jouer	jouer	VERB	_	VerbForm=Inf	0	root	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	enfants	enfant	NOUN	_	Number=Plur	5	obj:agent	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 38 obj:agent	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3	4	expl:subj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	commun	commun	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
6	de	de	ADP	_	_	7	mark	_	_
7	dire	dire	VERB	_	VerbForm=Inf	4	dislocated	_	_
8	que	que	SCONJ	_	_	25	mark	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	Union	Union	PROPN	_	Number=Sing	25	nsubj	_	_
11	européenne	européen	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	10	punct	_	_
13	telle	tel	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	_
14	qu'	que	SCONJ	_	_	16	mark	_	SpaceAfter=No
15	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	16	nsubj	_	_
16	fonctionne	fonctionner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	_	_
17	aujourd'hui	aujourd'hui	ADV	_	_	16	advmod	_	SpaceAfter=No
18	,	,	PUNCT	_	_	16	punct	_	_
19	face	face	NOUN	_	Gender=Fem|Number=Sing	23	case	_	EXTPOS=ADP|MWE=face_à
20	à	à	ADP	_	_	19	fixed	_	_
21	tous	tout	ADJ	_	Gender=Masc|Number=Plur	23	amod	_	_
22	ces	ce	DET	_	Number=Plur|PronType=Dem	23	det	_	_
23	défis	défi	NOUN	_	Gender=Masc|Number=Plur	25	obl:mod	_	SpaceAfter=No
24	,	,	PUNCT	_	_	25	punct	_	_
25	appelle	appeler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	_
26	absolument	absolument	ADV	_	_	25	advmod	_	_
27	certaines	certain	DET	_	Gender=Fem|Number=Plur	28	det	_	_
28	transformations	transformation	NOUN	_	Gender=Fem|Number=Plur	25	obj	_	SpaceAfter=No
29	,	,	PUNCT	_	_	28	punct	_	_
30	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	31	det	_	_
31	transformations	transformation	NOUN	_	Gender=Fem|Number=Plur	28	appos	_	_
32	qui	qui	PRON	_	PronType=Rel	33	nsubj	_	_
33	auront	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	31	acl:relcl	_	_
34	comme	comme	ADP	_	_	35	case	_	_
35	but	but	NOUN	_	Gender=Masc|Number=Sing	33	xcomp	_	_
36	principal	principal	ADJ	_	Gender=Masc|Number=Sing	35	amod	_	_
37	de	de	ADP	_	_	41	mark	_	_
38	la	le	PRON	_	Gender=Fem|Number=Sing|Person=3	41	obj:agent	_	_
39	faire	faire	AUX	_	VerbForm=Inf	41	aux:caus	_	_
40	encore	encore	ADV	_	_	41	advmod	_	_
41	évoluer	évoluer	VERB	_	VerbForm=Inf	33	xcomp	_	_
42	sur	sur	ADP	_	_	44	case	_	_
43	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	44	det	_	_
44	base	base	NOUN	_	Gender=Fem|Number=Sing	41	obl:mod	_	_
45	de	de	ADP	_	_	47	case	_	_
46	tout	tout	ADJ	_	Gender=Masc|Number=Sing	47	amod	_	_
47	ce	ce	PRON	_	_	44	nmod	_	_
48	que	que	PRON	_	PronType=Rel	54	obj	_	_
49	nous	soi	PRON	_	Number=Plur|Person=1|PronType=Prs	54	dislocated	_	_
50	tous	tout	ADJ	_	Gender=Masc|Number=Plur	49	amod	_	SpaceAfter=No
51	,	,	PUNCT	_	_	54	punct	_	_
52	nous	il	PRON	_	Number=Plur|Person=1	54	expl:subj	_	_
53	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	54	aux:tense	_	_
54	admis	admettre	VERB	_	Gender=Masc|Tense=Past|VerbForm=Part	47	acl:relcl	_	_
55	jusqu'	jusque	ADP	_	_	58	case	_	SpaceAfter=No
56	à	à	ADP	_	_	58	case	_	_
57	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	58	det	_	_
58	jour	jour	NOUN	_	Gender=Masc|Number=Sing	54	obl:mod	_	SpaceAfter=No
59	.	.	PUNCT	_	_	4	punct	_	_

~~~


