---
layout: base
title:  'Statistics of iobj in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_partut-dep-iobj-agent.html">iobj:agent</a></tt>.

111 nodes (0%) are attached to their parents as `iobj`.

110 instances of `iobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12612612612613.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (106; 95% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 iobj	color:blue
1	Moi	moi	PRON	PE	Number=Sing|Person=1|PronType=Prs	10	dislocated	_	_
2	non	non	ADV	BN	PronType=Neg	1	advmod	_	_
3	plus	plus	ADV	B	_	2	fixed	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
6	ne	ne	PART	PART	Polarity=Neg	10	advmod	_	_
7	m'	me	PRON	P	Person=1|PronType=Prs	10	iobj	_	SpaceAfter=No
8	avez	avoir	AUX	VA	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	pas	pas	ADV	BN	Polarity=Neg	10	advmod	_	_
10	donné	donner	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	parole	parole	NOUN	S	Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 28 iobj	color:blue
1	2	2	NUM	N	NumType=Card	9	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	De	de	ADP	E	_	9	advmod	_	_
4	plus	plus	ADV	B	_	3	fixed	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
7	ne	ne	PART	PART	Polarity=Neg	9	advmod	_	_
8	sera	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	aux:pass	_	_
9	fait	faire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
10	aucune	aucun	DET	DI	Gender=Fem|Number=Sing|PronType=Ind	11	det	_	_
11	distinction	distinction	NOUN	S	Gender=Fem|Number=Sing	9	nsubj:pass	_	_
12	fondée	fonder	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	11	acl	_	_
13	sur	sur	ADP	E	_	15	case	_	_
14	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	statut	statut	NOUN	S	Gender=Masc|Number=Sing	12	obl	_	_
16	politique	politique	ADJ	A	Gender=Masc|Number=Sing	15	amod	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	18	punct	_	_
18	juridique	juridique	ADJ	A	Gender=Fem|Number=Sing	16	conj	_	_
19	ou	ou	CCONJ	CC	_	20	cc	_	_
20	international	international	ADJ	A	Gender=Masc|Number=Sing	16	conj	_	_
21	de	de	ADP	E	_	23	case	_	_
22	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	23	det	_	_
23	pays	pays	NOUN	S	Gender=Masc|Number=Sing	15	nmod	_	_
24	ou	ou	CCONJ	CC	_	27	cc	_	_
25	de	de	ADP	E	_	27	case	_	_
26	le	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	27	det	_	_
27	territoire	territoire	NOUN	S	Gender=Masc|Number=Sing	23	conj	_	_
28	dont	dont	PRON	PR	PronType=Rel	32	iobj	_	_
29	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	personne	personne	NOUN	S	Gender=Fem|Number=Sing	32	nsubj	_	_
31	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	_
32	ressortissante	ressortissant	ADJ	A	Gender=Fem|Number=Sing	27	acl:relcl	_	SpaceAfter=No
33	,	,	PUNCT	FF	_	32	punct	_	_
34	que	que	SCONJ	CS	_	40	mark	_	_
35	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	36	det	_	_
36	pays	pays	NOUN	S	Gender=Masc|Number=Sing	40	nsubj	_	_
37	ou	ou	CCONJ	CC	_	38	cc	_	_
38	territoire	territoire	NOUN	S	Gender=Masc|Number=Sing	36	conj	_	_
39	soit	être	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	40	cop	_	_
40	indépendant	indépendant	ADJ	A	Gender=Masc|Number=Sing	32	advcl	_	SpaceAfter=No
41	,	,	PUNCT	FF	_	43	punct	_	_
42	sous	sous	ADP	E	_	43	case	_	_
43	tutelle	tutelle	NOUN	S	Gender=Fem|Number=Sing	40	conj	_	SpaceAfter=No
44	,	,	PUNCT	FF	_	46	punct	_	_
45	non	non	ADV	BN	PronType=Neg	46	advmod	_	_
46	autonome	autonome	ADJ	A	Gender=Fem|Number=Sing	40	conj	_	_
47	ou	ou	CCONJ	CC	_	48	cc	_	_
48	soumis	soumettre	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	40	conj	_	_
49	à	à	ADP	E	_	51	case	_	_
50	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	51	det	_	_
51	limitation	limitation	NOUN	S	Gender=Fem|Number=Sing	48	obl	_	_
52	quelconque	quelconque	DET	DI	Gender=Fem|Number=Sing|PronType=Ind	51	det	_	_
53	de	de	ADP	E	_	54	case	_	_
54	souveraineté	souveraineté	NOUN	S	Gender=Fem|Number=Sing	51	nmod	_	SpaceAfter=No
55	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 iobj	color:blue
1	Cet	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	engagement	engagement	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	_
3	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	important	important	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
5	dans	dans	ADP	E	_	7	case	_	_
6	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	mesure	mesure	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	_
8	où	où	PRON	PR	PronType=Rel	13	iobj	_	_
9	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	commission	commission	NOUN	S	Gender=Fem|Number=Sing	13	nsubj	_	_
11	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	organisme	organisme	NOUN	S	Gender=Masc|Number=Sing	7	acl:relcl	_	_
14	qui	qui	PRON	PR	PronType=Rel	15	nsubj	_	_
15	détient	détenir	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	acl:relcl	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	15	punct	_	_
17	conformément	conformément	ADV	B	_	20	advmod	_	_
18	à	à	ADP	E	_	17	fixed	_	_
19	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	20	det	_	_
20	traités	traité	NOUN	S	Gender=Masc|Number=Plur	15	obl	_	SpaceAfter=No
21	,	,	PUNCT	FF	_	20	punct	_	_
22	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	monopole	monopole	NOUN	S	Gender=Masc|Number=Sing	15	obj	_	_
24	de	de	ADP	E	_	26	case	_	_
25	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	26	det	_	SpaceAfter=No
26	initiative	initiative	NOUN	S	Gender=Fem|Number=Sing	23	nmod	_	_
27	et	et	CCONJ	CC	_	33	cc	_	_
28	qui	qui	PRON	PR	PronType=Rel	33	nsubj	_	SpaceAfter=No
29	,	,	PUNCT	FF	_	33	punct	_	_
30	par	par	ADP	E	_	33	advmod	_	_
31	conséquent	conséquent	ADJ	A	Gender=Masc|Number=Sing	30	fixed	_	SpaceAfter=No
32	,	,	PUNCT	FF	_	33	punct	_	_
33	décide	décider	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	conj	_	_
34	pour	pour	ADP	E	_	36	case	_	_
35	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	36	det	_	SpaceAfter=No
36	essentiel	essentiel	ADJ	A	Gender=Masc|Number=Sing	33	obl	_	_
37	quelle	quel	PRON	PQ	Gender=Fem|Number=Sing|PronType=Int	33	ccomp	_	_
38	sera	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	37	cop	_	_
39	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	40	det	_	SpaceAfter=No
40	activité	activité	NOUN	S	Gender=Fem|Number=Sing	37	nsubj	_	_
41	politique	politique	ADJ	A	Number=Sing	40	amod	_	_
42	et	et	CCONJ	CC	_	43	cc	_	_
43	législative	législatif	ADJ	A	Gender=Fem|Number=Sing	41	conj	_	_
44	de	de	ADP	E	_	46	case	_	_
45	ce	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	46	det	_	_
46	parlement	parlement	NOUN	S	Gender=Masc|Number=Sing	40	nmod	_	_
47	à	à	ADP	E	_	49	case	_	_
48	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	49	det	_	_
49	cours	cours	NOUN	S	Gender=Masc|Number=Sing	37	nmod	_	_
50	de	de	ADP	E	_	54	case	_	_
51	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	54	det	_	_
52	cinq	cinq	NUM	N	NumType=Card	54	nummod	_	_
53	prochaines	prochain	ADJ	A	Gender=Fem|Number=Plur	54	amod	_	_
54	années	année	NOUN	S	Gender=Fem|Number=Plur	49	nmod	_	SpaceAfter=No
55	.	.	PUNCT	FS	_	4	punct	_	_

~~~


