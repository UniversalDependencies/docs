---
layout: base
title:  'Statistics of obj:agent in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `obj:agent`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-obj.html">obj</a></tt>.

10 nodes (0%) are attached to their parents as `obj:agent`.

9 instances of `obj:agent` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.6.

The following 2 pairs of parts of speech are connected with `obj:agent`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (9; 90% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj:agent	color:blue
1	Faire	faire	AUX	_	VerbForm=Inf	3	aux:caus	_	_
2	s'	se	PRON	_	Person=3|Reflex=Yes	3	expl	_	SpaceAfter=No
3	exprimer	exprimer	VERB	_	VerbForm=Inf	13	dislocated	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	enfants	enfant	NOUN	_	Number=Plur	3	obj:agent	_	_
6	à	à	ADP	_	_	9	case	_	_
7	travers	travers	NOUN	_	Gender=Masc	6	fixed	_	_
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	activité	activité	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	c'	ce	PRON	_	Number=Sing|Person=3	13	nsubj	_	SpaceAfter=No
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	important	important	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 39 obj:agent	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3	4	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	commun	commun	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
6	de	de	ADP	_	_	7	mark	_	_
7	dire	dire	VERB	_	VerbForm=Inf	4	dislocated	_	_
8	que	que	SCONJ	_	_	26	mark	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	Union	Union	PROPN	_	Number=Sing	26	nsubj	_	_
11	européenne	européen	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	10	punct	_	_
13	telle	tel	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	_
14	qu'	que	SCONJ	_	_	16	mark	_	SpaceAfter=No
15	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	16	nsubj	_	_
16	fonctionne	fonctionner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	_	_
17	aujourd'	aujourd'	ADP	_	_	16	advmod	_	SpaceAfter=No
18	hui	hui	NOUN	_	_	17	fixed	_	SpaceAfter=No
19	,	,	PUNCT	_	_	16	punct	_	_
20	face	face	NOUN	_	Gender=Fem|Number=Sing	24	case	_	_
21	à	à	ADP	_	_	20	fixed	_	_
22	tous	tout	ADJ	_	Gender=Masc|Number=Plur	24	amod	_	_
23	ces	ce	DET	_	Number=Plur|PronType=Dem	24	det	_	_
24	défis	défi	NOUN	_	Gender=Masc|Number=Plur	26	obl	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	appelle	appeler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	_
27	absolument	absolument	ADV	_	_	26	advmod	_	_
28	certaines	certain	DET	_	Gender=Fem|Number=Plur	29	det	_	_
29	transformations	transformation	NOUN	_	Gender=Fem|Number=Plur	26	obj	_	SpaceAfter=No
30	,	,	PUNCT	_	_	29	punct	_	_
31	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	32	det	_	_
32	transformations	transformation	NOUN	_	Gender=Fem|Number=Plur	29	appos	_	_
33	qui	qui	PRON	_	PronType=Rel	34	nsubj	_	_
34	auront	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	32	acl:relcl	_	_
35	comme	comme	ADP	_	_	36	case	_	_
36	but	but	NOUN	_	Gender=Masc|Number=Sing	34	xcomp	_	_
37	principal	principal	ADJ	_	Gender=Masc|Number=Sing	36	amod	_	_
38	de	de	ADP	_	_	42	mark	_	_
39	la	le	PRON	_	Gender=Fem|Number=Sing|Person=3	42	obj:agent	_	_
40	faire	faire	AUX	_	VerbForm=Inf	42	aux:caus	_	_
41	encore	encore	ADV	_	_	42	advmod	_	_
42	évoluer	évoluer	VERB	_	VerbForm=Inf	34	xcomp	_	_
43	sur	sur	ADP	_	_	45	case	_	_
44	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	45	det	_	_
45	base	base	NOUN	_	Gender=Fem|Number=Sing	42	obl	_	_
46	de	de	ADP	_	_	48	case	_	_
47	tout	tout	ADJ	_	Gender=Masc|Number=Sing	48	amod	_	_
48	ce	ce	PRON	_	_	45	nmod	_	_
49	que	que	PRON	_	PronType=Rel	55	obj	_	_
50	nous	soi	PRON	_	Number=Plur|Person=1|PronType=Prs	55	dislocated	_	_
51	tous	tout	ADJ	_	Gender=Masc|Number=Plur	50	amod	_	SpaceAfter=No
52	,	,	PUNCT	_	_	55	punct	_	_
53	nous	il	PRON	_	Number=Plur|Person=1	55	nsubj	_	_
54	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	55	aux	_	_
55	admis	admettre	VERB	_	Gender=Masc|Tense=Past|VerbForm=Part	48	acl:relcl	_	_
56	jusqu'	jusque	ADP	_	_	59	case	_	SpaceAfter=No
57	à	à	ADP	_	_	56	fixed	_	_
58	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	59	det	_	_
59	jour	jour	NOUN	_	Gender=Masc|Number=Sing	55	obl	_	SpaceAfter=No
60	.	.	PUNCT	_	_	4	punct	_	_

~~~


