---
layout: base
title:  'Statistics of iobj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_sequoia-dep-iobj-agent.html">iobj:agent</a></tt>.

135 nodes (0%) are attached to their parents as `iobj`.

131 instances of `iobj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.64444444444444.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (132; 98% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 iobj	color:blue
1	Nul	nul	PRON	_	Gender=Masc|Number=Sing|PronType=Neg	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	où	où	PRON	_	PronType=Int	7	iobj	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	piste	piste	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	_
7	conduisait	conduire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
8	ensuite	ensuite	ADV	_	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	J'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	SpaceAfter=No
2	en	en	PRON	_	Person=3|PronType=Prs	4	iobj	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	satisfait	satisfait	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	pour	pour	ADP	_	_	7	case	_	_
6	deux	deux	NUM	_	NumType=Card	7	nummod	_	_
7	raisons	raison	NOUN	_	Gender=Fem|Number=Plur	4	obl:mod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	16	punct	_	_
9	tout	tout	ADV	_	ExtPos=ADV	16	advmod	_	Idiom=Yes
10	d'	de	ADP	_	_	9	fixed	_	InIdiom=Yes|SpaceAfter=No
11	abord	abord	ADV	_	_	9	fixed	_	InIdiom=Yes
12	parce	parce	SCONJ	_	ExtPos=SCONJ	16	mark	_	Idiom=Yes
13	que	que	SCONJ	_	_	12	fixed	_	InIdiom=Yes
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	Commission	commission	NOUN	_	Gender=Fem|Number=Sing	16	nsubj	_	_
16	relie	relier	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	Charte	charte	NOUN	_	Gender=Fem|Number=Sing	16	obj	_	_
19	de	de	ADP	_	_	21	case	_	_
20	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	21	det	_	_
21	droits	droit	NOUN	_	Gender=Masc|Number=Plur	18	nmod	_	_
22	fondamentaux	fondamental	ADJ	_	Gender=Masc|Number=Plur	21	amod	_	_
23	à	à	ADP	_	_	25	case	_	_
24	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	_
25	conférence	conférence	NOUN	_	Gender=Fem|Number=Sing	16	obl:arg	_	_
26	intergouvernementale	intergouvernemental	ADJ	_	Gender=Fem|Number=Sing	25	amod	_	_
27	-	-	PUNCT	_	_	16	punct	_	SpaceAfter=No
28	et	et	CCONJ	_	_	32	cc	_	_
29	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	32	nsubj	_	SpaceAfter=No
30	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	_
31	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	32	det	_	SpaceAfter=No
32	objectif	objectif	NOUN	_	Gender=Masc|Number=Sing	16	conj	_	_
33	politique	politique	ADJ	_	Number=Sing	32	amod	_	_
34	de	de	ADP	_	_	36	case	_	_
35	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	36	det	_	_
36	Parlement	parlement	NOUN	_	Gender=Masc|Number=Sing	32	nmod	_	_
37	dans	dans	ADP	_	_	39	case	_	_
38	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	39	det	_	_
39	rapport	rapport	NOUN	_	Gender=Masc|Number=Sing	32	nmod	_	_
40	de	de	ADP	_	_	41	case	_	_
41	MM.	monsieur	NOUN	_	Gender=Masc|Number=Plur	39	nmod	_	_
42	Duff	Duff	PROPN	_	Gender=Masc|Number=Sing	41	nmod	_	_
43	et	et	CCONJ	_	_	44	cc	_	_
44	Voggenhuber	Voggenhuber	PROPN	_	_	41	conj	_	SpaceAfter=No
45	-	-	PUNCT	_	_	16	punct	_	SpaceAfter=No
46	,	,	PUNCT	_	_	51	punct	_	_
47	ensuite	ensuite	ADV	_	_	51	advmod	_	_
48	parce	parce	SCONJ	_	ExtPos=SCONJ	51	mark	_	Idiom=Yes
49	qu'	que	SCONJ	_	_	48	fixed	_	InIdiom=Yes|SpaceAfter=No
50	elle	lui	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	51	nsubj	_	_
51	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
52	l'	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	53	obj	_	SpaceAfter=No
53	intégrer	intégrer	VERB	_	VerbForm=Inf	51	xcomp	_	Subject=SubjRaising
54	dans	dans	ADP	_	_	56	case	_	_
55	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	56	det	_	_
56	campagne	campagne	NOUN	_	Gender=Fem|Number=Sing	53	obl:arg	_	SpaceAfter=No
57	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 iobj	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	recommandation	recommandation	NOUN	_	Gender=Fem|Number=Sing	11	nsubj	_	_
3	pour	pour	ADP	_	_	6	case	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	deuxième	deuxième	ADJ	_	Number=Sing|NumType=Ord	6	amod	_	_
6	lecture	lecture	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
7	dont	dont	PRON	_	PronType=Rel	10	iobj	_	_
8	il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	expl:subj	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	question	question	NOUN	_	Gender=Fem|Number=Sing	6	acl:relcl	_	_
11	constitue	constituer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	acte	acte	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	_
14	législatif	législatif	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
15	très	très	ADV	_	_	16	advmod	_	_
16	important	important	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
17	pour	pour	ADP	_	_	19	case	_	_
18	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	19	det	_	SpaceAfter=No
19	environnement	environnement	NOUN	_	Gender=Masc|Number=Sing	16	obl:mod	_	SpaceAfter=No
20	,	,	PUNCT	_	_	25	punct	_	_
21	mais	mais	CCONJ	_	_	25	cc	_	_
22	également	également	ADV	_	_	25	advmod	_	_
23	pour	pour	ADP	_	_	25	case	_	_
24	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	25	det	_	SpaceAfter=No
25	économie	économie	NOUN	_	Gender=Fem|Number=Sing	19	conj	_	_
26	à	à	ADP	_	_	28	case	_	_
27	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	sein	sein	NOUN	_	Gender=Masc|Number=Sing	25	nmod	_	_
29	de	de	ADP	_	_	31	case	_	_
30	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	31	det	_	SpaceAfter=No
31	Union	union	NOUN	_	Gender=Fem|Number=Sing	28	nmod	_	_
32	européenne	européen	ADJ	_	Gender=Fem|Number=Sing	31	amod	_	SpaceAfter=No
33	.	.	PUNCT	_	_	11	punct	_	_

~~~


