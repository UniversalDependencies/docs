---
layout: base
title:  'Statistics of obj:lvc in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="fr_gsd-dep-obj-agent.html">obj:agent</a></tt>.

552 nodes (0%) are attached to their parents as `obj:lvc`.

552 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19565217391304.

The following 3 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (550; 100% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj:lvc	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=il
2	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	partie	partie	NOUN	_	Gender=Fem|Number=Sing	2	obj:lvc	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	section	section	NOUN	_	Gender=Fem|Number=Sing	2	obl:arg	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Nobressart	Nobressart	PROPN	_	_	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 44 obj:lvc	color:blue
1	Ainsi	ainsi	ADV	_	_	42	advmod	_	SpaceAfter=No|wordform=ainsi
2	,	,	PUNCT	_	_	1	punct	_	_
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	diplomatie	diplomatie	NOUN	_	Gender=Fem|Number=Sing	42	nsubj	_	_
5	marocaine	marocain	ADJ	_	Gender=Fem|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	_
8	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
9	en	en	ADP	_	_	11	case	_	_
10	pleine	plein	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	_
11	déconfiture	déconfiture	NOUN	_	Gender=Fem|Number=Sing	8	obl:mod	_	_
12	après	après	ADP	_	_	14	case	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	résolution	résolution	NOUN	_	Gender=Fem|Number=Sing	8	obl:mod	_	_
15	adoptée	adopter	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	14	acl	_	_
16	par	par	ADP	_	_	18	case	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	Parlement	parlement	NOUN	_	Gender=Masc|Number=Sing	15	obl:agent	_	wordform=parlement
19	européen	européen	ADJ	_	Gender=Masc|Number=Sing	18	amod	_	_
20	et	et	CCONJ	_	_	22	cc	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	vote	vote	NOUN	_	Gender=Masc|Number=Sing	14	conj	_	_
23	de	de	ADP	_	_	25	case	_	_
24	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	Parlement	parlement	NOUN	_	Gender=Masc|Number=Sing	22	nmod	_	wordform=parlement
26	espagnol	espagnol	ADJ	_	Gender=Masc|Number=Sing	25	amod	_	_
27	qui	qui	PRON	_	PronType=Rel	30	nsubj	_	_
28	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	30	aux:tense	_	_
29	fermement	fermement	ADV	_	_	30	advmod	_	_
30	condamné	condamner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	acl:relcl	_	_
31	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	32	det	_	SpaceAfter=No
32	attaque	attaque	NOUN	_	Gender=Fem|Number=Sing	30	obj	_	_
33	de	de	ADP	_	_	36	case	_	_
34	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	_	_
35	«	«	PUNCT	_	_	36	punct	_	_
36	camp	camp	NOUN	_	Gender=Masc|Number=Sing	32	nmod	_	_
37	de	de	ADP	_	_	39	case	_	_
38	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	39	det	_	_
39	liberté	liberté	NOUN	_	Gender=Fem|Number=Sing	36	nmod	_	_
40	»	»	PUNCT	_	_	36	punct	_	SpaceAfter=No
41	,	,	PUNCT	_	_	8	punct	_	_
42	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
43	«	«	PUNCT	_	_	44	punct	_	_
44	contre	contre	ADP	_	_	42	obj:lvc	_	ExtPos=NOUN|Idiom=Yes
45	mauvaise	mauvais	ADJ	_	Gender=Fem|Number=Sing	44	fixed	_	InIdiom=Yes
46	fortune	fortune	NOUN	_	Gender=Fem|Number=Sing	44	fixed	_	InIdiom=Yes
47	bon	bon	ADJ	_	Gender=Masc|Number=Sing	44	fixed	_	InIdiom=Yes
48	coeur	cœur	NOUN	_	Gender=Masc|Number=Sing	44	fixed	_	InIdiom=Yes|wordform=cœur
49	»	»	PUNCT	_	_	44	punct	_	_
50	et	et	CCONJ	_	_	51	cc	_	_
51	change	changer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	conj	_	_
52	son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	53	det	_	_
53	fusil	fusil	NOUN	_	Gender=Masc|Number=Sing	51	obj:lvc	_	_
54	d'	de	ADP	_	_	55	case	_	SpaceAfter=No
55	épaule	épaule	NOUN	_	Gender=Fem|Number=Sing	51	obl:arg	_	SpaceAfter=No
56	.	.	PUNCT	_	_	42	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj:lvc	color:blue
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=un
2	jour	jour	NOUN	_	Gender=Masc|Number=Sing	6	obl:mod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	Abelforth	Abelforth	PROPN	_	_	6	nsubj	_	_
5	en	en	PRON	_	Person=3|PronType=Prs	7	nmod	_	_
6	eût	avoir	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	assez	assez	ADV	_	_	6	obj:lvc	_	_
8	et	et	CCONJ	_	_	9	cc	_	_
9	tenta	tenter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	conj	_	_
10	de	de	ADP	_	_	11	mark	_	_
11	convaincre	convaincre	VERB	_	VerbForm=Inf	9	xcomp	_	_
12	Albus	Albus	PROPN	_	_	11	obj	_	_
13	de	de	ADP	_	_	14	mark	_	_
14	laisser	laisser	VERB	_	VerbForm=Inf	11	xcomp	_	_
15	tomber	tomber	VERB	_	VerbForm=Inf	14	xcomp	_	_
16	tous	tout	ADJ	_	Gender=Masc|Number=Plur	18	amod	_	_
17	ses	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=3|PronType=Prs	18	det	_	_
18	plans	plan	NOUN	_	Gender=Masc|Number=Plur	15	obj	_	_
19	de	de	ADP	_	_	20	case	_	_
20	grandeur	grandeur	NOUN	_	Gender=Fem|Number=Sing	18	nmod	_	_
21	pour	pour	ADP	_	_	23	mark	_	_
22	s'	se	PRON	_	Person=3|PronType=Prs|Reflex=Yes	23	expl:pv	_	SpaceAfter=No
23	occuper	occuper	VERB	_	VerbForm=Inf	14	advcl	_	_
24	d'	de	ADP	_	_	25	case	_	SpaceAfter=No
25	Ariana	Ariana	PROPN	_	_	23	obl:arg	_	SpaceAfter=No
26	.	.	PUNCT	_	_	6	punct	_	_

~~~


