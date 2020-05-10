---
layout: base
title:  'Statistics of obj:lvc in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="fr_gsd-dep-obj-agent.html">obj:agent</a></tt>.

560 nodes (0%) are attached to their parents as `obj:lvc`.

559 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31785714285714.

The following 7 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (550; 98% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 obj:lvc	color:blue
1	Pour	pour	ADP	_	_	3	case	_	wordform=pour
2	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	menu	menu	NOUN	_	Gender=Masc|Number=Sing	10	obl:mod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	39	39	NUM	_	_	6	nummod	_	_
6	€	€	SYM	_	_	3	nmod	_	EXTPOS=NOUN|SpaceAfter=No|Type=Conv
7	,	,	PUNCT	_	_	3	punct	_	_
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	expl:subj	_	_
9	y	y	PRON	_	_	10	expl:comp	_	_
10	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	de	de	ADP	_	_	12	case	_	_
12	quoi	quoi	PRON	_	PronType=Int	14	obl:arg	_	_
13	être	être	AUX	_	VerbForm=Inf	14	aux:tense	_	_
14	déçu	décevoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	obj:lvc	_	_
15	!	!	PUNCT	_	_	10	punct	_	_

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
11	déconfiture	déconfiture	NOUN	_	Gender=Fem|Number=Sing	8	obl	_	_
12	après	après	ADP	_	_	14	case	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	résolution	résolution	NOUN	_	Gender=Fem|Number=Sing	8	obl	_	_
15	adoptée	adopter	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	14	acl	_	_
16	par	par	ADP	_	_	18	case	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	Parlement	Parlement	PROPN	_	_	15	obl:agent	_	_
19	européen	européen	ADJ	_	Gender=Masc|Number=Sing	18	amod	_	_
20	et	et	CCONJ	_	_	22	cc	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	vote	vote	NOUN	_	Gender=Masc|Number=Sing	14	conj	_	_
23	de	de	ADP	_	_	25	case	_	_
24	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	Parlement	Parlement	PROPN	_	_	22	nmod	_	_
26	espagnol	espagnol	ADJ	_	Gender=Masc|Number=Sing	25	amod	_	_
27	qui	qui	PRON	_	PronType=Rel	30	nsubj	_	_
28	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	30	aux:tense	_	_
29	fermement	fermement	ADV	_	_	30	advmod	_	_
30	condamné	condamner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	acl:relcl	_	_
31	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	32	det	_	SpaceAfter=No
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
44	contre	contre	ADP	_	_	42	obj:lvc	_	EXTPOS=NOUN|Type=MWE
45	mauvaise	mauvais	ADJ	_	Gender=Fem|Number=Sing	44	fixed	_	_
46	fortune	fortune	NOUN	_	Gender=Fem|Number=Sing	44	fixed	_	_
47	bon	bon	ADJ	_	Gender=Masc|Number=Sing	44	fixed	_	_
48	coeur	cœur	NOUN	_	Gender=Masc|Number=Sing	44	fixed	_	wordform=cœur
49	»	»	PUNCT	_	_	44	punct	_	_
50	et	et	CCONJ	_	_	51	cc	_	_
51	change	changer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	conj	_	EXTPOS=VERB|Type=MWE
52	son	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	51	fixed	_	_
53	fusil	fusil	NOUN	_	Gender=Masc|Number=Sing	51	fixed	_	_
54	d'	de	ADP	_	_	51	fixed	_	SpaceAfter=No
55	épaule	épaule	NOUN	_	Gender=Fem|Number=Sing	51	fixed	_	SpaceAfter=No
56	.	.	PUNCT	_	_	42	punct	_	_

~~~


